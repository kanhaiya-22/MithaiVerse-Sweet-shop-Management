import Navbar from "@/components/Navbar";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl font-bold mb-8 text-primary">Your Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-primary/20">
            <div className="mb-6 inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 text-primary">
              <ShoppingBag className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any sweets yet.</p>
            <Link href="/dashboard">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="h-20 w-20 rounded-md overflow-hidden bg-muted shrink-0">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-heading font-bold text-lg text-primary">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-lg">₹{(item.price * item.quantity).toFixed(0)}</div>
                            <div className="flex items-center gap-2 bg-secondary/20 rounded-full p-1">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-7 w-7 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-7 w-7 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <div className="flex justify-end pt-4">
                <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive/90 hover:bg-destructive/10">
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-none shadow-lg bg-primary text-primary-foreground overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6 opacity-90">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{totalPrice.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (5%)</span>
                      <span>₹{(totalPrice * 0.05).toFixed(0)}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-primary-foreground/20 pt-4 mb-8">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>₹{(totalPrice * 1.05).toFixed(0)}</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-full shadow-xl">
                    Checkout Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
