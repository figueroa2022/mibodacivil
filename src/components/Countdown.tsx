import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
  accentColor?: string;
}

export default function Countdown({ targetDate, accentColor }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 justify-center py-8">
      <TimeUnit value={timeLeft.days} label="Días" accentColor={accentColor} />
      <TimeUnit value={timeLeft.hours} label="Horas" accentColor={accentColor} />
      <TimeUnit value={timeLeft.minutes} label="Min" accentColor={accentColor} />
      <TimeUnit value={timeLeft.seconds} label="Seg" accentColor={accentColor} />
    </div>
  );
}

function TimeUnit({ value, label, accentColor }: { value: number; label: string; accentColor?: string }) {
  return (
    <div className="flex flex-col items-center">
      <span 
        className="font-display text-2xl md:text-3xl" 
        style={{ color: accentColor || '#1c1917' }}
      >
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-black mt-1">{label}</span>
    </div>
  );
}
