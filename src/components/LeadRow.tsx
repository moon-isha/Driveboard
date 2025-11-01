import { Phone, Mail, MoreVertical } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Avatar, AvatarFallback } from './ui/avatar';
import { StatusChip } from './StatusChip';
import { Button } from './ui/button';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  productInterest: string;
  investment: string;
  stage: string;
  priority: string;
  aiScore: number;
  revenueOwner: string;
  created: string;
  source?: string;
  lastContacted?: string;
}

interface LeadRowProps {
  lead: Lead;
  onLeadClick: (leadId: number) => void;
}

export function LeadRow({ lead, onLeadClick }: LeadRowProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getAvatarColor = (id: number) => {
    const colors = ['#9333EA', '#EC4899', '#F97316', '#10B981', '#3B82F6', '#8B5CF6'];
    return colors[id % colors.length];
  };

  return (
    <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => onLeadClick(lead.id)}>
      <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
        <Checkbox />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10" style={{ backgroundColor: getAvatarColor(lead.id) }}>
            <AvatarFallback style={{ backgroundColor: getAvatarColor(lead.id), color: 'white' }}>
              {getInitials(lead.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm text-gray-900">{lead.name}</div>
            <div className="text-xs text-gray-500">{lead.email}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-900">{lead.phone}</div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-900">{lead.productInterest}</div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-900">{lead.investment}</div>
      </td>
      <td className="px-4 py-4">
        <StatusChip status={lead.stage} />
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-900">{lead.source || 'Website'}</div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-900">{lead.revenueOwner}</div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-gray-600">{lead.lastContacted || '2 hours ago'}</div>
      </td>
      <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
            <Mail className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-100">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}