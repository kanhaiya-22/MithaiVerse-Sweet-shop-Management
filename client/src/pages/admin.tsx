import Navbar from "@/components/Navbar";
import { MOCK_SWEETS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2, Package } from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen bg-muted/30 font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary">Inventory Management</h1>
            <p className="text-muted-foreground">Manage stock levels, add new products, and update prices.</p>
          </div>
          <Button className="rounded-full shadow-lg gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Plus className="h-4 w-4" /> Add New Sweet
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Varieties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{MOCK_SWEETS.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">
                {MOCK_SWEETS.filter(s => s.stock < 10 && s.stock > 0).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Out of Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {MOCK_SWEETS.filter(s => s.stock === 0).length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden border-none shadow-md">
          <CardHeader className="bg-white border-b">
            <div className="flex items-center justify-between">
              <CardTitle>Product List</CardTitle>
              <div className="w-64">
                <Input placeholder="Search inventory..." className="bg-muted/50" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price (per kg)</TableHead>
                  <TableHead>Stock (kg)</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_SWEETS.map((sweet) => (
                  <TableRow key={sweet.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <img src={sweet.image} alt="" className="h-10 w-10 rounded-md object-cover" />
                        <div>
                          <div className="font-bold text-primary">{sweet.name}</div>
                          <div className="text-xs text-muted-foreground">ID: {sweet.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-secondary/10 hover:bg-secondary/20 border-secondary/50 text-secondary-foreground">
                        {sweet.category}
                      </Badge>
                    </TableCell>
                    <TableCell>₹{sweet.price.toFixed(0)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {sweet.stock === 0 ? (
                          <Badge variant="destructive">Out of Stock</Badge>
                        ) : sweet.stock < 10 ? (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Low: {sweet.stock}</Badge>
                        ) : (
                          <span className="text-green-600 font-medium">{sweet.stock} kg</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Package className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-blue-500">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
