
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB.prepare(`
      SELECT
        id,
        category_id,
        title,
        slug,
        description,
        price_paise,
        preview_key,
        created_at
      FROM products
      WHERE status = 'published'
      ORDER BY created_at DESC
    `).all();

    return Response.json({
      success: true,
      count: results.length,
      products: results
    });

  } catch (error) {
    console.error("Products API error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to fetch products"
      },
      { status: 500 }
    );
  }
}
