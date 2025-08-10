"use client";

import { FaJs, FaJava, FaHtml5, FaCss3, FaGit, FaDocker } from "react-icons/fa";
import {
  SiC,
  SiLua,
  SiVite,
  SiNextdotjs,
  SiSpringboot,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
import { li } from "framer-motion/client";
import { TooltipProvider, Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

const education = {
  title: "My Education",
  items: [
    {
      description: "National University of Singapore, Year 2 Computer Science",
      GPA: "GPA: 5.0 / 5.0",
      Degree: "Bachelor of Computing in Computer Science (With Honours)",
      Duration: "Aug 2024 - Present",
    },
    {
      description: "Harbin No.9 Middle School",
      Degree: "Valedictorian",
      Honours:
        "Top 0.1% (Nationwide Unified Examination for Admissions to General Universities and Colleges) ",
      Duration: "Aug 2021 - Aug 2024",
    },
  ],
};

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <SiC /> },
      { name: "Lua", icon: <SiLua /> },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Vite", icon: <SiVite /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGit /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
];

export default function resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center py-2 md:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto md:mx-0 gap-6">
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="projects"> Projects </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title} </h3>

                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] py-6 px-10 rounded-xl 
                          flex flex-col justify-center 
                          items-center md:items-start gap-1"
                        >
                          <h3 className="text-accent"> {item.description} </h3>
                          <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                            {" "}
                            {item.Degree}
                          </p>
                          <span className="text-white/60">
                            {" "}
                            {item.Duration}{" "}
                          </span>
                          <h3> {item.GPA ?? ""} </h3>
                          <span> {item.Honours ?? ""} </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <h3 className="text-4xl font-bold text-center md:text-left">
                My Skills{" "}
              </h3>
              <div className="flex flex-col gap-[30px]">
                <ul>
                  {skills.map((skill, idx) => {
                    return (
                      <div key={idx} className="flex flex-col gap-[10px] mt-10">
                        {skill.category}
                        <div
                          key={idx}
                          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
                        >
                          {skill.items.map((item, index) => {
                            return (
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="bg-[#232329] w-full h-[125px] rounded-xl flex justify-center items-center group">
                                      <div className="justify-center text-6xl group-hover:text-accent transition-all duration-300 ">
                                        {" "}
                                        {item.icon}{" "}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{item.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="w-full">
              projects
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
