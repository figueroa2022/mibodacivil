import React from 'react';
import { InvitationData } from '../types';
import { Settings2, User, Calendar, MapPin, MessageSquare, Palette, Music } from 'lucide-react';

interface InvitationEditorProps {
  data: InvitationData;
  onChange: (data: InvitationData) => void;
}

export default function InvitationEditor({ data, onChange }: InvitationEditorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-stone-200 overflow-y-auto">
      <div className="p-6 border-b border-stone-100 flex items-center gap-3">
        <Settings2 className="w-5 h-5 text-stone-900" />
        <h2 className="font-display text-xl font-semibold">Personalizar Invitación</h2>
      </div>

      <div className="p-6 space-y-8">
        {/* Partners */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <User className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Pareja</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Nombre 1</label>
              <input
                type="text"
                name="partner1"
                value={data.partner1}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Nombre 2</label>
              <input
                type="text"
                name="partner2"
                value={data.partner2}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>
        </section>

        {/* Date & Time */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <Calendar className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Fecha y Hora</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Fecha</label>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Hora</label>
              <input
                type="time"
                name="time"
                value={data.time}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>
        </section>

        {/* Venue */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <MapPin className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Lugar</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Nombre del Lugar</label>
              <input
                type="text"
                name="venue"
                value={data.venue}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Dirección</label>
              <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">Latitud</label>
                <input
                  type="number"
                  step="any"
                  name="lat"
                  value={data.lat}
                  onChange={(e) => onChange({ ...data, lat: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">Longitud</label>
                <input
                  type="number"
                  step="any"
                  name="lng"
                  value={data.lng}
                  onChange={(e) => onChange({ ...data, lng: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Music */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <Music className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Música</h3>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-stone-400">URL de la Canción (MP3)</label>
            <input
              type="text"
              name="musicUrl"
              value={data.musicUrl}
              onChange={handleChange}
              placeholder="https://ejemplo.com/musica.mp3"
              className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
            <p className="text-[9px] text-stone-400 mt-1 italic">Pega un enlace directo a un archivo de audio MP3.</p>
          </div>
        </section>

        {/* Message */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <MessageSquare className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Mensaje</h3>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-stone-400">Mensaje de Bienvenida</label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 resize-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-stone-400">Fecha Límite RSVP</label>
            <input
              type="date"
              name="rsvpDeadline"
              value={data.rsvpDeadline}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
        </section>

        {/* Appearance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-stone-500">
            <Palette className="w-4 h-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">Apariencia</h3>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-stone-400">Color de Fondo</label>
            <div className="flex gap-2">
              <input
                type="color"
                name="themeColor"
                value={data.themeColor}
                onChange={handleChange}
                className="w-10 h-10 p-0 border-0 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                name="themeColor"
                value={data.themeColor}
                onChange={handleChange}
                className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

