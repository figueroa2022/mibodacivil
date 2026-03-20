import { useState, useRef, useEffect } from 'react';
import { Heart, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MusicPlayerProps {
  url: string;
  accentColor: string;
}

export default function MusicPlayer({ url, accentColor }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setShowTooltip(true);
      } else {
        audioRef.current.play().catch(err => console.error("Error playing audio:", err));
        setShowTooltip(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    setIsPlaying(false);
    setShowTooltip(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [url]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end gap-3">
      <audio ref={audioRef} src={url} loop />
      
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-black/5 mb-2"
          >
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 whitespace-nowrap">
              Reproduce nuestra canción
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="relative flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-black/5 transition-all duration-300"
      >
        <Heart 
          className={`absolute w-8 h-8 transition-all duration-500 ${isPlaying ? 'fill-current opacity-20' : 'opacity-100'}`}
          style={{ color: accentColor }}
          strokeWidth={1}
        />
        
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Pause className="w-5 h-5 text-stone-800 fill-stone-800" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Play className="w-5 h-5 text-stone-800 fill-stone-800 ml-1" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {isPlaying && (
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${accentColor}` }}
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.button>
    </div>
  );
}
