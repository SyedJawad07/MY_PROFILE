
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import NetworkVisualization from './NetworkVisualization';
import { ArrowDown, Shield, FileText, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Simulate access granted after delay
    const timer = setTimeout(() => {
      setAccessGranted(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background network visualization */}
      <div className="absolute inset-0 opacity-40">
        <NetworkVisualization />
      </div>
      
      {/* Overlay gradient - improved visibility */}
      <div className="absolute inset-0 bg-cyber-grid bg-40px"></div>
      <div className="absolute inset-0 bg-glow-green opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Access verification UI */}
          <div className={cn(
            'flex items-center justify-center gap-2 font-mono text-sm md:text-base mb-4 transition-all duration-500',
            loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'
          )}>
            <span className="inline-flex items-center">
              <Shield className="w-4 h-4 mr-2 text-cyber-green animate-pulse-subtle" />
              <span className="text-foreground">SOC//</span>
            </span>
            <span className={cn(
              'px-3 py-1 rounded-full transition-all duration-700 flex items-center',
              accessGranted ? 'bg-cyber-green/20 text-cyber-green' : 'bg-muted text-muted-foreground'
            )}>
              {accessGranted ? 'SECURE CONNECTION ESTABLISHED' : 'ESTABLISHING CONNECTION...'}
            </span>
          </div>
          
          {/* Name & Title - improved contrast */}
          <div className={cn(
            'mb-6 transition-all duration-700 delay-500',
            accessGranted ? 'opacity-100' : 'opacity-0'
          )}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-gradient-green text-foreground">
              <AnimatedText 
                text=" SYED JAWAD" 
                typingSpeed={80} 
                startDelay={2500}
              />
            </h1>
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-md font-mono text-xs md:text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-green animate-pulse-subtle"></span>
              <AnimatedText 
                text=" SOC ANALYST | CYBERSECURITY ENTHUSIAST | ML PRACTITIONER" 
                typingSpeed={30} 
                startDelay={3000}
              />
            </div>
          </div>
          
          {/* Tagline - enhanced visibility */}
          <div className={cn(
            'mb-10 transition-all duration-700 delay-700',
            accessGranted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          )}>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-foreground">
              <AnimatedText 
                text=" Detecting threats, automating defenses, securing the future." 
                typingSpeed={40} 
                startDelay={4000}
              />
            </p>
          </div>
          
          {/* CTA Buttons - enhanced */}
          <div className={cn(
            'transition-all duration-700 delay-1000 flex flex-col sm:flex-row items-center justify-center gap-4',
            accessGranted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          )}>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-border inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-accent transition-all duration-300 rounded-md relative group overflow-hidden w-full sm:w-auto"
            >
              <FileText className="w-4 h-4 text-cyber-green" />
              <span className="font-mono relative z-10 text-foreground">VIEW RESUME</span>
              <span className="absolute inset-0 bg-cyber-green/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            
            <a 
              href="#contact" 
              className="cyber-border inline-flex items-center gap-2 px-6 py-3 bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green transition-all duration-300 rounded-md relative group overflow-hidden w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="font-mono relative z-10">CONNECT WITH ME</span>
              <span className="absolute inset-0 bg-cyber-green/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-green/20 animate-scan-line"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={cn(
        'absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500',
        accessGranted ? 'opacity-100' : 'opacity-0'
      )}>
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-mono mb-2">SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
