
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AE</span>
              </div>
              <span className="text-xl font-bold">AutoEase</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Rent the perfect vehicle for your next adventure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary text-sm">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary text-sm">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/host" className="text-muted-foreground hover:text-primary text-sm">Host your vehicle</Link></li>
              <li><Link to="/insurance" className="text-muted-foreground hover:text-primary text-sm">Insurance</Link></li>
              <li><Link to="/business" className="text-muted-foreground hover:text-primary text-sm">Business rentals</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary text-sm">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary text-sm">Help center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact us</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">Privacy policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">Terms & conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoEase. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-transparent text-sm text-muted-foreground border rounded-md px-2 py-1">
              <option value="usd">🇺🇸 USD</option>
              <option value="eur">🇪🇺 EUR</option>
              <option value="gbp">🇬🇧 GBP</option>
              <option value="jpy">🇯🇵 JPY</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
