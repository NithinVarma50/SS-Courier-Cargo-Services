import { Home, Calendar, CreditCard, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function DoorToDoor() {
  const features = [
    {
      icon: Home,
      title: "Convenient Pickup",
      description: "We collect your packages directly from your doorstep"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose pickup times that work with your schedule"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay online, by card on pickup, or with cash"
    },
    {
      icon: PhoneCall,
      title: "Pickup Notifications",
      description: "Receive alerts before our courier arrives"
    }
  ];

  const serviceTypes = [
    {
      name: "Standard Pickup",
      time: "Next business day",
      price: "₹50",
      window: "4-hour window"
    },
    {
      name: "Same-Day Pickup",
      time: "Within 6 hours",
      price: "₹100",
      window: "2-hour window"
    },
    {
      name: "Express Pickup",
      time: "Within 2 hours",
      price: "₹150",
      window: "1-hour window"
    },
    {
      name: "Scheduled Pickup",
      time: "Weekly/Monthly",
      price: "Custom rates",
      window: "Fixed schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
            Door-to-Door Pickup Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Skip the trip to our branch. We'll come to you and collect your packages for shipping, saving you time and effort.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Pickup Options</h2>
            <p className="text-muted-foreground">Choose the pickup service that best fits your schedule and urgency</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Pickup:</span> {service.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Fee:</span> <span className="text-primary font-semibold">{service.price}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Time Window:</span> {service.window}
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

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Our door-to-door pickup process is simple and convenient</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Book Online",
                description: "Schedule your pickup through our website or mobile app"
              },
              {
                step: "2",
                title: "Prepare Package",
                description: "Pack your items securely and have them ready for collection"
              },
              {
                step: "3",
                title: "Courier Arrival",
                description: "Our courier arrives during your selected time window"
              },
              {
                step: "4",
                title: "Track Shipment",
                description: "Receive a tracking number to monitor your package's journey"
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

      {/* Service Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Service Areas</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Our door-to-door pickup service is available in the following areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                region: "Metropolitan Cities",
                description: "Same-day and express pickup available",
                areas: ["Delhi NCR", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Pune", "Ahmedabad"]
              },
              {
                region: "Tier 2 Cities",
                description: "Next-day pickup available",
                areas: ["Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam"]
              },
              {
                region: "Other Urban Areas",
                description: "Standard pickup available",
                areas: ["All district headquarters", "Major towns", "Industrial zones", "Commercial hubs"]
              }
            ].map((region, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">{region.region}</h3>
                <p className="text-sm text-muted-foreground mb-4">{region.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {region.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-sm text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Process Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pickup Process Details</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">What to expect when you schedule a door-to-door pickup</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Before Pickup</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">1</span>
                  <div>
                    <p className="text-foreground font-medium">Confirmation SMS & Email</p>
                    <p className="text-sm text-muted-foreground">Receive booking confirmation with pickup details</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">2</span>
                  <div>
                    <p className="text-foreground font-medium">Courier Assignment</p>
                    <p className="text-sm text-muted-foreground">A courier is assigned to your pickup request</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">3</span>
                  <div>
                    <p className="text-foreground font-medium">Reminder Notification</p>
                    <p className="text-sm text-muted-foreground">Receive a reminder 30 minutes before scheduled pickup</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">During Pickup</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">1</span>
                  <div>
                    <p className="text-foreground font-medium">Courier Arrival</p>
                    <p className="text-sm text-muted-foreground">Our uniformed courier arrives with ID card for verification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">2</span>
                  <div>
                    <p className="text-foreground font-medium">Package Inspection</p>
                    <p className="text-sm text-muted-foreground">Quick check of package condition and dimensions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mt-0.5">3</span>
                  <div>
                    <p className="text-foreground font-medium">Digital Receipt</p>
                    <p className="text-sm text-muted-foreground">Receive instant digital receipt with tracking information</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Pickup Solutions</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We offer specialized door-to-door pickup services for businesses with regular shipping needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Scheduled daily, weekly, or monthly pickups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Volume-based discounted rates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Customized pickup windows to fit your business hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-foreground">Bulk shipment handling capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button asChild variant="default" className="btn-primary">
                  <Link to="/contact">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Is there a weight limit for door-to-door pickup?",
                    answer: "Yes, our standard door-to-door pickup service handles packages up to 30kg. For heavier items, please contact our customer service for special arrangements."
                  },
                  {
                    question: "What if I'm not available during the pickup window?",
                    answer: "You can designate an alternative person to hand over your package, or reschedule your pickup for another time at no extra charge if done 2 hours before the scheduled pickup."
                  },
                  {
                    question: "Do you provide packaging materials during pickup?",
                    answer: "Yes, our couriers carry standard packaging materials. Premium packaging options are available for an additional fee."
                  },
                  {
                    question: "How do I pay for the service?",
                    answer: "You can pay online when booking, by card when the courier arrives, or with cash on pickup."
                  }
                ].map((faq, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-foreground">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
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
            Ready for Convenient Shipping?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Schedule a door-to-door pickup today and let us handle your shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-accent">
              <Link to="/book">Schedule Pickup</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}