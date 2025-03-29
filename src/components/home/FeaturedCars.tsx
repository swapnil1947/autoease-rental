
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/cars/CarCard';

// Sample car data
const featuredCars = [
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
  }
];

const FeaturedCars: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Vehicles</h2>
        <Link to="/listings" className="flex items-center text-primary font-medium">
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="car-grid">
        {featuredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
