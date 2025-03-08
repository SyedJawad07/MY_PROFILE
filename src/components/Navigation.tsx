
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Prevent body scroll when menu is open on mobile
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4',
        scrolled ? 'bg-cyber-black/80 backdrop-blur-md shadow-md' : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-1 sm:gap-2 group">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-green transition-all duration-300 group-hover:text-cyber-purple" />
          <span className="font-mono font-bold text-base sm:text-lg">SOC.ANALYST</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-cyber-green hover:text-cyber-purple transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cyber-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu - improved for better responsiveness */}
      <nav className={cn(
        'md:hidden fixed inset-0 bg-cyber-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-300',
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className="text-xl font-medium hover:text-cyber-green transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
