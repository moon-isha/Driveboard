import { useState } from 'react';
import { LeadsView } from './components/LeadsView';
import { DashboardView } from './components/DashboardView';
import { ReportsView } from './components/ReportsView';
import { LeftNav } from './components/LeftNav';
import { TopBar } from './components/TopBar';

export default function App() {
  const [currentView, setCurrentView] = useState<'leads' | 'dashboard' | 'reports'>('leads');
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(null);

  const handleLeadClick = (leadId: number) => {
    setSelectedLeadId(leadId);
    setCurrentView('dashboard');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <LeftNav currentView={currentView} onNavigate={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {currentView === 'leads' && <LeadsView onLeadClick={handleLeadClick} />}
          {currentView === 'dashboard' && <DashboardView selectedLeadId={selectedLeadId} />}
          {currentView === 'reports' && <ReportsView />}
        </main>
      </div>
    </div>
  );
}
