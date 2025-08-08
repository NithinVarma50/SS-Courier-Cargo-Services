import { Globe, Shield, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function International() {
  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Delivery to over 220 countries and territories worldwide"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your international packages are handled with utmost care and security"
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description: "Expert assistance with customs documentation and clearance"
    },
    {
      icon: Zap,
      title: "Express Options",
      description: "Priority shipping options for time-sensitive deliveries"
    }
  ];

  const serviceTypes = [
    {
      name: "International Express",
      time: "3-5 business days",
      price: "₹1500/kg",
      coverage: "Worldwide"
    },
    {
      name: "Priority International",
      time: "5-7 business days",
      price: "₹1200/kg",
      coverage: "Worldwide"
    },
    {
      name: "Standard International",
      time: "7-10 business days",
      price: "₹900/kg",
      coverage: "Worldwide"
    },
    {
      name: "Economy International",
      time: "10-15 business days",
      price: "₹700/kg",
      coverage: "Select countries"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            International Courier Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliable global shipping solutions with customs clearance support and worldwide delivery to over 220 countries.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">International Shipping Options</h2>
            <p className="text-muted-foreground">Choose the international delivery service that best fits your needs</p>
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

      {/* Documentation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Documentation Support</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We provide comprehensive assistance with all international shipping documentation to ensure smooth customs clearance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Commercial Invoice preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Customs Declaration Forms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Certificate of Origin assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Export/Import documentation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Popular International Destinations</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  'United States', 'United Kingdom', 'Canada', 'Australia',
                  'Germany', 'France', 'Singapore', 'UAE',
                  'Saudi Arabia', 'Malaysia', 'Japan', 'South Korea',
                  'China', 'South Africa', 'New Zealand', 'Thailand'
                ].map((country, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Ship Internationally?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get your packages delivered worldwide with our reliable international courier service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Book International Shipment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/track">Track Your Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}