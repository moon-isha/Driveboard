import { Checkbox } from './ui/checkbox';
import { LeadRow } from './LeadRow';
import { leadsData } from './data/leadsData';

interface LeadTableProps {
  onLeadClick: (leadId: number) => void;
}

export function LeadTable({ onLeadClick }: LeadTableProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="w-12 px-4 py-3">
              <Checkbox />
            </th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Name</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Phone</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Product Interest</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Investment</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Status</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Source</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Assigned To</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Last Contacted</th>
            <th className="px-4 py-3 text-left text-xs text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {leadsData.map((lead) => (
            <LeadRow key={lead.id} lead={lead} onLeadClick={onLeadClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}