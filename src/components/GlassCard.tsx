import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div className={cn(
      "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
};