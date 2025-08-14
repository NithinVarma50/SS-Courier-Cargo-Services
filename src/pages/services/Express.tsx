import { Zap, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Express() {
  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Delivery",
      description: "Same-day and next-day delivery options for urgent shipments"
    },
    {
      icon: Clock,
      title: "Time-Definite",
      description: "Guaranteed delivery within specific time windows"
    },
    {
      icon: Shield,
      title: "Priority Handling",
      description: "Your express packages receive special attention and care"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Minute-by-minute updates on your express shipment's location"
    }
  ];

  const serviceTypes = [
    {
      name: "Same Day Express",
      time: "Within 12 hours",
      price: "₹250 base + ₹25/km",
      coverage: "Within city limits"
    },
    {
      name: "Next Day Express",
      time: "By next day",
      price: "₹200 base + ₹15/km",
      coverage: "Major cities"
    },
    {
      name: "Priority Express",
      time: "1-2 days",
      price: "₹150 base + ₹10/km",
      coverage: "Pan-India"
    },
    {
      name: "Time-Definite Express",
      time: "Choose delivery window",
      price: "₹300 base + ₹20/km",
      coverage: "Major cities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Express Delivery Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When time is of the essence, our express delivery services ensure your packages arrive at their destination quickly and securely.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Express Shipping Options</h2>
            <p className="text-muted-foreground">Choose the express service that meets your urgent delivery needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Delivery:</span> {service.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Contact us for pricing</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Coverage:</span> {service.coverage}
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full btn-secondary">
                  <Link to="/book">Select This Option</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Perfect For</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Our express delivery services are ideal for these time-sensitive situations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Urgent Documents",
                description: "Legal papers, contracts, and important business documents that need immediate delivery"
              },
              {
                title: "Medical Supplies",
                description: "Critical medications, medical equipment, and healthcare supplies"
              },
              {
                title: "E-commerce Returns",
                description: "Quick processing of product returns and exchanges for online retailers"
              },
              {
                title: "Last-Minute Gifts",
                description: "Birthday presents, anniversary gifts, and special occasion items"
              },
              {
                title: "Time-Critical Parts",
                description: "Replacement components and parts needed to prevent business downtime"
              },
              {
                title: "Perishable Items",
                description: "Fresh food, flowers, and other items with limited shelf life"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Express Process</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">How we ensure your express deliveries arrive on time, every time</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Priority Pickup",
                description: "Your package is collected within 60 minutes of booking"
              },
              {
                step: "2",
                title: "Express Processing",
                description: "Dedicated fast-track handling at our sorting centers"
              },
              {
                step: "3",
                title: "Expedited Transport",
                description: "Direct routing with minimal stops for maximum speed"
              },
              {
                step: "4",
                title: "Guaranteed Delivery",
                description: "On-time delivery with signature confirmation"
              }
            ].map((process, index) => (
              <div key={index} className="relative bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need It There Fast?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Book our express delivery service now and get your package delivered with priority handling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Book Express Delivery</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/track">Track Express Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}