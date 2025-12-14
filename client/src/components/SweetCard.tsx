import { Sweet } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

interface SweetCardProps {
  sweet: Sweet;
}

export default function SweetCard({ sweet }: SweetCardProps) {
  const { addToCart } = useCart();
  const isOutOfStock = sweet.stock === 0;

  return (
    <Card className="group overflow-hidden border-none shadow-md transition-all hover:-translate-y-1 hover:shadow-xl bg-card">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <img
            src={sweet.image}
            alt={sweet.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <Badge variant="destructive" className="text-lg px-4 py-2 font-bold rotate-[-12deg] shadow-lg border-2 border-white">
                SOLD OUT
              </Badge>
            </div>
          )}
          <Badge className="absolute top-3 right-3 bg-white/90 text-primary font-bold hover:bg-white shadow-sm backdrop-blur-sm border-none">
            {sweet.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-xl font-bold text-foreground leading-tight">{sweet.name}</h3>
          <span className="font-bold text-primary text-lg">₹{sweet.price.toFixed(0)}</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{sweet.description}</p>
        <div className="text-xs font-medium text-muted-foreground">
          Stock: <span className={sweet.stock < 5 ? "text-destructive" : "text-green-600"}>{sweet.stock} kg available</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button 
          className="w-full rounded-full font-bold shadow-sm bg-primary text-primary-foreground hover:bg-primary/90" 
          disabled={isOutOfStock}
          onClick={() => addToCart(sweet)}
          variant={isOutOfStock ? "outline" : "default"}
        >
          {isOutOfStock ? "Out of Stock" : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
