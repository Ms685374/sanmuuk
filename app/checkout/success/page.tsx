'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-primary/5">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-serif font-bold mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. Your handcrafted items are being prepared with care.
          </p>

          {/* Order Details */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order ID</p>
              <p className="font-mono font-bold text-lg break-all">{orderId || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Next Steps</p>
              <p className="text-foreground">
                We&apos;ll send you an email confirmation shortly with tracking information and estimated delivery date.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-8 space-y-3">
            <h2 className="font-serif font-bold text-lg">What to Expect</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Order confirmation email sent to your inbox
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Your items are being handcrafted and packed with care
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                Shipping updates will be sent to your email
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                Return to Home
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
            <p className="mb-4">
              Have questions? We&apos;re here to help!
            </p>
            <p>
              Email: <span className="font-semibold text-foreground">hello@sanmuk.com</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
