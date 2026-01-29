import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1743793055911-52e19beba5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nfGVufDF8fHx8MTc1NjA3MjE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="mb-6">Bella Vista</h1>
        <p className="mb-8 max-w-2xl mx-auto opacity-90">
          Experience culinary excellence in an atmosphere of refined elegance. Our passionate chefs craft each dish with the finest ingredients, creating unforgettable dining moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Reserve a Table
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}