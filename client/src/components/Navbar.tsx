import { Link, useLocation } from "wouter";
import { Candy, ShoppingBag, User, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import iconImage from "@assets/generated_images/cute_cupcake_icon.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Sweets" },
    { href: "/admin", label: "Admin" },
  ];

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a className={`text-lg font-medium transition-colors hover:text-primary ${isActive ? "text-primary font-bold" : "text-foreground/80"}`}>
          {label}
        </a>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src={iconImage} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="font-heading text-2xl font-bold text-primary">SweetShop</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
            <ShoppingBag className="mr-2 h-4 w-4" /> Cart (0)
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-primary">
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <Link href="/auth">
                  <Button className="w-full mb-2" variant="outline" onClick={() => setIsOpen(false)}>
                    Login / Register
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
