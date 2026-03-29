-- Seed SANMUK products
INSERT INTO products (name, description, category, price, image_url, sizes, colors, stock, created_at) VALUES
(
  'Feather Motif White Shirt',
  'Premium white linen shirt featuring minimalist embroidered feather designs in multiple earth tones. Perfect for versatile styling.',
  'shirts',
  85.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-maZFPzESu7b6fCqgEdxzm89VZDLQhM.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL', 'XXL']::text[],
  ARRAY['White', 'Cream', 'Sage Green', 'Blue']::text[],
  50,
  NOW()
),
(
  'Floral Balloon Embroidery Hoop',
  'Beautiful hand-embroidered piece featuring a whimsical elephant holding colorful balloons. A perfect decorative statement for any room.',
  'hoops',
  65.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oWglPMlHgzMiARD0QZ2HmkGUTieaR5.png',
  ARRAY['One Size']::text[],
  ARRAY['Natural']::text[],
  30,
  NOW()
),
(
  'Cute Animals Embroidered Shirt',
  'Elegant linen shirt with minimalist embroidered animals and flowers. A charming addition to any wardrobe.',
  'shirts',
  80.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MBzJnhHBKwXLm8W1kkiaICPFVMjjPx.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL']::text[],
  ARRAY['Light Gray', 'White', 'Beige']::text[],
  45,
  NOW()
),
(
  'Collar Flower Embroidery Shirts',
  'Set of three linen shirts with coordinating floral embroidery on the collar. Available in white, sage green, and steel blue.',
  'shirts',
  95.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d7XASxHMyrKGuWIwrUEs6tYKpYoctj.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL']::text[],
  ARRAY['White', 'Sage Green', 'Steel Blue']::text[],
  40,
  NOW()
),
(
  'Blueberry Embroidery T-shirt',
  'Soft premium cotton t-shirt with delicate hand-embroidered blueberry and leaf design. Understated elegance.',
  'shirts',
  55.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XqAnVmU2bp067omOQwLscePrFqkLSA.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL', 'XXL']::text[],
  ARRAY['White', 'Cream']::text[],
  60,
  NOW()
),
(
  'Train Journey Embroidery',
  'Whimsical embroidered design featuring a colorful train with passenger cars and cloud trail. Perfect wall art or gift.',
  'hoops',
  70.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jqVI0JwhaZH9ik7K5UmtCBY7PQJf4d.png',
  ARRAY['One Size']::text[],
  ARRAY['Gray']::text[],
  25,
  NOW()
),
(
  'Chamomile Dream Sweatshirt',
  'Cozy sweatshirt with delicate white chamomile flowers embroidered across the chest. Comfort meets elegance.',
  'sweatshirts',
  99.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UmMXmYtM1CZ2PaUacTddm39nGdfGBn.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL', 'XXL']::text[],
  ARRAY['Beige', 'Cream']::text[],
  35,
  NOW()
),
(
  'Dragonfly Pocket Detail Shirt',
  'Minimalist white linen shirt with charming blue dragonfly embroidery on the pocket. Timeless and playful.',
  'shirts',
  82.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sTAABSLdqw2fiqGfCVkyaHMXVPOw1X.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL']::text[],
  ARRAY['Green']::text[],
  40,
  NOW()
),
(
  'Wildflower Holding Shirt',
  'Artistic white linen shirt featuring hand-holding line design with delicate wildflowers. Meaningful and wearable art.',
  'shirts',
  87.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XAhOIE6xI5pKYLwGdVIcpUY60aQpg8.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL']::text[],
  ARRAY['White', 'Cream']::text[],
  38,
  NOW()
),
(
  'Cotton Petal Sweatshirt',
  'Premium cotton sweatshirt with embroidered cotton flowers on the chest. Soft, warm, and beautifully detailed.',
  'sweatshirts',
  105.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-688s6M8r6Uffdhzoa3D4vp8gqNQRBr.png',
  ARRAY['S', 'M', 'L', 'XL', 'XXL']::text[],
  ARRAY['Sage Green']::text[],
  32,
  NOW()
),
(
  'Botanical Shirt Collection',
  'Three coordinating white linen shirts with embroidered botanical designs including giraffe, bird, and leaf motifs.',
  'shirts',
  110.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cklYZZJYbY2bwn2FfNVHdOTkdkU1n7.png',
  ARRAY['XS', 'S', 'M', 'L', 'XL']::text[],
  ARRAY['White']::text[],
  25,
  NOW()
),
(
  'Llama with Flowers Hoop Art',
  'Adorable embroidered llama with yellow, red, and green floral crown. Handcrafted wall decoration that brings joy.',
  'hoops',
  72.00,
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kj5afo4mP5viwv2S5IsgSZEVmhbYRZ.png',
  ARRAY['One Size']::text[],
  ARRAY['Natural']::text[],
  28,
  NOW()
)
ON CONFLICT DO NOTHING;
