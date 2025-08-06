import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe, Truck, Zap, MapPin, Clock, Users, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-courier.jpg';

const services = [
  {
    icon: Package,
    title: 'Domestic Courier',
    description: 'Fast and reliable delivery across the country with real-time tracking.',
    link: '/services/domestic'
  },
  {
    icon: Globe,
    title: 'International Courier',
    description: 'Global shipping solutions with customs clearance support.',
    link: '/services/international'
  },
  {
    icon: Truck,
    title: 'Cargo Services',
    description: 'Heavy shipments and bulk cargo transportation.',
    link: '/services/cargo'
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: '24-48 hours express delivery for urgent shipments.',
    link: '/services/express'
  },
  {
    icon: MapPin,
    title: 'Door-to-Door Pickup',
    description: 'Convenient pickup and delivery right at your doorstep.',
    link: '/services/pickup'
  }
];

const features = [
  {
    icon: Clock,
    title: '24+ Years Experience',
    description: 'Trusted expertise in courier and cargo services since 1996.'
  },
  {
    icon: Zap,
    title: '24-48 Hrs Express',
    description: 'Lightning-fast delivery for your urgent shipments.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated customer support and satisfaction guarantee.'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your packages are fully insured and handled with care.'
  }
];

const steps = [
  {
    number: '01',
    title: 'Book a Pickup',
    description: 'Schedule your pickup online or call us to arrange collection.'
  },
  {
    number: '02',
    title: 'We Pick & Ship',
    description: 'Our team collects your package and ships it safely.'
  },
  {
    number: '03',
    title: 'Track & Deliver',
    description: 'Monitor your shipment and receive it at the destination.'
  }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent service! My international shipment reached on time without any issues.',
    business: 'Import/Export Business'
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Very reliable for domestic courier. Great customer support and tracking system.',
    business: 'Online Retailer'
  },
  {
    name: 'Amit Patel',
    rating: 5,
    comment: 'Best rates for heavy cargo shipments. Professional handling and timely delivery.',
    business: 'Manufacturing Company'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/3 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-white/90 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2 text-accent" />
              24+ Years of Trusted Service Since 1996
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-slide-up font-poppins" style={{ animationDelay: '0.1s' }}>
            Delivering Fast.
            <br />
            <span className="text-gradient-accent">Anywhere. Anytime.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-6 animate-slide-up max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Professional courier and cargo services with unmatched reliability.
            <br />
            Your trusted partner for domestic and international shipping solutions.
          </p>

          <div className="flex items-center justify-center gap-8 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24-48</div>
              <div className="text-white/70 text-sm">Hours Delivery</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/70 text-sm">Cities Covered</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="btn-hero text-lg px-10 py-5 text-xl">
              <Link to="/book">
                Book Pickup <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glassmorphism text-white hover:bg-white/20 text-lg px-10 py-5 text-xl">
              <Link to="/track">Track Shipment</Link>
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-white/70 mb-4">Need immediate assistance?</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+919876543210" className="inline-flex items-center px-6 py-3 glassmorphism text-white rounded-xl hover:bg-white/20 transition-all">
                <span className="mr-2">📞</span> Call Now
              </a>
              <a href="https://wa.me/919876543210" className="inline-flex items-center px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-white rounded-xl hover:bg-green-500/30 transition-all">
                <span className="mr-2">💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive shipping solutions tailored to meet all your delivery needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="card-service group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">Why Choose SS Courier?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner with proven expertise and reliable service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center card-feature hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and reliable shipping process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border transform translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 font-poppins">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="card-elegant p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Need to Ship Something Today?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your packages delivered fast and secure with our professional courier services. 
            Book your pickup now and experience the SS Courier difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/book">
                Book Pickup Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}