import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MusicPlayerProps {
  url: string;
}

export default function MusicPlayer({ url }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Error playing audio:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Reset player when URL changes
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [url]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={url} loop />
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-stone-200 px-5 py-3 rounded-full shadow-xl text-stone-900 group transition-all duration-300"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Pause className="w-5 h-5 fill-stone-900" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Play className="w-5 h-5 fill-stone-900" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {isPlaying && (
            <motion.div 
              className="absolute -inset-1 border-2 border-stone-900/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>

        <div className="flex flex-col items-start pr-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Nuestra Canción</span>
          <span className="text-xs font-serif italic text-stone-800">
            {isPlaying ? "Reproduciendo..." : "Escuchar música"}
          </span>
        </div>

        <Music className={`w-4 h-4 text-stone-400 transition-transform duration-500 ${isPlaying ? 'rotate-12' : ''}`} />
      </motion.button>
    </div>
  );
}
