import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Bella Vista</h3>
            <p className="opacity-90 mb-4">
              Fine dining experience in the heart of the city. Authentic Italian cuisine with a modern twist.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2 opacity-90">
              <p className="hover:opacity-100 cursor-pointer transition-opacity">About Us</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Menu</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Reservations</p>
              <p className="hover:opacity-100 cursor-pointer transition-opacity">Private Events</p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2 opacity-90">
              <p>123 Culinary Avenue</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>reservations@bellavista.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-80">
          <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}