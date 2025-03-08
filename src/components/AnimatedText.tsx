
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  typingSpeed = 50,
  startDelay = 0,
  showCursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef<string>(text);
  const charIndexRef = useRef<number>(0);

  useEffect(() => {
    textRef.current = text;
    
    const startTypingTimeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTypingTimeout);
  }, [text, startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    const typeNextChar = () => {
      if (charIndexRef.current < textRef.current.length) {
        setDisplayedText(prev => prev + textRef.current.charAt(charIndexRef.current));
        charIndexRef.current += 1;
      } else {
        setIsTyping(false);
      }
    };

    const typingInterval = setInterval(typeNextChar, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [isTyping, typingSpeed]);

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      {showCursor && isTyping && (
        <span className="inline-block w-[2px] h-[1em] bg-cyber-green animate-pulse-subtle ml-0.5 align-middle"></span>
      )}
    </span>
  );
};

export default AnimatedText;
