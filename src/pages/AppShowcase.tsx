import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const screenshots = [
  {
    id: 'logo',
    title: 'Logo Screen',
    content: (
      <div className="flex flex-col items-center justify-center p-8 min-h-[500px]">
        <Logo size="lg" />
        <h1 className="mt-6 text-4xl font-bold">Welcome to AutoEase</h1>
        <p className="mt-4 text-xl text-muted-foreground text-center max-w-md">
          The easiest way to rent or list your vehicles online
        </p>
      </div>
    ),
  },
  {
    id: 'login',
    title: 'Login Screen',
    content: (
      <div className="rounded-lg overflow-hidden border shadow-lg">
        <div className="bg-muted/30 p-6 flex flex-col items-center">
          <Logo size="lg" />
          <h1 className="mt-4 text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>
              
              <a className="text-sm text-primary">
                Forgot password?
              </a>
            </div>
            
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'signup',
    title: 'Sign Up Screen',
    content: (
      <div className="rounded-lg overflow-hidden border shadow-lg">
        <div className="bg-muted/30 p-6 flex flex-col items-center">
          <Logo size="lg" />
          <h1 className="mt-4 text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Sign up to start renting or listing vehicles
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-2 rounded-md border" 
                />
              </div>
            </div>
            
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'home',
    title: 'Home Screen',
    content: (
      <div className="rounded-lg overflow-hidden border shadow-lg">
        <div className="bg-gradient-to-r from-primary/10 to-accent/5 p-6">
          <h1 className="text-2xl font-bold mb-2">Find your perfect ride today</h1>
          <p className="text-muted-foreground">
            Rent vehicles from trusted hosts around you
          </p>
          
          <div className="bg-background rounded-lg shadow p-4 mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-foreground" />
                <input 
                  placeholder="" 
                  className="w-full pl-9 px-4 py-2 rounded-md border" 
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-foreground" />
                <input 
                  placeholder="" 
                  className="w-full pl-9 px-4 py-2 rounded-md border" 
                  type="date"
                />
              </div>
            </div>
            
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Search vehicles
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Featured Vehicles</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border">
              <div className="h-32 bg-muted"></div>
              <div className="p-3">
                <h3 className="font-semibold">Tesla Model S</h3>
                <p className="text-sm text-muted-foreground">$89/day</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <div className="h-32 bg-muted"></div>
              <div className="p-3">
                <h3 className="font-semibold">Porsche 911</h3>
                <p className="text-sm text-muted-foreground">$159/day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AppShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AutoEase App Showcase</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the key screens of our car rental application
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg bg-card relative overflow-hidden">
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm" 
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <CardContent className="p-0 overflow-hidden">
              <div className="flex flex-col items-center p-8">
                <div className="bg-muted/20 p-4 rounded-lg border mb-6">
                  <h2 className="text-xl font-semibold">
                    {screenshots[currentSlide].title}
                  </h2>
                </div>
                
                {screenshots[currentSlide].content}
              </div>
            </CardContent>
            
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background/80 backdrop-blur-sm" 
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
          
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index 
                    ? 'bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppShowcase;
