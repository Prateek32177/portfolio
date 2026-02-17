'use client';

import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface GitHubStats {
  totalContributions: number;
  longestStreak: number;
  currentStreak: number;
  mostActiveDay: string;
}

export function GitHubContributions({ username }: { username: string }) {
  const [contributions, setContributions] = useState<ContributionData[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Fetch GitHub user profile page and parse contributions
        const response = await fetch(`https://github.com/Prateek32177`);
        console.log("resposnse",response)
        if (!response.ok) throw new Error('Failed to fetch GitHub profile');
        
        const html = await response.text();
        
        // Parse the SVG data from the contribution graph
        const svgMatch = html.match(/<svg[^>]*data-view-component="true"[^>]*>[\s\S]*?<\/svg>/);
        if (!svgMatch) throw new Error('Could not find contribution data');
        
        const svg = svgMatch[0];
        
        // Extract all rect elements (each represents a day)
        const rects = svg.match(/<rect[^>]*>/g) || [];
        
        const parsedData: ContributionData[] = [];
        let totalCount = 0;
        let maxCount = 0;
        const dayCounts: Map<string, number> = new Map();
        
        rects.forEach((rect) => {
          const dataDateMatch = rect.match(/data-date="([^"]+)"/);
          const dataCountMatch = rect.match(/data-count="(\d+)"/);
          const dataLevelMatch = rect.match(/data-level="(\d+)"/);
          
          if (dataDateMatch && dataCountMatch !== null) {
            const date = dataDateMatch[1];
            const count = parseInt(dataCountMatch[1]);
            const level = dataLevelMatch ? parseInt(dataLevelMatch[1]) : 0;
            
            parsedData.push({ date, count, level });
            totalCount += count;
            maxCount = Math.max(maxCount, count);
            
            const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
            dayCounts.set(day, (dayCounts.get(day) || 0) + count);
          }
        });
        
        // Calculate stats
        let longestStreak = 0;
        let currentStreak = 0;
        let tempStreak = 0;
        
        for (let i = 0; i < parsedData.length; i++) {
          if (parsedData[i].count > 0) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
          } else {
            tempStreak = 0;
          }
        }
        
        // Current streak (from the end)
        for (let i = parsedData.length - 1; i >= 0; i--) {
          if (parsedData[i].count > 0) {
            currentStreak++;
          } else {
            break;
          }
        }
        
        const mostActiveDay = Array.from(dayCounts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
        
        setContributions(parsedData);
        setStats({
          totalContributions: totalCount,
          longestStreak,
          currentStreak,
          mostActiveDay,
        });
        setLoading(false);
      } catch (err) {
        console.error('[v0] Error fetching GitHub contributions:', err);
        setError(err instanceof Error ? err.message : 'Failed to load contributions');
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="flex items-center gap-2 mb-4">
          <Github size={20} className="text-teal-600" />
          <h3 className="text-lg font-semibold">GitHub Contributions</h3>
        </div>
        <div className="h-32 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm text-red-700">Unable to load contributions: {error}</p>
      </div>
    );
  }

  // Group contributions by week
  const weeks: ContributionData[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const getColor = (level: number) => {
    const colors = [
      'bg-gray-100',
      'bg-teal-200',
      'bg-teal-400',
      'bg-teal-600',
      'bg-teal-800',
    ];
    return colors[Math.min(level, 4)];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Github size={20} className="text-teal-600" />
        <h3 className="text-lg font-semibold">GitHub Contributions</h3>
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
            <p className="text-xs text-teal-600 font-medium">Total Contributions</p>
            <p className="text-2xl font-bold text-teal-900">{stats.totalContributions.toLocaleString()}</p>
          </div>
          <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
            <p className="text-xs text-teal-600 font-medium">Current Streak</p>
            <p className="text-2xl font-bold text-teal-900">{stats.currentStreak} days</p>
          </div>
          <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
            <p className="text-xs text-teal-600 font-medium">Longest Streak</p>
            <p className="text-2xl font-bold text-teal-900">{stats.longestStreak} days</p>
          </div>
          <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
            <p className="text-xs text-teal-600 font-medium">Most Active</p>
            <p className="text-lg font-bold text-teal-900">{stats.mostActiveDay}</p>
          </div>
        </div>
      )}

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1 min-w-min">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${getColor(day.level)} border border-gray-300 cursor-pointer transition-all hover:ring-1 hover:ring-teal-400`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
              {/* Fill empty spaces for weeks with less than 7 days */}
              {week.length < 7 &&
                Array(7 - week.length)
                  .fill(0)
                  .map((_, i) => (
                    <div key={`empty-${i}`} className="w-3 h-3" />
                  ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getColor(level)} border border-gray-300`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">More</span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}
