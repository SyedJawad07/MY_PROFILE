
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: 'primary' | 'secondary' | 'green' | 'purple' | 'blue';
  delay?: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  color = 'primary',
  delay = 0,
  className
}) => {
  const [width, setWidth] = useState(0);
  const triggered = useRef(false);
  const skillRef = useRef<HTMLDivElement>(null);

  const colorMap = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    green: 'bg-cyber-green',
    purple: 'bg-cyber-purple',
    blue: 'bg-blue-500'
  };

  const bgColor = colorMap[color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div 
      ref={skillRef}
      className={cn('mb-4 sm:mb-5 w-full hover:translate-y-[-2px] transition-transform duration-300', className)}
    >
      <div className="flex justify-between mb-1 sm:mb-2">
        <span className="font-medium text-xs sm:text-sm">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1 sm:h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
        <div 
          className={cn('h-full rounded-full transition-all duration-1000 ease-out', bgColor)}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
