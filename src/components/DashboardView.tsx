import { useState } from 'react';
import { Phone, Mail, UserPlus, Calendar, Paperclip, Clock, User, TrendingUp, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { StatusChip } from './StatusChip';
import { PriorityChip } from './PriorityChip';
import { Badge } from './ui/badge';
import { leadsData } from './data/leadsData';

interface DashboardViewProps {
  selectedLeadId: number | null;
}

export function DashboardView({ selectedLeadId }: DashboardViewProps) {
  const lead = leadsData.find((l) => l.id === selectedLeadId) || leadsData[0];

  const activities = [
    { 
      type: 'call', 
      title: 'Phone Call - Discovery', 
      description: 'Discussed vehicle requirements and budget. Very interested in electric features. Follow-up scheduled for next week.',
      time: '2 hours ago', 
      user: 'Priya Sharma',
      userInitial: 'PS',
      icon: Phone,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    { 
      type: 'email', 
      title: 'Email Sent - Product Demo', 
      description: 'Sent product demo materials and pricing information for enterprise plan.',
      time: 'Yesterday at 3:30 PM', 
      user: 'Priya Sharma',
      userInitial: 'PS',
      icon: Mail,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    { 
      type: 'note', 
      title: 'Note Added', 
      description: 'Lead is decision maker at mid-size company. Looking to implement Q2. Budget approved.',
      time: '2 days ago', 
      user: 'Rahul Verma',
      userInitial: 'RV',
      icon: FileText,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left: Lead Card */}
        <div className="col-span-3">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <Avatar className="w-20 h-20 mb-4 bg-[#9333EA]">
                <AvatarFallback className="bg-[#9333EA] text-white text-xl">
                  {lead.name.split(' ').map((n) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-gray-900 mb-1">{lead.name}</h2>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" />
                  {lead.phone}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3 h-3" />
                  {lead.email}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-2">Tags</div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Enterprise</Badge>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Hot Lead</Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Demo Scheduled</Badge>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-gray-500 mb-1">Lead Score</div>
                <div className="flex items-center gap-2">
                  <Progress value={lead.aiScore} className="h-2 flex-1" />
                  <span className="text-sm text-gray-900">{lead.aiScore}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-[#0B5FFF] hover:bg-[#0B5FFF]/90">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" className="w-full">
                <UserPlus className="w-4 h-4 mr-2" />
                Assign
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
            </div>
          </Card>
        </div>

        {/* Middle: Recent Activity */}
        <div className="col-span-6">
          <Card className="p-6">
            <h3 className="text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-lg ${activity.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${activity.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-1">{activity.title}</div>
                      <div className="text-sm text-gray-600 mb-3">{activity.description}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-600">{activity.userInitial}</span>
                        </div>
                        <span>{activity.user}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Product Interest</div>
                    <div className="text-sm text-gray-900">{lead.productInterest}</div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Investment Range</div>
                    <div className="text-sm text-gray-900">{lead.investment}</div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Lead Created</div>
                    <div className="text-sm text-gray-900">{lead.created}</div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Lead ID</div>
                    <div className="text-sm text-gray-900">#{lead.id}</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="text-sm text-gray-900 mb-2">Initial Contact Notes</div>
                    <div className="text-xs text-gray-600">
                      Customer is looking for an electric vehicle for daily commute. Prefers SUV body type. Budget range is flexible. Has test driven competitor models.
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Added by Priya Sharma • 3 days ago</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="mt-6">
                <div className="text-sm text-gray-600">Full timeline coming soon...</div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Right: Follow-up & Details */}
        <div className="col-span-3 space-y-6">
          <Card className="p-6">
            <h3 className="text-sm text-gray-900 mb-4">Next Follow-up</h3>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-blue-900 mb-2">
                <Calendar className="w-4 h-4" />
                Tomorrow, 10:00 AM
              </div>
              <div className="text-xs text-blue-700">Schedule test drive appointment</div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm text-gray-900 mb-4">Lead Owner</h3>
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 bg-[#0B5FFF]">
                <AvatarFallback className="bg-[#0B5FFF] text-white">PS</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm text-gray-900">{lead.revenueOwner}</div>
                <div className="text-xs text-gray-500">Sales Manager</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-900">Attachments</h3>
              <span className="text-xs text-gray-500">3 files</span>
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Paperclip className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-gray-900">Product_Proposal.pdf</span>
                </div>
                <div className="text-xs text-gray-500">PDF • 2.4 MB</div>
              </div>
              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Paperclip className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-900">Enterprise_Pricing.xlsx</span>
                </div>
                <div className="text-xs text-gray-500">Excel • 1.2 MB</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Paperclip className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-gray-900">Case_Study_TechCorp.pdf</span>
                </div>
                <div className="text-xs text-gray-500">PDF • 3.1 MB</div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">Upload File</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}