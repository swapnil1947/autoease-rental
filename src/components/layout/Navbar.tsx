
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, Menu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/common/Logo';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-background border-b sticky top-0 z-50", className)}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />
        
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
          <Link to="/showcase" className="text-sm font-medium hover:text-primary flex items-center gap-1">
            <Layers className="h-4 w-4" />
            Showcase
          </Link>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] text-primary-foreground rounded-full flex items-center justify-center">3</span>
          </Button>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button size="sm" className="hidden md:flex">
              Sign Up
            </Button>
          </Link>
          
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
                <Link to="/showcase" className="text-lg font-medium py-2 hover:text-primary flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  App Showcase
                </Link>
                <Link to="/login" className="text-lg font-medium py-2 hover:text-primary">Login</Link>
                <Link to="/signup" className="text-lg font-medium py-2 hover:text-primary">Sign Up</Link>
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
