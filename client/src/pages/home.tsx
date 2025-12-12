import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Candy, Gift } from "lucide-react";
import heroBg from "@assets/generated_images/pastel_candy_pattern_background.png";
import { MOCK_SWEETS } from "@/lib/mockData";
import SweetCard from "@/components/SweetCard";
import { motion } from "framer-motion";

export default function Home() {
  const featuredSweets = MOCK_SWEETS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 lg:pt-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6 ring-1 ring-primary/20">
              New: Galaxy Donuts Available Now! 🍩
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-sm">
              Satisfy Your <span className="text-primary">Sweet</span> Cravings
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Hand-crafted treats made with love and the finest ingredients. 
              From artisanal chocolates to fluffy cupcakes, we have something to brighten your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Shop All Sweets <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 bg-white/50 hover:bg-white transition-all">
                  Join Rewards
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
             <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Premium Quality", desc: "Only the finest ingredients used in every treat." },
              { icon: Candy, title: "Fresh Daily", desc: "Baked and crafted fresh every single morning." },
              { icon: Gift, title: "Perfect Gifts", desc: "Beautifully packaged for your special occasions." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary-foreground mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sweets */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-4">Trending Treats</h2>
              <p className="text-muted-foreground text-lg">Our customers' absolute favorites this week.</p>
            </div>
            <Link href="/dashboard">
              <Button variant="link" className="text-primary font-bold hidden sm:flex">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSweets.map((sweet, idx) => (
              <motion.div
                key={sweet.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SweetCard sweet={sweet} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link href="/dashboard">
              <Button className="w-full rounded-full">View All Sweets</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">SweetShop</h2>
          <p className="opacity-70 mb-8 max-w-md mx-auto">Making the world a sweeter place, one bite at a time. Visit us or order online!</p>
          <div className="text-sm opacity-50">
            &copy; 2025 Sweet Shop Management System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
