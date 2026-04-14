export interface InvitationData {
  partner1: string;
  partner2: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  lat: number;
  lng: number;
  message: string;
  rsvpDeadline: string;
  themeColor: string;
  accentColor: string;
  musicUrl: string;
}

export const defaultInvitation: InvitationData = {
  partner1: "Anderson",
  partner2: "Valentina",
  date: "2026-05-02T10:00:00",
  time: "10:00 AM",
  venue: "Notaría Única, San Vicente del Caguán",
  address: "Carrera 3 # 2-67",
  lat: 2.1154,
  lng: -74.7694,
  message: "Nos encantaría que nos acompañes en este día tan especial donde uniremos nuestras vidas para siempre.",
  rsvpDeadline: "2026-04-02",
  themeColor: "#fdfcf0",
  accentColor: "#b8860b",
  musicUrl: "/musica.mp3",
  backgroundImage: "/mano.jpg",
};
