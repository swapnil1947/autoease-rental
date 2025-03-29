
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CarFeature {
  name: string;
  icon?: React.ReactNode;
}

interface Car {
  id: string;
  name: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  reviews: number;
  carType: string;
  features: string[];
}

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, featured = false }) => {
  return (
    <div 
      className={`bg-background rounded-xl border overflow-hidden transition-all hover:shadow-md ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full aspect-[16/10] object-cover"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Badge className="absolute top-2 left-2">{car.carType}</Badge>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{car.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium">{car.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({car.reviews})</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{car.location}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-secondary/50">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${car.price}</span>
            <span className="text-muted-foreground text-sm"> / day</span>
          </div>
          
          <Button asChild>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
