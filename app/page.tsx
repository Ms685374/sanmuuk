import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-balance">
                Handcrafted Embroidery
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover premium embroidered clothing featuring delicate botanical motifs and nature-inspired designs. Each piece is carefully crafted with meticulous attention to detail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="gap-2">
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
            <Image
              src="/hero-banner.jpg"
              alt="SANMUK - Handcrafted embroidered luxury clothing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of handcrafted pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Shirts',
                description: 'Premium linen and cotton shirts with delicate embroidery',
                icon: '👕',
                href: '/shop?category=shirts',
              },
              {
                category: 'Sweatshirts',
                description: 'Cozy sweatshirts with subtle botanical designs',
                icon: '🧥',
                href: '/shop?category=sweatshirts',
              },
              {
                category: 'Hoops',
                description: 'Beautiful embroidered wall art and decorative pieces',
                icon: '🎨',
                href: '/shop?category=hoops',
              },
            ].map((item) => (
              <Link key={item.category} href={item.href}>
                <div className="group cursor-pointer">
                  <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.category}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Visual */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/featured-collection.jpg"
              alt="SANMUK Featured Collection - Embroidered Clothing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end">
              <div className="p-8 text-white w-full">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                  Artisanal Craftsmanship
                </h3>
                <p className="text-lg max-w-2xl">
                  Each embroidered piece tells a story of careful craftsmanship and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SANMUK */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose SANMUK?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Handcrafted Quality',
                description: 'Each piece is meticulously embroidered by skilled artisans',
              },
              {
                title: 'Premium Materials',
                description: 'We use the finest organic and sustainable fabrics',
              },
              {
                title: 'Unique Designs',
                description: 'Nature-inspired botanical motifs and custom patterns',
              },
              {
                title: 'Sustainable',
                description: 'Ethically produced with care for the environment',
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-serif font-bold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Discover the Collection
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start exploring our handcrafted embroidered pieces today and find something uniquely beautiful.
          </p>
          <Link href="/shop">
            <Button size="lg" className="gap-2">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
