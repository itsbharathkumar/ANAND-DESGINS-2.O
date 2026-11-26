
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB.prepare(`
      SELECT
        p.id,
        p.category_id,
        c.name AS category_name,
        p.title,
        p.slug,
        p.description,
        p.price_paise,
        p.preview_key,
        p.created_at
      FROM products p
      LEFT JOIN categories c
        ON p.category_id = c.id
      WHERE p.status = 'published'
      ORDER BY p.created_at DESC
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
