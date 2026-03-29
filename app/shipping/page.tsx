import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ShippingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Shipping & Returns
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We want you to be completely satisfied with your SANMUK purchase. Here&apos;s how our shipping and return process works.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Shipping Information */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold mb-12">Shipping Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Standard Shipping',
                time: '5-7 Business Days',
                price: 'FREE',
                description: 'Complimentary standard shipping on all orders within the continental US.',
              },
              {
                title: 'Express Shipping',
                time: '2-3 Business Days',
                price: '$15',
                description: 'Get your order faster with our express shipping option.',
              },
              {
                title: 'International Shipping',
                time: '10-15 Business Days',
                price: 'Calculated at checkout',
                description: 'We ship worldwide! International shipping rates vary by destination.',
              },
              {
                title: 'Next Day Delivery',
                time: '1 Business Day',
                price: '$25',
                description: 'Available for select locations. Premium priority delivery option.',
              },
            ].map((option, index) => (
              <Card key={index} className="p-6 border-2">
                <h3 className="font-serif font-bold text-xl mb-2">{option.title}</h3>
                <p className="text-3xl font-serif font-bold text-primary mb-2">
                  {option.price}
                </p>
                <p className="text-sm font-semibold text-muted-foreground mb-3">
                  {option.time}
                </p>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-muted/30">
            <h3 className="font-serif font-bold text-xl mb-4">Shipping Timeline</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="font-semibold text-primary min-w-fit">Order Placed</div>
                <p className="text-muted-foreground">
                  Your order is received and confirmed via email
                </p>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold text-primary min-w-fit">1-2 Days</div>
                <p className="text-muted-foreground">
                  We carefully prepare and package your items with care
                </p>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold text-primary min-w-fit">Shipped</div>
                <p className="text-muted-foreground">
                  Your package is handed off to our carrier with tracking number
                </p>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold text-primary min-w-fit">In Transit</div>
                <p className="text-muted-foreground">
                  Track your package in real-time with the provided tracking number
                </p>
              </div>
              <div className="flex gap-4">
                <div className="font-semibold text-primary min-w-fit">Delivered</div>
                <p className="text-muted-foreground">
                  Your beautiful SANMUK items arrive at your doorstep
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Returns Policy */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold mb-12">Returns & Exchanges</h2>

          <div className="space-y-8">
            <Card className="p-8 border-2">
              <h3 className="font-serif font-bold text-2xl mb-4">30-Day Returns</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We want you to absolutely love your SANMUK pieces. If you&apos;re not completely satisfied,
                we&apos;ll accept returns within 30 days of purchase for a full refund.
              </p>
              <h4 className="font-semibold mb-3">Return Conditions:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Items must be in original, unused condition</li>
                <li>✓ Tags must be attached and original packaging included</li>
                <li>✓ No signs of wear, washing, or alteration</li>
                <li>✓ Items must be returned within 30 days of purchase</li>
              </ul>
            </Card>

            <Card className="p-8 border-2">
              <h3 className="font-serif font-bold text-2xl mb-4">How to Return</h3>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Contact us at hello@sanmuk.com with your order number</li>
                <li>We&apos;ll provide you with a prepaid return shipping label</li>
                <li>Pack your item securely and ship it back to us</li>
                <li>
                  Once received and inspected, we&apos;ll process your refund within 5-7 business days
                </li>
              </ol>
            </Card>

            <Card className="p-8 border-2">
              <h3 className="font-serif font-bold text-2xl mb-4">Exchanges</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Want to exchange your item for a different size or color? We offer free exchanges
                within 30 days of purchase. Simply contact us and we&apos;ll arrange the swap.
              </p>
              <p className="text-muted-foreground">
                Note: Your new item will ship once we receive your return.
              </p>
            </Card>
          </div>
        </div>

        {/* Damaged Items */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold mb-8">Damaged or Missing Items</h2>
          <Card className="p-8 bg-red-50 border border-red-200">
            <p className="text-red-900 mb-4 leading-relaxed">
              If your item arrives damaged or if any part of your order is missing, please contact us immediately with photos of the damage.
            </p>
            <p className="text-red-900 mb-4 leading-relaxed">
              Email: <span className="font-semibold">hello@sanmuk.com</span>
            </p>
            <p className="text-red-900">
              We&apos;ll work quickly to resolve the issue and either send a replacement or provide a full refund.
            </p>
          </Card>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold mb-12">Shipping FAQs</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do you ship internationally?',
                a: 'Yes! We ship to most countries worldwide. International shipping rates are calculated at checkout based on weight and destination.',
              },
              {
                q: 'How can I track my order?',
                a: 'Once your order ships, you&apos;ll receive a tracking number via email that you can use to track your package in real-time.',
              },
              {
                q: 'Can I change my delivery address after ordering?',
                a: 'If your order hasn&apos;t shipped yet, contact us immediately at hello@sanmuk.com and we may be able to update your address.',
              },
              {
                q: 'What if my package is lost?',
                a: 'All orders are insured during shipping. If your package is lost, we&apos;ll either resend your order or provide a full refund.',
              },
              {
                q: 'Do you offer gift wrapping?',
                a: 'Currently, we don&apos;t offer gift wrapping, but our items come beautifully packaged and are perfect for gifting as-is.',
              },
              {
                q: 'What happens if an item goes on sale after I purchase it?',
                a: 'Please contact us within 7 days of your purchase and we&apos;ll be happy to adjust your price if there&apos;s an eligible sale.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="p-12 bg-primary/5 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help. Don&apos;t hesitate to reach out with any questions about shipping or returns.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
