'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  thumbnail_url?: string
  sizes: string[]
  colors: string[]
  stock: number
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const category = searchParams.get('category')

  useEffect(() => {
    if (category) {
      setSelectedCategory(category)
    }
  }, [category])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const url = selectedCategory && selectedCategory !== 'all'
          ? `/api/products?category=${selectedCategory}`
          : '/api/products'

        const response = await fetch(url)
        const data = await response.json()
        const productList = Array.isArray(data) ? data : []
        setProducts(productList)
        setFilteredProducts(productList)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  const categories = ['all', 'shirts', 'sweatshirts', 'hoops', 'other']

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Shop Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our full range of handcrafted embroidered pieces
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors capitalize ${
                        selectedCategory === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {cat === 'all' ? 'All Products' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <h3 className="font-serif font-bold mb-4">Price Range</h3>
                <p className="text-sm text-muted-foreground">
                  Filter functionality coming soon
                </p>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="h-80 animate-pulse bg-muted" />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found in this category
                </p>
                <Button onClick={() => setSelectedCategory('all')} variant="outline">
                  View All Products
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/shop/${product.id}`}>
                    <Card className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-64 bg-muted overflow-hidden">
                        {product.image_url ? (
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 text-4xl">
                            🎨
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-serif font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          <span className="text-2xl font-serif font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                            product.stock > 0
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
