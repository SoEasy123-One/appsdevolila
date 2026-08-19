import { NavLink } from "react-router";
import { Code2, FileCode2, Atom, Layers, Braces, GitBranch, Wind } from "lucide-react";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

const quickFacts = [
  { label: "Location", value: "Cebu City, Philippines" },
  { label: "Education", value: "BS Information Technology" },
  { label: "Focus", value: "Frontend Development" },
];

const skills = [
  { name: "HTML & CSS", level: "Intermediate", rating: 4, icon: Code2 },
  { name: "JavaScript", level: "Learning", rating: 3, icon: Braces },
  { name: "React", level: "Learning", rating: 3, icon: Atom },
  { name: "Next.js", level: "Learning", rating: 2, icon: Layers },
  { name: "TypeScript", level: "Learning", rating: 3, icon: FileCode2 },
  { name: "Git & GitHub", level: "Intermediate", rating: 4, icon: GitBranch },
  { name: "Tailwind CSS", level: "Intermediate", rating: 4, icon: Wind },
];

export function CardDataSection() {
  return (
    <Section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* About Me */}
        <div className="rounded-2xl border border-gray-200 p-8 md:p-10 mb-20">
          <span className="inline-block px-4 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-semibold tracking-widest text-orange-600 mb-4">
            ABOUT ME
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
           Turning Ideas Into Working Websites
          </h2>

          <p className="text-gray-500 mb-10">
            A little more about who I am and what drives me as a developer.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: description + CTA */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                I create modern, responsive, and user-friendly websites using
                React, Tailwind CSS, and modern web technologies. I focus on
                building clean designs and smooth, accessible user experiences
                while continuously learning new tools and best practices.
              </p>

              <NavLink to="/about">
                <Button className="h-11 px-7 bg-orange-600 text-white hover:bg-orange-700 rounded-full">
                  Learn More About Me
                </Button>
              </NavLink>
            </div>

            {/* Right: Quick Facts card */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-sm text-gray-500">{fact.label}</p>
                    <p className="font-semibold text-gray-900">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="rounded-2xl border border-gray-200 p-8 md:p-10">
          <div className="mb-12 border-l-4 border-orange-500 pl-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Skills & Tools
            </h2>
            <p className="text-gray-500 mt-2">
              A quick look at what I bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group rounded-2xl p-5 bg-gray-50 hover:bg-orange-50 transition-colors"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{skill.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{skill.level}</p>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.rating ? "bg-orange-500" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}