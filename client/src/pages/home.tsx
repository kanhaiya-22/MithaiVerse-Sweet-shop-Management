import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Award, Gift } from "lucide-react";
import heroBg from "@assets/generated_images/pastel_candy_pattern_background.png"; // Keeping pattern for now, maybe replace if needed
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
            <span className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-bold text-secondary-foreground mb-6 ring-1 ring-secondary/50">
              🪔 Festive Season Special: Kaju Katli Packs!
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-sm">
              Discover the Taste of <span className="text-primary">India</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Authentic, handcrafted Indian sweets delivered to your doorstep. 
              From the syrup-soaked Gulab Jamun to the royal Kaju Katli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 hover:shadow-2xl transition-all hover:-translate-y-1">
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 border-primary/20 hover:bg-primary/5 transition-all text-primary font-bold">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Background Elements - Reusing the pattern but maybe we can overlay a gold gradient */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 pointer-events-none">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
             <img src={heroBg} alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        {/* Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] -z-20 rounded-full"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Authentic Recipes", desc: "Traditional recipes passed down through generations." },
              { icon: Award, title: "Pure Ingredients", desc: "Made with pure ghee, premium nuts, and organic sugar." },
              { icon: Gift, title: "Festive Gifting", desc: "Elegant boxes for Diwali, Rakhi, and Weddings." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
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
              <h2 className="font-heading text-4xl font-bold mb-4 text-primary">Royal Favorites</h2>
              <p className="text-muted-foreground text-lg">Our most loved delicacies.</p>
            </div>
            <Link href="/dashboard">
              <Button variant="link" className="text-primary font-bold hidden sm:flex text-lg">View All Sweets</Button>
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
              <Button className="w-full rounded-full bg-primary text-primary-foreground">View All Sweets</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">MithaiVerse</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto">Manage sweetness, effortlessly. Combining tradition with technology.</p>
          
          <div className="flex justify-center gap-6 mb-8">
             <span className="opacity-60 hover:opacity-100 cursor-pointer">Instagram</span>
             <span className="opacity-60 hover:opacity-100 cursor-pointer">Facebook</span>
             <span className="opacity-60 hover:opacity-100 cursor-pointer">Twitter</span>
          </div>

          <div className="text-sm opacity-50 border-t border-primary-foreground/20 pt-8">
            &copy; 2025 MithaiVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
