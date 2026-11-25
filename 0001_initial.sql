-- Phase 2 schema draft. Apply only after configuring Cloudflare D1.
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT DEFAULT '',
  price_inr INTEGER NOT NULL DEFAULT 200 CHECK(price_inr = 200),
  preview_key TEXT,
  private_file_key TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT,
  product_id TEXT NOT NULL REFERENCES products(id),
  amount_inr INTEGER NOT NULL DEFAULT 200 CHECK(amount_inr = 200),
  upi_transaction_id TEXT NOT NULL UNIQUE,
  payment_screenshot_key TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','rejected','expired')),
  approved_at TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS admin_actions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL REFERENCES orders(id),
  action TEXT NOT NULL CHECK(action IN ('approved','rejected')),
  actor TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_products_category_status ON products(category,status);
CREATE INDEX IF NOT EXISTS idx_orders_status_created ON orders(status,created_at);
