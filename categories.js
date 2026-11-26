
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB
      .prepare("SELECT * FROM categories ORDER BY name ASC")
      .all();

    return Response.json({
      success: true,
      count: results.length,
      categories: results
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Unable to fetch categories" },
      { status: 500 }
    );
  }
}
