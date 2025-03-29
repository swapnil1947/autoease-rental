
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, ChevronRight, Car, 
  Truck, Bike, MapPin, Calendar, Clock, Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedCars from '@/components/home/FeaturedCars';
import CategorySection from '@/components/home/CategorySection';
import HowItWorks from '@/components/home/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
          
          <div className="container relative z-10 max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Find your perfect <span className="text-primary">ride</span> today
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rent vehicles from trusted hosts around you. Easy booking, flexible pickups, and 24/7 support.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
              <Tabs defaultValue="rent" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="rent">Rent a Vehicle</TabsTrigger>
                  <TabsTrigger value="host">Host Your Vehicle</TabsTrigger>
                </TabsList>
                
                <TabsContent value="rent" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Location" 
                        className="pl-9" 
                      />
                    </div>
                    
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Pick-up date" 
                        className="pl-9" 
                        type="date"
                      />
                    </div>
                    
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Return date" 
                        className="pl-9" 
                        type="date"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                    
                    <Button className="gap-2">
                      <Search className="h-4 w-4" />
                      Search vehicles
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="host" className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    List your vehicle and start earning. It's simple to get started.
                  </p>
                  <Link to="/host">
                    <Button className="w-full md:w-auto">Start hosting</Button>
                  </Link>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Featured Cars */}
        <FeaturedCars />
        
        {/* Categories */}
        <CategorySection />
        
        {/* How it works */}
        <HowItWorks />
        
        {/* Trust & Safety */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trust & Safety</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We prioritize your security with robust verification systems and comprehensive insurance coverage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Verification</h3>
              <p className="text-muted-foreground">
                Multi-step verification process ensures all users and vehicles meet our high standards.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-muted-foreground">
                Every trip includes comprehensive insurance coverage for peace of mind.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer support team is available around the clock to assist with any issues.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container py-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to hit the road?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who use AutoEase for their travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/host">List your vehicle</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground" asChild>
                <Link to="/listings">Find a rental</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
