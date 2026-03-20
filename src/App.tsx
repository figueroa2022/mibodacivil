import { useState } from 'react';
import InvitationPreview from './components/InvitationPreview';
import { defaultInvitation, InvitationData } from './types';

export default function App() {
  const [invitationData] = useState<InvitationData>(defaultInvitation);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <main className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 h-full overflow-y-auto">
          <InvitationPreview data={invitationData} />
        </div>
      </main>
    </div>
  );
}


