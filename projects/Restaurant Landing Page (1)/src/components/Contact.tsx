import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Visit Us</h2>
          <p className="text-muted-foreground">
            Experience exceptional dining in the heart of the city
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      123 Culinary Avenue<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="mb-2">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 5:30pm - 10:00pm</p>
                      <p>Friday - Saturday: 5:30pm - 11:00pm</p>
                      <p>Sunday: 5:00pm - 9:30pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="mb-2">Reservations</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="mb-2">Email</h4>
                    <p className="text-muted-foreground">reservations@bellavista.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="mb-4">Make a Reservation</h3>
            <p className="text-muted-foreground mb-6">
              Reserve your table for an unforgettable dining experience. We recommend booking in advance, especially for weekend evenings.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}