
interface Env {
  TURNSTILE_SECRET_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== "/api/submit" || request.method !== "POST") {
      return Response.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    try {
      const formData = await request.formData();
      const token = formData.get("cf-turnstile-response");
      const ip = request.headers.get("CF-Connecting-IP");

      if (typeof token !== "string" || !token) {
        return Response.json(
          { error: "CAPTCHA token missing." },
          { status: 400 }
        );
      }

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

      if (!validationResponse.ok || !outcome.success) {
        return Response.json(
          { error: "CAPTCHA verification failed." },
          { status: 403 }
        );
      }

      formData.delete("cf-turnstile-response");

      const formspreeResponse = await fetch(
        "https://formspree.io/f/mvgrdglz",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!formspreeResponse.ok) {
        return Response.json(
          { error: "Form submission failed. Please try again." },
          { status: 502 }
        );
      }

      return Response.json(
        { message: "Form submitted successfully!" },
        { status: 200 }
      );

    } catch {
      return Response.json(
        { error: "An unexpected error occurred. Please try again." },
        { status: 500 }
      );
    }
  },
};
