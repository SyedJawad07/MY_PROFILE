
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface NetworkVisualizationProps {
  className?: string;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions based on parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create nodes
    const nodeCount = 60;
    const nodes: any[] = [];
    const connectionDistance = 120;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        highlighted: Math.random() > 0.92,
      });
    }
    
    // Animation
    const drawNetwork = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        
        if (node.highlighted) {
          ctx.fillStyle = node.highlighted === 2 ? 'rgba(0, 255, 102, 0.7)' : 'rgba(157, 0, 255, 0.5)';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        }
        
        ctx.fill();
      });
      
      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Highlight connection if both nodes are highlighted
            if (nodes[i].highlighted && nodes[j].highlighted) {
              ctx.strokeStyle = 'rgba(0, 102, 255, 0.3)';
            } else if (nodes[i].highlighted || nodes[j].highlighted) {
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            } else {
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            }
          }
        }
      }
      ctx.stroke();
      
      // Request next frame
      requestAnimationFrame(drawNetwork);
    };
    
    // Start animation
    drawNetwork();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn('absolute inset-0 w-full h-full', className)}
    />
  );
};

export default NetworkVisualization;
