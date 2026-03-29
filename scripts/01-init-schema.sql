-- SANMUK E-Commerce Database Schema
-- Initialize all required tables for the luxury embroidery brand

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('shirts', 'sweatshirts', 'hoops', 'other')),
  image_url TEXT,
  thumbnail_url TEXT,
  embroidery_design TEXT,
  colors TEXT[] DEFAULT ARRAY[]::TEXT[],
  sizes TEXT[] DEFAULT ARRAY[]::TEXT[],
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  color TEXT,
  size TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies (allow public read on products, all access for now)
CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for all users" ON orders FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for all users" ON order_items FOR SELECT USING (true);
