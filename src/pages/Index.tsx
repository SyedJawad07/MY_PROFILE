
import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { ChevronUp, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Toaster } from "@/components/ui/toaster";

const AboutSection = lazy(() => import('@/components/AboutSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const CertificationsSection = lazy(() => import('@/components/CertificationsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openResume = () => {
    try {
      window.open('/resume.pdf', '_blank');
      toast({
        title: "Opening Resume",
        description: "The resume PDF should open in a new tab."
      });
    } catch (error) {
      toast({
        title: "Error Opening Resume",
        description: "Please ensure your resume.pdf file is in the public folder.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className={cn(
      "bg-background min-h-screen overflow-x-hidden transition-opacity duration-500",
      isLoaded ? "opacity-100" : "opacity-0"
    )}>
      <Navigation />
      
      <HeroSection />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </Suspense>
      
      <button
        onClick={openResume}
        className="fixed left-4 sm:left-8 bottom-8 p-2 sm:p-3 rounded-lg bg-primary/10 text-primary z-50 transition-all duration-300 shadow-lg hover:bg-primary/20 flex items-center gap-1 sm:gap-2"
        aria-label="View Resume"
      >
        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-xs sm:text-sm font-medium">Resume</span>
      </button>
      
      <footer className="bg-card py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-mono text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} SOC Analyst Portfolio | Made with the help of AI | Copyright by Syedjawad
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <a href="#about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-4 sm:right-8 p-2 sm:p-3 rounded-lg bg-secondary/10 text-secondary z-50 transition-all duration-300 shadow-lg hover:bg-secondary/20',
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <Toaster />
    </div>
  );
};

export default Index;
