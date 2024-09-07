/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', applications: 65, shortlisted: 20, rejected: 10 },
  { month: 'Feb', applications: 38, shortlisted: 25, rejected: 18 },
  { month: 'Mar', applications: 35, shortlisted: 40, rejected: 10 },
  { month: 'Apr', applications: 25, shortlisted: 40, rejected: 10 },
  { month: 'May', applications: 40, shortlisted: 20, rejected: 15 },
  { month: 'Jun', applications: 25, shortlisted: 35, rejected: 15 },
  { month: 'Jul', applications: 40, shortlisted: 25, rejected: 15 },
  { month: 'Aug', applications: 45, shortlisted: 20, rejected: 10 },
  { month: 'Sep', applications: 35, shortlisted: 25, rejected: 20 },
  { month: 'Oct', applications: 15, shortlisted: 20, rejected: 25 },
  { month: 'Nov', applications: 40, shortlisted: 30, rejected: 10 },
  { month: 'Dec', applications: 30, shortlisted: 40, rejected: 10 },
].map(item => {
  const total = item.applications + item.shortlisted + item.rejected;
  return {
    ...item,
    applications: (item.applications / 100) * 100,
    shortlisted: (item.shortlisted / 100) * 100,
    rejected: (item.rejected / 100) * 100,
    total
  };
});

interface CustomBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  applications: number;
  shortlisted: number;
  rejected: number;
  total: number;
  showApplications: boolean;
  showShortlisted: boolean;
  showRejected: boolean;
}

const CustomBar: React.FC<CustomBarProps> = (props) => {
  const { x, y, width, height, applications, shortlisted, rejected, total, showApplications, showShortlisted, showRejected } = props;
  const spacing = 3;

  return (
    <g>
      {showRejected && rejected > 0 && (
        <rect 
          x={x + 0.5} 
          y={y}
          width={width - 1} 
          height={(height * rejected / total) - spacing}
          fill="#FF5630"
          rx={(width - 1 ) / 2}
        />
      )}
      {showShortlisted && shortlisted > 0 && (
        <rect 
          x={x + 0.5} 
          y={y + height - (height * (applications + shortlisted) / total)} 
          width={width - 1} 
          height={(height * shortlisted / total) - spacing} 
          fill="#FFA600"
          rx={(width - 1 ) / 2}
        />
      )}
      {showApplications && applications > 0 && (
        <rect 
          x={x + 0.5} 
          y={y + height - (height * applications / total)} 
          width={width - 1} 
          height={(height * applications / total) - spacing} 
          fill="#56CCF2"
          rx={(width - 1 ) / 2}
        />
      )}
    </g>
  );
};

export const Chart = () => {
  const [showApplications, setShowApplications] = useState(true);
  const [showShortlisted, setShowShortlisted] = useState(true);
  const [showRejected, setShowRejected] = useState(true);

  return (
    <Card className="w-full h-[22rem] grid grid-rows-[auto_1fr] bg-white text-xs border-none shadow-none"> 
      <CardHeader className="flex flex-col p-0 m-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-semibold">
            Statistics of Active Applications
          </CardTitle>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="applications"
                checked={showApplications}
                onCheckedChange={setShowApplications}
                className="data-[state=checked]:bg-[#56CCF2] data-[state=unchecked]:bg-gray-200 h-5 w-9 [&>span]:data-[state=checked]:translate-x-4 [&>span]:h-4 [&>span]:w-4"
              />
              <label htmlFor="applications" className="text-xs">Applications</label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="shortlisted"
                checked={showShortlisted}
                onCheckedChange={setShowShortlisted}
                className="data-[state=checked]:bg-[#FFA600] data-[state=unchecked]:bg-gray-200 h-5 w-9 [&>span]:data-[state=checked]:translate-x-4 [&>span]:h-4 [&>span]:w-4"
              />
              <label htmlFor="shortlisted" className="text-xs">Shortlisted</label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="rejected"
                checked={showRejected}
                onCheckedChange={setShowRejected}
                className="data-[state=checked]:bg-[#FF5630] data-[state=unchecked]:bg-gray-200 h-5 w-9 [&>span]:data-[state=checked]:translate-x-4 [&>span]:h-4 [&>span]:w-4"
              />
              <label htmlFor="rejected" className="text-xs">Rejected</label>
            </div>
            <Select defaultValue="month">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="day">Day</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0} barCategoryGap={60} margin={{ top: 10, right: 0, left: -15, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke='#f7f8fa' />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              domain={[0, 100]} 
              ticks={[0, 20, 40, 60, 80, 100]}
              unit="%"
            />
            <Tooltip />
            <Bar dataKey="total" fill="#56CCF2" barSize={6} shape={(props: any) => (
              <CustomBar
                applications={props.applications}
                shortlisted={props.shortlisted}
                rejected={props.rejected}
                total={props.total}
                showApplications={showApplications}
                showShortlisted={showShortlisted}
                showRejected={showRejected}
                {...props}
              />
            )}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;