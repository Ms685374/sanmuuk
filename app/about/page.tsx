import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
            About SANMUK
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We create handcrafted embroidered clothing that celebrates the beauty of nature through meticulous artistry and premium craftsmanship.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SANMUK was born from a passion for handcrafted art and sustainable fashion. We believe that clothing should tell a story—one of nature, creativity, and craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each piece in our collection features delicate embroidered designs inspired by the natural world. From botanicals to wildlife, every motif is carefully selected and expertly stitched onto premium fabrics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with skilled artisans who share our commitment to quality and sustainability, ensuring every garment meets our high standards.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <p className="text-muted-foreground">Handcrafted with care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description:
                  'We are committed to the highest standards of embroidery and fabric quality. Every piece is carefully inspected before leaving our studio.',
                icon: '✨',
              },
              {
                title: 'Sustainability',
                description:
                  'We prioritize eco-friendly materials and ethical production practices, ensuring our business benefits both people and the planet.',
                icon: '🌍',
              },
              {
                title: 'Artistry',
                description:
                  'Our designs celebrate the beauty of nature. Each embroidery pattern is a work of art that brings joy and meaning to everyday wear.',
                icon: '🎨',
              },
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-serif font-bold text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Crafted by Artisans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Our team consists of passionate embroiderers, designers, and craftspeople who are dedicated to creating pieces that last and inspire. Each member brings unique skills and a shared commitment to excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Meticulous attention to detail',
              'Premium fabric sourcing',
              'Hand-stitched embroidery',
              'Sustainable practices',
              'Custom design consultation',
              'Expert quality control',
              'Ethical production',
              'Continuous innovation',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-4 text-sm font-semibold text-foreground"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Experience the SANMUK Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our full collection of handcrafted embroidered pieces and find something uniquely beautiful for you.
          </p>
          <Link href="/shop">
            <Button size="lg">Explore Collection</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
