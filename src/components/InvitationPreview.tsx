import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Heart, GlassWater } from 'lucide-react';
import { InvitationData } from '../types';
import Countdown from './Countdown';

interface InvitationPreviewProps {
  data: InvitationData;
}

export default function InvitationPreview({ data }: InvitationPreviewProps) {
  const dateObj = new Date(data.date);
  const weekday = dateObj.toLocaleDateString('es-ES', { weekday: 'long' });
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('es-ES', { month: 'long' });
  const year = dateObj.getFullYear();
  
  const formattedDate = `${weekday} ${day} de ${month} del ${year}`;

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8"
      style={{ 
        background: `radial-gradient(circle at center, #ffffff 0%, ${data.themeColor} 100%)`,
        backgroundColor: data.themeColor 
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden border border-black/5 flex flex-col items-center text-center relative"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-stone-800/10" />
        
        <div className="p-8 md:p-16 flex flex-col items-center w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <Heart className="w-8 h-8" style={{ color: data.accentColor }} strokeWidth={1} />
          </motion.div>

          <h2 
            className="font-serif text-sm uppercase tracking-[0.3em] mb-6"
            style={{ color: data.accentColor }}
          >
            NUESTRA BODA CIVIL
          </h2>

          <h1 className="font-display text-5xl md:text-7xl text-stone-900 mb-4 leading-tight">
            {data.partner1} <br />
            <span className="text-3xl md:text-5xl font-serif italic">&</span> <br />
            {data.partner2}
          </h1>

          <div className="w-16 h-px my-8" style={{ backgroundColor: data.accentColor }} />

          <p className="font-serif text-lg md:text-xl text-stone-600 italic max-w-md mb-8 leading-relaxed">
            "{data.message}"
          </p>

          <Countdown targetDate={data.date} accentColor={data.accentColor} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12 mt-8">
            <div className="flex flex-col items-center">
              <Calendar className="w-5 h-5 mb-2" style={{ color: data.accentColor }} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest text-stone-500 mb-1">Fecha</span>
              <span className="font-serif text-stone-900">{formattedDate}</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 mb-2" style={{ color: data.accentColor }} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest text-stone-500 mb-1">Hora</span>
              <span className="font-serif text-stone-900">{data.time}</span>
            </div>
          </div>

          <div className="w-full space-y-12">
            <div className="text-center">
              <MapPin className="w-5 h-5 mb-2 mx-auto" style={{ color: data.accentColor }} strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Lugar de la boda civil</p>
              <p className="font-serif text-stone-900 text-lg mb-1">{data.venue}</p>
              <p className="font-serif text-stone-600 italic">{data.address}</p>
            </div>

            <div className="text-center">
              <GlassWater className="w-5 h-5 mb-2 mx-auto" style={{ color: data.accentColor }} strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Recepción</p>
              <p className="font-serif text-stone-900 text-lg">Restaurante Gastro Bar Amsterdam</p>
                <p className="font-serif text-stone-600 italic">Antigua Zona Rosa Via al Aeropuerto TV 8A Este 2-40-44</p>
                          <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 mb-2" style={{ color: data.accentColor }} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest text-stone-500 mb-1">HORA DEL ALMUERZO</span>
              <span className="font-serif text-stone-900">{data.time_r}</span>
            </div>
          </div>
              <p className="font-serif text-stone-600 italic mt-2">¡Te esperamos para celebrar!</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-stone-800/10" />
      </motion.div>
    </div>
  );
}



