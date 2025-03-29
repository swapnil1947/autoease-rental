
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, Star, Heart, Share, Shield, 
  Car, Fuel, Users, Gauge, Settings, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Dummy car data
const carData = {
  id: '1',
  name: 'Tesla Model S',
  image: 'https://source.unsplash.com/qIu77BsFdds',
  gallery: [
    'https://source.unsplash.com/qIu77BsFdds',
    'https://source.unsplash.com/LrxSl4ZxoRs',
    'https://source.unsplash.com/5cFwQ-WMcJU',
    'https://source.unsplash.com/EBNz8hKbEgY',
  ],
  price: 89,
  discountPrice: 79,
  location: 'San Francisco, CA',
  rating: 4.9,
  reviews: 124,
  carType: 'Electric',
  year: 2022,
  features: ['Autopilot', 'WiFi', 'Ludicrous Mode', 'Premium Sound', 'All-Wheel Drive'],
  description: 'Experience the future of driving with this Tesla Model S. This all-electric vehicle offers exceptional performance, range, and cutting-edge technology. Perfect for business trips or weekend getaways.',
  host: {
    name: 'Michael Chen',
    image: 'https://source.unsplash.com/7YVZYZeITc8',
    rating: 4.8,
    reviews: 56,
    responseTime: '< 1 hour',
    superHost: true
  },
  specifications: {
    seats: 5,
    doors: 4,
    range: '375 miles',
    acceleration: '0-60 mph in 3.1s',
    topSpeed: '155 mph',
    transmission: 'Automatic'
  }
};

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const car = carData; // In a real app, fetch car by ID
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-8 pb-16">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span className="text-muted-foreground mx-2">/</span>
            <Link to="/listings" className="text-muted-foreground hover:text-foreground">Cars</Link>
            <span className="text-muted-foreground mx-2">/</span>
            <span>{car.name}</span>
          </div>
          
          {/* Car heading */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <div className="flex items-center gap-2 text-sm">
                <Badge>{car.carType}</Badge>
                <span className="text-muted-foreground">{car.year}</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{car.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex mt-4 md:mt-0 gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Heart className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="md:col-span-1">
              <img 
                src={car.gallery[0]} 
                alt={car.name}
                className="w-full h-full aspect-square md:aspect-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {car.gallery.slice(1, 5).map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${car.name} - ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          
          {/* Main content and booking form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2">
              {/* Host information */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center gap-4">
                  <img 
                    src={car.host.image}
                    alt={car.host.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">Hosted by {car.host.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span>{car.host.rating} · {car.host.reviews} reviews</span>
                      {car.host.superHost && (
                        <Badge variant="outline" className="ml-2 text-xs">Super Host</Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="outline">Contact</Button>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About this car</h2>
                <p className="text-muted-foreground mb-4">{car.description}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Car specifications</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Seats</p>
                      <p className="font-medium">{car.specifications.seats}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Car className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Doors</p>
                      <p className="font-medium">{car.specifications.doors}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Gauge className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Range</p>
                      <p className="font-medium">{car.specifications.range}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Gauge className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Acceleration</p>
                      <p className="font-medium">{car.specifications.acceleration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Gauge className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Top Speed</p>
                      <p className="font-medium">{car.specifications.topSpeed}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="feature-icon">
                      <Settings className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Transmission</p>
                      <p className="font-medium">{car.specifications.transmission}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reviews */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Reviews</h2>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">{car.rating}</span>
                    <span className="text-muted-foreground ml-1">({car.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="pb-6 border-b">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src="https://source.unsplash.com/iFgRcqHznqg"
                        alt="Reviewer"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">Sarah Johnson</h4>
                        <p className="text-xs text-muted-foreground">August 2023</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      This car was amazing! Super clean, drives like a dream, and the host was very accommodating with pickup and drop-off times.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src="https://source.unsplash.com/mEZ3PoFGs_k"
                        alt="Reviewer"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">David Kim</h4>
                        <p className="text-xs text-muted-foreground">July 2023</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      What a fantastic rental experience! The car was exactly as described, and Michael was very responsive and helpful throughout.
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  View all {car.reviews} reviews
                </Button>
              </div>
            </div>
            
            {/* Right column - Booking form */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-xl border p-6 sticky top-24">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold">${car.discountPrice || car.price}</span>
                    <span className="text-muted-foreground">/day</span>
                    {car.discountPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${car.price}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span>{car.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pick-up date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="date"
                          className="w-full pl-9 pr-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Return date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="date"
                          className="w-full pl-9 pr-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pick-up time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="time"
                          className="w-full pl-9 pr-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Return time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          type="time"
                          className="w-full pl-9 pr-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 border-t border-b py-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">$79 x 3 days</span>
                    <span>$237</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span>$24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Insurance</span>
                    <span>$45</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-semibold mb-6">
                  <span>Total</span>
                  <span>$306</span>
                </div>
                
                <Button className="w-full mb-4" size="lg">
                  Rent Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  You won't be charged yet
                </p>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure booking with full insurance coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetails;
