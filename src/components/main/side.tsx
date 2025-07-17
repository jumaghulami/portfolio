"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

// Type definitions
type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

type SkillItem = {
  name: string;
  level: number;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

// Data
const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    duration: "2020 - Present",
    description:
      "Led development of microservices architecture, improving system performance by 40%.",
  },
  {
    title: "Software Engineer",
    company: "Innovation Labs",
    duration: "2017 - 2020",
    description:
      "Architected cloud-native applications and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    duration: "2015 - 2017",
    description: "Built scalable web applications using React and Node.js.",
  },
];

const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 70 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 90 },
      { name: "AWS", level: 80 },
    ],
  },
];

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const [progressValues, setProgressValues] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    setIsMounted(true);

    // Set initial values to 0
    const initialValues: Record<string, number> = {};
    skills.forEach((category) => {
      category.items.forEach((skill) => {
        initialValues[skill.name] = 0;
      });
    });
    setProgressValues(initialValues);

    // Animate to actual values after a short delay
    const animationTimer = setTimeout(() => {
      const targetValues: Record<string, number> = {};
      skills.forEach((category) => {
        category.items.forEach((skill) => {
          targetValues[skill.name] = skill.level;
        });
      });
      setProgressValues(targetValues);
    }, 300);

    return () => clearTimeout(animationTimer);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen p-4 space-y-10 md:p-8">
      {/* Skills Section */}
      <div className="">
        <div className="h-full p-6 border border-gray-100 shadow-sm rounded-xl dark:border-gray-700">
          <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            Core Skills
          </h1>
          <hr className="mb-6 border-gray-200 dark:border-gray-700" />
          <div className="space-y-6">
            {skills.map((category, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {progressValues[skill.name]}%
                        </span>
                      </div>
                      <Progress
                        value={progressValues[skill.name]}
                        className="h-2 transition-all duration-1000 ease-out"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="">
        <div className="p-6 border border-gray-300 shadow-sm rounded-xl dark:border-gray-700">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company} •{" "}
                  <span className="text-gray-500 dark:text-gray-500">
                    {exp.duration}
                  </span>
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
