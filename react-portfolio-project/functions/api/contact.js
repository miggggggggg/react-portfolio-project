export async function onRequestPost({ request, env }) {
  try {
    const { name, email, message, turnstileToken } = await request.json();
    if (!turnstileToken) {
      return new Response(
        JSON.stringify({ error: "Missing Turnstile token" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
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
      return new Response(
        JSON.stringify({
          error: "Bot verification failed",
          codes: outcome["error-codes"],
        }),
        { status: 403, headers: { "Content-Type": "application/json" } },
      );
    }
    // Verification passed! Send your email here (e.g., via Resend API fetch call)
    return new Response(JSON.stringify({ ok: true, sender: name }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid request payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
