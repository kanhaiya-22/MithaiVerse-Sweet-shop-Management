import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "wouter";
import iconImage from "@assets/generated_images/cute_cupcake_icon.png";
import heroBg from "@assets/generated_images/pastel_candy_pattern_background.png";

export default function Auth() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden p-4">
       {/* Background */}
       <div className="absolute inset-0 z-0 opacity-20">
        <img src={heroBg} className="w-full h-full object-cover" alt="bg" />
      </div>

      <Card className="w-full max-w-md z-10 shadow-2xl border-none bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
            <img src={iconImage} alt="Logo" className="h-10 w-10 object-contain" />
          </div>
          <CardTitle className="text-2xl font-heading font-bold text-primary">Welcome Back!</CardTitle>
          <CardDescription>Sign in to manage your sweet cravings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="user@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full rounded-full font-bold mt-2">Sign In</Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="user@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" required />
                </div>
                <Button type="submit" className="w-full rounded-full font-bold mt-2">Create Account</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Return to Home</a>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
