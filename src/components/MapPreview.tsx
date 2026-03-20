import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

interface MapPreviewProps {
  lat: number;
  lng: number;
  venue: string;
}

export default function MapPreview({ lat, lng, venue }: MapPreviewProps) {
  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-stone-100 rounded-2xl border border-stone-200 text-center">
        <h3 className="text-lg font-serif mb-4">Google Maps API Key Required</h3>
        <p className="text-sm text-stone-600 mb-6 max-w-md">
          To display the venue location, please add your Google Maps API key in the AI Studio Secrets panel as <code>GOOGLE_MAPS_PLATFORM_KEY</code>.
        </p>
        <div className="text-left text-xs bg-white p-4 rounded-lg border border-stone-200">
          <p className="font-bold mb-2">How to add it:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open Settings (⚙️ gear icon)</li>
            <li>Select Secrets</li>
            <li>Add <code>GOOGLE_MAPS_PLATFORM_KEY</code></li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="h-64 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          center={{ lat, lng }}
          zoom={15}
          mapId="DEMO_MAP_ID"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
          gestureHandling="greedy"
          disableDefaultUI
        >
          <AdvancedMarker position={{ lat, lng }} title={venue}>
            <Pin background="#1a1a1a" glyphColor="#fff" borderColor="#1a1a1a" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
