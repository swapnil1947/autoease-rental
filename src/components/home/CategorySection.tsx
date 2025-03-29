
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, Bike, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'sedans',
    name: 'Sedans',
    icon: <Car className="h-8 w-8" />,
    image: 'https://source.unsplash.com/qIu77BsFdds',
    count: 357
  },
  {
    id: 'suvs',
    name: 'SUVs',
    icon: <Truck className="h-8 w-8" />,
    image: 'https://source.unsplash.com/dR_q93lfaTw',
    count: 285
  },
  {
    id: 'luxury',
    name: 'Luxury',
    icon: <Car className="h-8 w-8" />,
    image: 'https://source.unsplash.com/ZwKCWVFslHE',
    count: 112
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: <Car className="h-8 w-8" />,
    image: 'https://source.unsplash.com/UsYOap7yIMg',
    count: 98
  },
  {
    id: 'electric',
    name: 'Electric',
    icon: <Car className="h-8 w-8" />,
    image: 'https://source.unsplash.com/EBNz8hKbEgY',
    count: 176
  },
  {
    id: 'bikes',
    name: 'Motorcycles',
    icon: <Bike className="h-8 w-8" />,
    image: 'https://source.unsplash.com/WOA2qLHFW4Y',
    count: 143
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Browse by Category</h2>
        <Link to="/categories" className="flex items-center text-primary font-medium">
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <Link 
            to={`/listings?category=${category.id}`} 
            key={category.id}
            className="category-card group"
          >
            <div className="h-36 relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-white/80">{category.count} vehicles</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
