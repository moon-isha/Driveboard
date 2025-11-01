import { useState } from 'react';
import { Plus, Calendar, Filter, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { LeadTable } from './LeadTable';
import { FilterBar } from './FilterBar';
import { AddLeadDialog } from './AddLeadDialog';
import { Card } from './ui/card';

interface LeadsViewProps {
  onLeadClick: (leadId: number) => void;
}

export function LeadsView({ onLeadClick }: LeadsViewProps) {
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header with Stats */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-gray-900 mb-1">Leads Management</h1>
            <p className="text-sm text-gray-600">Track and manage your car dealership opportunities</p>
          </div>
          <Button onClick={() => setIsAddLeadOpen(true)} className="bg-[#0B5FFF] hover:bg-[#0B5FFF]/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="text-xs mb-1 opacity-90">Total Leads</div>
            <div className="text-2xl mb-1">248</div>
            <div className="text-xs opacity-75">+12% from last month</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="text-xs mb-1 opacity-90">Hot Leads</div>
            <div className="text-2xl mb-1">42</div>
            <div className="text-xs opacity-75">Ready for follow-up</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="text-xs mb-1 opacity-90">Conversions</div>
            <div className="text-2xl mb-1">28</div>
            <div className="text-xs opacity-75">This month</div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="text-xs mb-1 opacity-90">Revenue Pipeline</div>
            <div className="text-2xl mb-1">₹8.4 Cr</div>
            <div className="text-xs opacity-75">Potential value</div>
          </Card>
        </div>
      </div>

      {/* AI Insights Banner */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-900 mb-1">AI Recommendation</div>
            <div className="text-xs text-gray-600">3 high-value leads haven't been contacted in 48 hours. Follow up now to increase conversion by 45%.</div>
          </div>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Take Action</Button>
        </div>
      </Card>

      <FilterBar />

      <div className="mt-6">
        <LeadTable onLeadClick={onLeadClick} />
      </div>

      <AddLeadDialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen} />
    </div>
  );
}