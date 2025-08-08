import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string } >({});

  const validate = () => {
    const errs: { name?: string; phone?: string; message?: string } = {};
    if (!form.name.trim()) errs.name = 'Full Name is required.';
    if (!form.phone.trim() || !/^\+?\d{10,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          <Phone className="w-8 h-8 text-primary" /> We're Here to Help You Ship Smarter
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Questions about a shipment? Need a price quote? Want to book a pickup? Our team is ready to help you 7 days a week.
        </p>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg max-w-2xl mx-auto border-l-4 border-primary">
          <p className="italic text-lg">"Delivering excellence is not just our promise, it's our everyday commitment to each package we handle."</p>
          <p className="text-right mt-2 font-medium text-primary">- SS Courier & Cargo Services</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info Block */}
          <div>
            <Card className="shadow-xl border-border mb-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" /> Head Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>1-8-505/B/21, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919848231347" className="text-primary underline font-medium">+91 9848231347</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:sscouriers347@yahoo.co.in" className="text-primary underline">sscouriers347@yahoo.co.in</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mon–Sat: 9 AM – 8 PM | Sunday: Closed</span>
                </div>
                <div className="mt-4">
                  <a href="https://wa.me/919848231347" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.462.13-.61.136-.137.301-.354.451-.531.15-.178.2-.301.3-.502.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.007-.371-.01-.571-.01-.2 0-.523.074-.797.372-.273.297-1.045 1.019-1.045 2.487 0 1.468 1.069 2.886 1.22 3.086.151.2 2.125 3.25 5.14 4.557 3.023 1.31 3.023.873 3.57.82.546-.053 1.767-.72 2.016-1.413.255-.694.255-1.29.18-1.414-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M13.229 18.784l-.173.087a9.548 9.548 0 0 1-4.848 1.33 9.543 9.543 0 0 1-8.173-4.683.75.75 0 0 1 .12-.975l1.33-1.221a.752.752 0 0 1 .922-.078l2.055 1.315a.75.75 0 0 1 .255.954l-.614 1.23a.245.245 0 0 0 .02.253 6.19 6.19 0 0 0 3.327 2.368 6.19 6.19 0 0 0 4.11-.281.245.245 0 0 0 .134-.215v-1.359a.75.75 0 0 1 .75-.75h2.307c.414 0 .75.336.75.75v1.359a.245.245 0 0 0 .134.215 6.19 6.19 0 0 0 4.11.281 6.19 6.19 0 0 0 3.327-2.368.245.245 0 0 0 .02-.253l-.614-1.23a.75.75 0 0 1 .255-.954l2.055-1.315a.752.752 0 0 1 .922.078l1.33 1.221a.75.75 0 0 1 .12.975 9.543 9.543 0 0 1-8.173 4.683 9.548 9.548 0 0 1-4.848-1.33l-.173-.087z"/>
                    </svg>
                    Chat Now
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow mb-4">
              <iframe
                title="SS Courier & Cargo Services Location"
                src="https://www.google.com/maps?q=1-8-505/B/21,+Prakash+Nagar,+Begumpet,+Hyderabad,+Telangana+500016&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="text-center text-sm text-muted-foreground py-2">Visit us at our Hyderabad office</div>
            </div>
          </div>

          {/* Contact Form Block */}
          <div>
            <Card className="shadow-xl border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" /> Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-4 text-center text-green-600 font-semibold">
                    Thank you! We'll get back to you within 2 hours during business hours.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={form.name} onChange={handleChange} required className={errors.name ? 'border-red-500' : ''} />
                      {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" value={form.phone} onChange={handleChange} required className={errors.phone ? 'border-red-500' : ''} />
                      {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input id="email" name="email" value={form.email} onChange={handleChange} type="email" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select name="subject" value={form.subject} onValueChange={val => setForm({ ...form, subject: val })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Shipment Inquiry">Shipment Inquiry</SelectItem>
                          <SelectItem value="Pickup Request">Pickup Request</SelectItem>
                          <SelectItem value="Price Quote">Price Quote</SelectItem>
                          <SelectItem value="Feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} required className={errors.message ? 'border-red-500' : ''} />
                      {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgent Help CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary/10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 p-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
            <p className="text-muted-foreground">Call our helpline or book a pickup now and we'll respond instantly.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <a href="tel:+919848231347" className="px-4 py-2 bg-primary text-white rounded shadow hover:bg-primary/80">Call Now</a>
            <a href="/book-now" className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">Book Pickup</a>
            <a href="/track" className="px-4 py-2 bg-secondary text-primary rounded shadow hover:bg-secondary/80">Track Shipment</a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-background border-t py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/src/assets/ss-logo.png" alt="SS Courier & Cargo Services" className="h-8" />
                <span className="font-bold text-lg">SS Courier & Cargo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted partner for reliable courier and cargo services across India. Fast, secure, and affordable shipping solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  <span className="font-bold">Facebook</span>
                </a>
                <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span className="font-bold">Instagram</span>
                </a>
                <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <span className="font-bold">Twitter</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="/" className="text-sm hover:underline">Home</a>
                <a href="/services" className="text-sm hover:underline">Services</a>
                <a href="/track" className="text-sm hover:underline">Track</a>
                <a href="/book-now" className="text-sm hover:underline">Book</a>
                <a href="/contact" className="text-sm hover:underline">Contact</a>
                <a href="/about" className="text-sm hover:underline">About Us</a>
                <a href="/pricing" className="text-sm hover:underline">Pricing</a>
                <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>1-8-505/B/21, Prakash Nagar, Begumpet, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+919848231347" className="hover:underline">+91 9848231347</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:sscouriers347@yahoo.co.in" className="hover:underline">sscouriers347@yahoo.co.in</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Mon–Sat: 9 AM – 8 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SS Courier & Cargo Services. All rights reserved.
            </div>
            <div className="flex gap-4 text-xs mt-2 md:mt-0">
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
