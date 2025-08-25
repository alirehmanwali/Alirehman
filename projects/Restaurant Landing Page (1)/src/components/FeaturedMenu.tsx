import { Card, CardContent } from "./ui/card";

const menuItems = [
  {
    name: "Truffle Pasta Carbonara",
    description: "Fresh house-made pasta with black truffle, pancetta, and pecorino romano",
    price: "$32",
    image: "https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NTYxMDgyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Wagyu Beef Tenderloin",
    description: "Premium wagyu beef with roasted vegetables and red wine reduction",
    price: "$68",
    image: "https://images.unsplash.com/photo-1714692571386-0f26dec1bab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc1NjEwODI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mediterranean Sea Bass",
    description: "Pan-seared sea bass with lemon herb crust and salmoriglio sauce",
    price: "$42",
    image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc1NjA4NTgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturedMenu() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Signature Dishes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved creations, each crafted with passion and the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3>{item.name}</h3>
                  <span className="text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}