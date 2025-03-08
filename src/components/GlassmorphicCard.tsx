
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'primary' | 'secondary' | 'green' | 'purple' | 'blue' | 'none';
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'none'
}) => {
  return (
    <div 
      className={cn(
        'relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 shadow-md transition-all duration-300',
        hoverEffect && 'hover:shadow-lg hover:border-border/80 hover:translate-y-[-3px]',
        glowColor === 'primary' && 'before:absolute before:inset-0 before:rounded-lg before:bg-primary before:opacity-5 before:-z-10 before:blur-xl animate-subtle-fade-in',
        glowColor === 'secondary' && 'before:absolute before:inset-0 before:rounded-lg before:bg-secondary before:opacity-5 before:-z-10 before:blur-xl animate-subtle-fade-in',
        glowColor === 'green' && 'before:absolute before:inset-0 before:rounded-lg before:bg-cyber-green before:opacity-5 before:-z-10 before:blur-xl animate-subtle-fade-in',
        glowColor === 'purple' && 'before:absolute before:inset-0 before:rounded-lg before:bg-cyber-purple before:opacity-5 before:-z-10 before:blur-xl animate-subtle-fade-in',
        glowColor === 'blue' && 'before:absolute before:inset-0 before:rounded-lg before:bg-cyber-blue before:opacity-5 before:-z-10 before:blur-xl animate-subtle-fade-in',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
