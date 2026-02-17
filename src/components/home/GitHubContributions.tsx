"use client";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
}

interface ContributionStats {
  total: number;
  maxStreak: number;
  currentStreak: number;
  mostActiveMonth: string;
}

const parseContributionData = (html: string): ContributionDay[] => {
  const contributions: ContributionDay[] = [];
  
  // Match data-date and data-count attributes
  const regex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-count="(\d+)"/g;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    contributions.push({
      date: match[1],
      count: parseInt(match[2], 10),
    });
  }
  
  return contributions;
};

const calculateStats = (contributions: ContributionDay[]): ContributionStats => {
  let total = 0;
  let maxStreak = 0;
  let currentStreak = 0;
  let streak = 0;
  const monthCounts: { [key: string]: number } = {};

  contributions.forEach((day) => {
    total += day.count;
    
    if (day.count > 0) {
      streak++;
      currentStreak = streak;
    } else {
      if (streak > maxStreak) maxStreak = streak;
      streak = 0;
    }
    
    const [year, month] = day.date.split("-");
    const monthKey = `${year}-${month}`;
    monthCounts[monthKey] = (monthCounts[monthKey] || 0) + day.count;
  });

  if (streak > maxStreak) maxStreak = streak;

  const mostActiveMonth = Object.entries(monthCounts).reduce(
    (a, b) => (a[1] > b[1] ? a : b),
    ["", 0]
  )[0];

  return {
    total,
    maxStreak: maxStreak || 0,
    currentStreak: currentStreak || 0,
    mostActiveMonth: mostActiveMonth || "N/A",
  };
};

const getIntensityColor = (count: number, maxCount: number) => {
  if (count === 0) return "bg-gray-100";
  const intensity = count / maxCount;
  
  if (intensity >= 0.75) return "bg-teal-600";
  if (intensity >= 0.5) return "bg-teal-400";
  if (intensity >= 0.25) return "bg-teal-200";
  return "bg-teal-100";
};

export const GitHubContributions = ({ username = "Prateek32177" }) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [stats, setStats] = useState<ContributionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github.com/${username}`);
        const html = await response.text();
        
        // Parse contribution data from SVG
        const contributionData = parseContributionData(html);
        
        if (contributionData.length === 0) {
          setError(true);
          return;
        }

        setContributions(contributionData);
        setStats(calculateStats(contributionData));
      } catch (err) {
        console.log("[v0] Error fetching contributions:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-20 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !contributions.length) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <Github size={20} className="mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600">
          Unable to load contribution graph. Visit{" "}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            GitHub profile
          </a>
        </p>
      </div>
    );
  }

  // Get last 52 weeks (364 days)
  const recentContributions = contributions.slice(-364);
  const maxCount = Math.max(...recentContributions.map((d) => d.count), 1);
  
  // Group by weeks
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < recentContributions.length; i += 7) {
    weeks.push(recentContributions.slice(i, i + 7));
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Github size={16} className="text-teal-600" />
          Contribution Graph
        </h3>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-4">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-gray-600 mb-1">Total Contributions</div>
            <div className="text-lg font-semibold text-teal-600">{stats.total}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-gray-600 mb-1">Max Streak</div>
            <div className="text-lg font-semibold text-teal-600">{stats.maxStreak} days</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-gray-600 mb-1">Current Streak</div>
            <div className="text-lg font-semibold text-teal-600">{stats.currentStreak} days</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="text-gray-600 mb-1">Most Active</div>
            <div className="text-lg font-semibold text-teal-600">{stats.mostActiveMonth}</div>
          </div>
        </div>
      )}

      {/* Contribution Graph */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-1 min-w-max">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((day, dayIdx) => (
                <div
                  key={`${weekIdx}-${dayIdx}`}
                  className={`w-3 h-3 rounded-sm ${getIntensityColor(
                    day.count,
                    maxCount
                  )} cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-teal-400 hover:scale-110 group relative`}
                  title={`${day.count} contributions on ${day.date}`}
                >
                  <div className="invisible group-hover:visible absolute -top-8 -left-4 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10 pointer-events-none">
                    {day.count} on {day.date}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
          <div className="w-3 h-3 bg-teal-100 rounded-sm"></div>
          <div className="w-3 h-3 bg-teal-200 rounded-sm"></div>
          <div className="w-3 h-3 bg-teal-400 rounded-sm"></div>
          <div className="w-3 h-3 bg-teal-600 rounded-sm"></div>
        </div>
        <span>More</span>
      </div>

      {/* Link to GitHub */}
      <div className="pt-2 border-t border-gray-200">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-1 transition-colors"
        >
          View full profile
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
