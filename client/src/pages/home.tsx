import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Award, Gift } from "lucide-react";
import heroVideo from "@assets/generated_videos/slow_motion_pouring_of_golden_syrup_over_indian_sweets.mp4";
import { MOCK_SWEETS } from "@/lib/mockData";
import SweetCard from "@/components/SweetCard";
import { motion } from "framer-motion";

export default function Home() {
  const featuredSweets = MOCK_SWEETS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[90vh] flex items-center justify-center text-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-white mb-6 ring-1 ring-white/30 animate-pulse">
              🪔 Festive Season Special: Kaju Katli Packs!
            </span>
            <h1 className="font-heading text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
              Taste of <span className="text-secondary">Tradition</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-md">
              Authentic, handcrafted Indian sweets delivered to your doorstep. 
              From the syrup-soaked Gulab Jamun to the royal Kaju Katli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="rounded-full text-lg h-16 px-10 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary shadow-xl transition-all hover:scale-105 font-bold">
                  Order Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="rounded-full text-lg h-16 px-10 border-2 border-white/50 text-white hover:bg-white hover:text-primary transition-all font-bold backdrop-blur-sm">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
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
