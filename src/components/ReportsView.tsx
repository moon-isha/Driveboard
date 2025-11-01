import { TrendingUp, TrendingDown, Users, DollarSign, Target, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

export function ReportsView() {
  const overviewData = [
    { label: 'Active Prospects', value: '34,500', change: '+12.5%', trend: 'up', icon: Users, color: '#9333EA' },
    { label: 'Revenue Generated', value: '₹1.42 Cr', change: '+8.2%', trend: 'up', icon: DollarSign, color: '#10B981' },
    { label: 'Win Rate', value: '6.2%', change: '-2.4%', trend: 'down', icon: Target, color: '#F97316' },
    { label: 'Avg Deal Velocity', value: '8.4 days', change: '+15.3%', trend: 'up', icon: Zap, color: '#0B5FFF' },
  ];

  const monthlyData = [
    { month: 'Apr', leads: 340, conversions: 28, revenue: 42 },
    { month: 'May', leads: 420, conversions: 35, revenue: 58 },
    { month: 'Jun', leads: 380, conversions: 31, revenue: 51 },
    { month: 'Jul', leads: 520, conversions: 42, revenue: 72 },
    { month: 'Aug', leads: 480, conversions: 39, revenue: 65 },
    { month: 'Sep', leads: 610, conversions: 51, revenue: 89 },
    { month: 'Oct', leads: 590, conversions: 48, revenue: 82 },
  ];

  const sourceData = [
    { name: 'Website Organic', value: 4200, percentage: 35 },
    { name: 'Partner Referral', value: 3100, percentage: 26 },
    { name: 'Social Media', value: 2400, percentage: 20 },
    { name: 'Walk-in', value: 1500, percentage: 12 },
    { name: 'Phone Call', value: 800, percentage: 7 },
  ];

  const performerData = [
    { name: 'Priya Sharma', deals: 28, revenue: '₹52 Cr', winRate: '92%', change: '+12%' },
    { name: 'Rahul Verma', deals: 24, revenue: '₹48 Cr', winRate: '88%', change: '+8%' },
    { name: 'Rajesh Kumar', deals: 19, revenue: '₹38 Cr', winRate: '85%', change: '+5%' },
    { name: 'Sneha Reddy', deals: 16, revenue: '₹32 Cr', winRate: '82%', change: '+3%' },
  ];

  const pipelineData = [
    { stage: 'New', count: 145, value: 218 },
    { stage: 'Contacted', count: 89, value: 178 },
    { stage: 'Qualified', count: 62, value: 156 },
    { stage: 'Negotiation', count: 38, value: 142 },
    { stage: 'Won', count: 28, value: 124 },
  ];

  const COLORS = ['#0B5FFF', '#9333EA', '#F97316', '#10B981', '#EC4899'];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">Reports & Analytics</h1>
        <p className="text-sm text-gray-600">AI-powered insights for exponential growth</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-6">
            {overviewData.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${metric.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: metric.color }} />
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {metric.change}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-gray-900">{metric.value}</div>
                  <div className="text-xs text-gray-500 mt-1">vs last period</div>
                </Card>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-sm text-gray-900 mb-4">Lead Generation Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0B5FFF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0B5FFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Area type="monotone" dataKey="leads" stroke="#0B5FFF" fillOpacity={1} fill="url(#colorLeads)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm text-gray-900 mb-4">Lead Source Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Performance Table & Pipeline */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-900">Top Performers</h3>
                <div className="text-xs text-gray-500">This month's revenue champions</div>
              </div>
              <div className="space-y-4">
                {performerData.map((performer, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: COLORS[index] }}
                    >
                      {performer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">{performer.name}</div>
                      <div className="text-xs text-gray-500">{performer.deals} deals • {performer.revenue}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-900">{performer.winRate}</div>
                      <div className="text-xs text-green-600">{performer.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm text-gray-900 mb-4">Sales Pipeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={pipelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="stage" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#0B5FFF" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 mb-2">AI-Powered Insights</h3>
                <div className="text-xs text-gray-600 mb-4">Real-time intelligence for smarter decisions</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-red-900 mb-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Hot
                    </div>
                    <div className="text-xs text-red-700 mb-2">High-value prospects identified</div>
                    <div className="text-xs text-red-600">3 leads with budget {'>'} ₹50L ready for follow-up</div>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-orange-900 mb-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Trending
                    </div>
                    <div className="text-xs text-orange-700 mb-2">EV interest surging +32%</div>
                    <div className="text-xs text-orange-600">Electric vehicle inquiries up significantly this month</div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-blue-900 mb-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Opportunity
                    </div>
                    <div className="text-xs text-blue-700 mb-2">Weekend engagement boost</div>
                    <div className="text-xs text-blue-600">45% higher response rate on Saturday mornings</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-sm text-gray-900 mb-4">Engagement Metrics</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="leads" stroke="#0B5FFF" strokeWidth={2} name="Total Leads" />
                <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} name="Conversions" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="retention">
          <Card className="p-6">
            <h3 className="text-sm text-gray-900 mb-4">Customer Retention Analysis</h3>
            <div className="text-sm text-gray-600">Retention metrics and analysis coming soon...</div>
          </Card>
        </TabsContent>

        <TabsContent value="conversion">
          <Card className="p-6">
            <h3 className="text-sm text-gray-900 mb-4">Conversion Funnel</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={pipelineData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis dataKey="stage" type="category" stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="count" fill="#0B5FFF" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}