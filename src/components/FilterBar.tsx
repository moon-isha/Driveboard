import { Calendar, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function FilterBar() {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
      <Button variant="outline" className="gap-2">
        <Calendar className="w-4 h-4" />
        Last 30 days
        <ChevronDown className="w-4 h-4" />
      </Button>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="contacted">Contacted</SelectItem>
          <SelectItem value="qualified">Qualified</SelectItem>
          <SelectItem value="negotiation">Negotiation</SelectItem>
          <SelectItem value="won">Won</SelectItem>
          <SelectItem value="lost">Lost</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-sources">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Sources" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-sources">All Sources</SelectItem>
          <SelectItem value="website">Website</SelectItem>
          <SelectItem value="phone">Phone Call</SelectItem>
          <SelectItem value="walk-in">Walk-in</SelectItem>
          <SelectItem value="referral">Referral</SelectItem>
          <SelectItem value="social">Social Media</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-owners">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Owners" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-owners">All Owners</SelectItem>
          <SelectItem value="priya">Priya Sharma</SelectItem>
          <SelectItem value="rahul">Rahul Verma</SelectItem>
          <SelectItem value="rajesh">Rajesh Kumar</SelectItem>
          <SelectItem value="sneha">Sneha Reddy</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
