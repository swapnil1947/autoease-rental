
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-background border-b sticky top-0 z-50", className)}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">AE</span>
          </div>
          <span className="text-xl font-bold">AutoEase</span>
        </Link>
        
        {/* Search - Hide on mobile */}
        <div className="hidden md:flex relative w-full max-w-sm mx-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search cars, bikes..." 
            className="pl-8"
          />
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/listings" className="text-sm font-medium hover:text-primary">Explore</Link>
          <Link to="/host" className="text-sm font-medium hover:text-primary">Host a car</Link>
          <Link to="/messages" className="text-sm font-medium hover:text-primary">Messages</Link>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] text-primary-foreground rounded-full flex items-center justify-center">3</span>
          </Button>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/listings" className="text-lg font-medium py-2 hover:text-primary">Explore</Link>
                <Link to="/host" className="text-lg font-medium py-2 hover:text-primary">Host a car</Link>
                <Link to="/messages" className="text-lg font-medium py-2 hover:text-primary">Messages</Link>
                <Link to="/profile" className="text-lg font-medium py-2 hover:text-primary">Profile</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
