
interface Env {
  TURNSTILE_SECRET_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Only accept POST requests to /api/submit
    if (url.pathname !== "/api/submit" || request.method !== "POST") {
      return Response.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    // Retrieve the submitted form data
    const formData = await request.formData();
    const token = formData.get("cf-turnstile-response");
    const ip = request.headers.get("CF-Connecting-IP");

    if (typeof token !== "string" || !token) {
      return Response.json(
        { error: "CAPTCHA token missing." },
        { status: 400 }
      );
    }

    // Verify the token with Cloudflare
    const validationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          ...(ip ? { remoteip: ip } : {}),
        }),
      }
    );

    const outcome = await validationResponse.json() as {
      success: boolean;
    };

    if (!outcome.success) {
      return Response.json(
        { error: "CAPTCHA verification failed." },
        { status: 403 }
      );
    }

    // CAPTCHA verified successfully
    return Response.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  },
};
