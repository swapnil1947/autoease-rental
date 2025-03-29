
import React from 'react';
import { Calendar, Car, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find your ride',
    description: 'Browse thousands of vehicles by location, date, and type to find your perfect match.',
    icon: <Car className="h-8 w-8" />,
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 2,
    title: 'Book securely',
    description: 'Reserve your vehicle with our simple booking process. No hidden fees or complications.',
    icon: <Calendar className="h-8 w-8" />,
    color: 'bg-accent/10 text-accent'
  },
  {
    id: 3,
    title: 'Enjoy the journey',
    description: "Receive the keys and hit the road. Return when you're done. Simple as that.",
    icon: <CreditCard className="h-8 w-8" />,
    color: 'bg-green-500/10 text-green-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Renting a vehicle has never been easier. Follow these simple steps to get on the road.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.color}`}>
              {step.icon}
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary mb-6">
              <span className="font-medium">{step.id}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
