
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const logoSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className="flex items-center gap-2">
      <div className={`${logoSizes[size]} rounded-lg bg-primary flex items-center justify-center`}>
        <span className="text-primary-foreground font-bold">AE</span>
      </div>
      {withText && (
        <span className={`${textSizes[size]} font-bold`}>AutoEase</span>
      )}
    </Link>
  );
};

export default Logo;
