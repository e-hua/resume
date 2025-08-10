"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Swiper as SwiperType } from "swiper/types";

const apps = [
  {
    num: "01",
    title: "CourseCompass – Web App for NUS Course Planning",
    category: "CourseCompass",
    description:
      "A full-stack course planning platform for NUS students with responsive UI, secure authentication, automated testing, and CI/CD deployment.",
    techStack: [
      { name: "React (Vite)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Google OAuth 2.0" },
      { name: "Vitest" },
      { name: "Playwright" },
      { name: "GitHub Actions" },
      { name: "Render" },
      { name: "Docker" },
    ],
    imagePath: "/assets/CourseCompass.png",
    github: "https://github.com/e-hua/CourseCompass-demo",
  },
  {
    num: "02",
    title: "My resume",
    category: "Resume",
    description:
      "An interactive, responsive online resume built with React (Next.js), TypeScript, Tailwind CSS, and Shadcn/UI, featuring clean design and smooth user experience to showcase my skills and projects.",
    techStack: [
      { name: "React (Next.js)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn/UI" },
    ],
    imagePath: "/assets/Resume.png",
    github: "https://github.com/e-hua/resume",
  },
];

export default function Projects() {
  const [app, setApp] = useState(apps[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currIdx = swiper.activeIndex;

    setApp(apps[currIdx]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-10">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-center
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* App Index */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
          text-outline"
              >
                {" "}
                {app.num}
              </div>

              {/* App category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500 capitalize"
              >
                {app.category}
              </h2>

              {/* Project description */}
              <p className="text-white/60">{app.description}</p>

              {/* Tech Stack */}
              <ScrollArea className=" rounded-md bg-[#232329] ">
                <div className="flex w-max space-x-4 p-4">
                  {app.techStack.map((item, idx) => {
                    return (
                      <li key={idx} className="text-sm text-accent">
                        {" "}
                        {item.name}{" "}
                      </li>
                    );
                  })}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              {/*  border */}
              <div className="border border-white/20"></div>

              {/*  button */}
              <div>
                <Link href={app.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full 
              bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {apps.map((app, idx) => {
                return (
                  <SwiperSlide key={idx} className="w-full">
                    <div
                      className="h-[360px] relative group 
                    flex justify-center items-center bg-primary"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={app.imagePath}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
