import Navbar from "@/components/Navbar";
import { MOCK_SWEETS, CATEGORIES } from "@/lib/mockData";
import SweetCard from "@/components/SweetCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSweets = MOCK_SWEETS.filter(sweet => {
    const matchesSearch = sweet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || sweet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">Our Menu</h1>
            <p className="text-muted-foreground">Discover our delightful selection of handcrafted sweets.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-3">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search cupcakes, donuts..." 
                className="pl-10 rounded-full bg-white border-border/50 shadow-sm focus-visible:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full shrink-0">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-6 transition-all ${
                selectedCategory === cat 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "bg-white hover:bg-primary/5 border-transparent shadow-sm"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredSweets.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSweets.map((sweet) => (
              <motion.div
                layout
                key={sweet.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SweetCard sweet={sweet} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍪</div>
            <h3 className="text-2xl font-bold mb-2">No sweets found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            <Button 
              variant="link" 
              onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
              className="mt-4 text-primary font-bold"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
