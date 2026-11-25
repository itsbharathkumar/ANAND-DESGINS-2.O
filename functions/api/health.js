
export async function onRequestGet({ env }) {
  try {
    const result = await env.DB
      .prepare("SELECT 1 AS ok")
      .first();

    return Response.json({
      status: "healthy",
      database: result?.ok === 1 ? "connected" : "error"
    });
  } catch (error) {
    return Response.json(
      {
        status: "error",
        database: "unavailable"
      },
      { status: 500 }
    );
  }
}
