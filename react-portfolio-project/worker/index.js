export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact" || request.method !== "POST") {
      return new Response("Not Found", { status: 404 });
    }

    try {
      const { name, email, message, turnstileToken } = await request.json();

      if (!turnstileToken) {
        return Response.json(
          { error: "Missing Turnstile token" },
          { status: 400 },
        );
      }

      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
            remoteip: request.headers.get("CF-Connecting-IP"),
          }),
        },
      );

      const outcome = await verifyRes.json();

      if (!outcome.success) {
        return Response.json(
          {
            error: "Bot verification failed",
            codes: outcome["error-codes"],
          },
          { status: 403 },
        );
      }

      // Verification passed! Send your email here.

      return Response.json({ ok: true, sender: name });
    } catch (err) {
      console.error("Contact endpoint error:", err);

      return Response.json(
        { error: "Invalid request payload" },
        { status: 400 },
      );
    }
  },
};
