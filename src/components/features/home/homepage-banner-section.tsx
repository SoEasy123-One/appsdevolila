import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import profileImage from "@/assets/image.jpg";

const skills = ["React", "TypeScript", "Tailwind", "Next.js"];

export function HomePageBannerSection() {
  return (
    <Section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

          {/* Right Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="w-72 h-72 md:w-[420px] md:h-[420px] overflow-hidden rounded-[50%] border-2 border-orange-500 shadow-[0_20px_50px_rgba(249,115,22,0.35)]">
              <img
                src={profileImage}
                alt="Paul Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-5 order-2 md:order-1">

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              Hi, I'm{" "}
              <span className="text-orange-600">
                Paul
              </span>
              <br />
              a Frontend Developer
            </h1>

            <p className="max-w-xl text-sm md:text-base leading-relaxed text-gray-600">
              I create modern, responsive, and user-friendly websites using
              React, Tailwind CSS, and modern web technologies. I focus on
              creating clean designs and smooth user experiences.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-800 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <NavLink to="/contact">
                <Button className="h-11 px-7 bg-black text-white hover:bg-gray-800 rounded-md">
                  Hire Me
                </Button>
              </NavLink>

              <NavLink to="/about">
                <Button className="h-11 px-7 bg-orange-600 text-white hover:bg-orange-700 rounded-md">
                  About Me
                </Button>
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}