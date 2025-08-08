import { Truck, Package, Scale, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Cargo() {
  const features = [
    {
      icon: Truck,
      title: "Heavy Freight Solutions",
      description: "Specialized handling for large and heavy shipments up to 1000kg"
    },
    {
      icon: Package,
      title: "Bulk Shipping",
      description: "Cost-effective solutions for high-volume cargo transportation"
    },
    {
      icon: Scale,
      title: "Dimensional Weight",
      description: "Fair pricing based on actual or volumetric weight, whichever is greater"
    },
    {
      icon: Clock,
      title: "Scheduled Deliveries",
      description: "Regular scheduled cargo services for businesses with recurring needs"
    }
  ];

  const serviceTypes = [
    {
      name: "Premium Cargo",
      time: "2-3 business days",
      price: "₹80/kg",
      maxWeight: "1000kg"
    },
    {
      name: "Standard Cargo",
      time: "3-5 business days",
      price: "₹60/kg",
      maxWeight: "1000kg"
    },
    {
      name: "Economy Cargo",
      time: "5-7 business days",
      price: "₹45/kg",
      maxWeight: "1000kg"
    },
    {
      name: "Scheduled Cargo",
      time: "Weekly/Monthly",
      price: "Custom rates",
      maxWeight: "1000kg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Cargo Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reliable and efficient transportation solutions for heavy and bulk shipments across India and internationally.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Cargo Shipping Options</h2>
            <p className="text-muted-foreground">Choose the cargo service that best fits your business needs</p>
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
                    <span className="font-medium">Price:</span> <span className="text-primary font-semibold">{service.price}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Max Weight:</span> {service.maxWeight}
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

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Our cargo services are tailored to meet the specific needs of various industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Manufacturing",
                description: "Transportation of raw materials, machinery parts, and finished products"
              },
              {
                name: "Retail",
                description: "Bulk shipping of merchandise, store fixtures, and seasonal inventory"
              },
              {
                name: "Construction",
                description: "Delivery of building materials, equipment, and project supplies"
              },
              {
                name: "Automotive",
                description: "Shipping of vehicle parts, components, and accessories"
              },
              {
                name: "E-commerce",
                description: "Bulk fulfillment and distribution for online retailers"
              },
              {
                name: "Agriculture",
                description: "Transportation of farming equipment, produce, and supplies"
              }
            ].map((industry, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Cargo Fleet</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain a diverse fleet of vehicles to handle various cargo requirements efficiently and safely.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Light Commercial Vehicles (1-3 tons)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Medium Duty Trucks (3-10 tons)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Heavy Duty Trucks (10-25 tons)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Refrigerated Vehicles for temperature-sensitive cargo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Specialized equipment for oversized and heavy items</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Value-Added Services</h3>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <h4 className="font-medium text-foreground">Loading & Unloading</h4>
                  <p className="text-sm text-muted-foreground">Professional handling of your cargo at both origin and destination</p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <h4 className="font-medium text-foreground">Warehousing</h4>
                  <p className="text-sm text-muted-foreground">Short and long-term storage solutions for your inventory</p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <h4 className="font-medium text-foreground">Packaging</h4>
                  <p className="text-sm text-muted-foreground">Custom packaging solutions for fragile and valuable items</p>
                </div>
                <div className="p-3 bg-secondary/40 rounded-lg">
                  <h4 className="font-medium text-foreground">Insurance</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage options for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Ship Your Cargo?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Contact our cargo specialists to discuss your specific requirements and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Book Cargo Shipment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/contact">Contact Cargo Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}