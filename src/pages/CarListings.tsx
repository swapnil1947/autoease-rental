
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Sliders, MapPin, Calendar, 
  Car, ChevronDown, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CarCard from '@/components/cars/CarCard';

// Sample car data
const cars = [
  {
    id: '1',
    name: 'Tesla Model S',
    image: 'https://source.unsplash.com/qIu77BsFdds',
    price: 89,
    location: 'San Francisco, CA',
    rating: 4.9,
    reviews: 124,
    carType: 'Electric',
    features: ['Autopilot', 'WiFi', 'Ludicrous Mode']
  },
  {
    id: '2',
    name: 'Porsche 911',
    image: 'https://source.unsplash.com/ZwKCWVFslHE',
    price: 159,
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviews: 98,
    carType: 'Sports',
    features: ['Convertible', 'Leather Seats', 'Sport Mode']
  },
  {
    id: '3',
    name: 'Range Rover Sport',
    image: 'https://source.unsplash.com/dR_q93lfaTw',
    price: 120,
    location: 'Miami, FL',
    rating: 4.7,
    reviews: 87,
    carType: 'SUV',
    features: ['4WD', 'Panoramic Roof', 'Off-road Package']
  },
  {
    id: '4',
    name: 'BMW M4 Competition',
    image: 'https://source.unsplash.com/UsYOap7yIMg',
    price: 145,
    location: 'New York, NY',
    rating: 4.8,
    reviews: 105,
    carType: 'Sports',
    features: ['M Performance', 'Carbon Package', 'Premium Sound']
  },
  {
    id: '5',
    name: 'Audi RS7',
    image: 'https://source.unsplash.com/UwBrS-qRMHo',
    price: 135,
    location: 'Chicago, IL',
    rating: 4.6,
    reviews: 92,
    carType: 'Sports',
    features: ['Quattro AWD', 'Bang & Olufsen Sound', 'Virtual Cockpit']
  },
  {
    id: '6',
    name: 'Mercedes-Benz G-Class',
    image: 'https://source.unsplash.com/2Z0RQwWwmPM',
    price: 180,
    location: 'Dallas, TX',
    rating: 4.9,
    reviews: 76,
    carType: 'SUV',
    features: ['Off-road Package', 'Premium Audio', 'Heated Seats']
  },
  {
    id: '7',
    name: 'Chevrolet Corvette',
    image: 'https://source.unsplash.com/p9DP9JFQ3EU',
    price: 125,
    location: 'Las Vegas, NV',
    rating: 4.7,
    reviews: 83,
    carType: 'Sports',
    features: ['Performance Package', 'Convertible', 'Head-up Display']
  },
  {
    id: '8',
    name: 'Ford Mustang GT',
    image: 'https://source.unsplash.com/_DzW3MT_s3s',
    price: 95,
    location: 'Austin, TX',
    rating: 4.6,
    reviews: 112,
    carType: 'Sports',
    features: ['V8 Engine', 'Premium Sound', 'Performance Package']
  }
];

const CarListings = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-8 pb-16">
        <div className="container">
          {/* Search and filters */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Find your perfect ride</h1>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by make, model, or features" 
                  className="pl-9"
                />
              </div>
              
              <div className="flex gap-2">
                <div className="w-full md:w-auto">
                  <Select>
                    <SelectTrigger className="w-full md:w-[160px]">
                      <SelectValue placeholder="Car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Sliders className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    
                    <div className="py-6 space-y-6">
                      <div>
                        <h3 className="font-medium mb-4">Price range</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-muted-foreground">Min</label>
                            <Input placeholder="$0" />
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Max</label>
                            <Input placeholder="$500" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Car type</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {['Sedan', 'SUV', 'Sports', 'Electric', 'Luxury', 'Convertible'].map(type => (
                            <Button 
                              key={type}
                              variant="outline"
                              className="justify-start"
                              onClick={() => addFilter(type)}
                            >
                              <Car className="h-4 w-4 mr-2" />
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {['GPS', 'Bluetooth', 'Backup Camera', 'Sunroof', 'Apple CarPlay', 'Android Auto'].map(feature => (
                            <Button 
                              key={feature}
                              variant="outline"
                              className="justify-start"
                              onClick={() => addFilter(feature)}
                            >
                              {feature}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Transmission</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {['Automatic', 'Manual'].map(transmission => (
                            <Button 
                              key={transmission}
                              variant="outline"
                              className="justify-start"
                              onClick={() => addFilter(transmission)}
                            >
                              {transmission}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t flex gap-2">
                        <Button className="flex-1">Apply Filters</Button>
                        <Button variant="outline">Reset</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            
            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeFilters.map(filter => (
                  <Badge key={filter} variant="secondary" className="gap-1 px-3 py-1">
                    {filter}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => removeFilter(filter)}
                    />
                  </Badge>
                ))}
                {activeFilters.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground text-xs"
                    onClick={() => setActiveFilters([])}
                  >
                    Clear all
                  </Button>
                )}
              </div>
            )}
            
            {/* Sort options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {cars.length} vehicles found
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by:</span>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Car grid */}
          <div className="car-grid">
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                &laquo;
              </Button>
              <Button variant="default" size="icon">1</Button>
              <Button variant="outline" size="icon">2</Button>
              <Button variant="outline" size="icon">3</Button>
              <Button variant="outline" size="icon">&raquo;</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarListings;
