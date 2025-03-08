import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Award, Check, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
  color: 'green' | 'purple' | 'blue';
  featured?: boolean;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    { 
      name: 'ISC2 Cybersecurity Certificate',
      issuer: 'ISC²',
      date: 'Dec 2024',
      color: 'green',
      featured: true
    },
    { 
      name: 'Google IT Support ',
      issuer: 'Coursera',
      date: 'Mar 2025',
      color: 'purple',
      featured: true
    },
    { 
      name: 'Google Cybersecurity',
      issuer: 'Coursera',
      date: 'Nov 2024',
      color: 'blue',
      featured: true
    },
    { 
      name: 'Machine Learning for Cybersecurity',
      issuer: 'Coursera',
      date: 'Sep 2022',
      color: 'green',
      featured: true
    },    
    { 
      name: 'Google AI Essentials',
      issuer: 'Coursera',
      date: 'Apr 2022',
      color: 'blue'
    },
    { 
      name: 'Tools of the Trade: Linux and SQL',
      issuer: 'Google Coursera',
      date: 'Nov 2022',
      color: 'green'
    },  
    { 
      name: 'System Administration and IT Infrastructure Services',
      issuer: 'Coursera',
      date: 'Mar 2023',
      color: 'blue'
    },
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-cyber-darkblue bg-opacity-50"></div>
      <div className="absolute inset-0 bg-glow-green opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Certifications</h2>
          
          {/* Featured certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {certifications
              .filter(cert => cert.featured)
              .map((cert, index) => (
                <GlassmorphicCard 
                  key={cert.name} 
                  className="h-full relative overflow-hidden"
                  glowColor={cert.color === 'blue' ? 'purple' : cert.color}
                >
                  <div className="absolute top-0 right-0">
                    <div className={cn(
                      "py-1 px-3 text-xs font-mono",
                      cert.color === 'green' ? 'bg-cyber-green/20 text-cyber-green' : 
                      cert.color === 'purple' ? 'bg-cyber-purple/20 text-cyber-purple' : 
                      'bg-cyber-blue/20 text-cyber-blue'
                    )}>
                      Premium
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-full",
                      cert.color === 'green' ? 'bg-cyber-green/10' : 
                      cert.color === 'purple' ? 'bg-cyber-purple/10' : 
                      'bg-cyber-blue/10'
                    )}>
                      <Award className={cn(
                        "w-6 h-6",
                        cert.color === 'green' ? 'text-cyber-green' : 
                        cert.color === 'purple' ? 'text-cyber-purple' : 
                        'text-cyber-blue'
                      )} />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold">{cert.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                        <span className="text-xs font-mono">{cert.date}</span>
                      </div>
                      
                      <div className="mt-4">
                        <span className={cn(
                          "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs",
                          cert.color === 'green' ? 'bg-cyber-green/10 text-cyber-green' : 
                          cert.color === 'purple' ? 'bg-cyber-purple/10 text-cyber-purple' : 
                          'bg-cyber-blue/10 text-cyber-blue'
                        )}>
                          <Check className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
          </div>
          
          {/* Other certifications in a grid */}
          <h3 className="text-xl font-bold mb-6 font-sans">Additional Credentials</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications
              .filter(cert => !cert.featured)
              .map((cert) => (
                <GlassmorphicCard 
                  key={cert.name} 
                  className="h-full"
                  glowColor={cert.color === 'blue' ? 'purple' : cert.color}
                >
                  <h4 className="font-bold">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <span className="text-xs font-mono">{cert.date}</span>
                  </div>
                </GlassmorphicCard>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
