"use client";

import { ArrowLeft, Coffee, Lightbulb, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const thoughts = [
  {
    id: 1,
    date: "July 9, 2025",
    type: "failure",
    badge: "Failure",
    content:
      "Spent 3 hours adding animations nobody asked for. Got so caught up in making things 'perfect' that I forgot the whole point was to showcase my work, not my ability to make things bounce.",
    icon: Heart, // Changed from AlertTriangle to Heart for more human feel
    color: "red",
  },
  {
    id: 2,
    date: "July 8, 2025",
    type: "idea",
    badge: "Idea",
    content:
      "Maybe good design isn't about showing everything at once. It's about creating space for the important things to breathe. Sometimes the best feature is the one you don't build.",
    icon: Lightbulb,
    color: "teal",
  },
  {
    id: 3,
    date: "Aug 7, 2025",
    type: "failure",
    badge: "Failure",
    content:
      "Built a feature without any onboarding. Thought it was 'intuitive.' Watched 3 users struggle with it in testing. Nothing is as obvious as it seems to the person who built it.",
    icon: Heart, // Changed from AlertTriangle to Heart for more human feel
    color: "red",
  },
  {
    id: 4,
    date: "Aug 6, 2025",
    type: "reflection",
    badge: "Reflection",
    content:
      "There's something liberating about sharing work before it's 'perfect.' Feedback early in the process is worth more than perfection at the end.",
    icon: Coffee,
    color: "purple",
  },
  {
    id: 5,
    date: "Aug 4, 2025",
    type: "note",
    badge: "Note",
    content:
      "Working within constraints often leads to more creative solutions than having unlimited options. Constraints aren't limitations—they're creative catalysts.",
    icon: Sparkles,
    color: "blue",
  },
  {
    id: 6,
    date: "Aug 2, 2025",
    type: "reflection",
    badge: "Reflection",
    content:
      "Trust your ideas, trust your instincts, trust the process. Sometimes the only way forward is to take that leap.",
    icon: Coffee,
    color: "purple",
  },
];

export default function ThoughtsPage() {
  const [visibleThoughts, setVisibleThoughts] = useState(4);

  const loadMore = () => {
    setVisibleThoughts((prev) => Math.min(prev + 4, thoughts.length));
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-2xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">back</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <span className="text-sm text-gray-500">thoughts</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-8 py-8">
        {/* Simple Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-serif text-gray-900 mb-2">
            Quick Thoughts
          </h1>
          <p className="text-gray-600 text-sm">
            Personal reflections and daily learnings
          </p>
        </div>

        {/* Thoughts Feed */}
        <div className="space-y-6">
          {thoughts.slice(0, visibleThoughts).map((thought) => {
            return (
              <article key={thought.id} className="group">
                <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                  <div>
                    <time className="text-xs text-gray-500 text-center">
                      {thought.date}
                    </time>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed text-[15px]">
                      {thought.content}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More */}
        {visibleThoughts < thoughts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-b border-dotted border-gray-400 hover:border-gray-600"
            >
              load more thoughts
            </button>
          </div>
        )}

        {/* Personal Note */}
        <div className="mt-16 p-6 bg-white/60 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            These are unfiltered thoughts from my daily life and work.
            They&lsquo;re personal reflections, not polished insights. The
            failures are just as important as the successes.
          </p>
        </div>
      </main>
    </div>
  );
}
