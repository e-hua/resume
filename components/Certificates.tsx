"use client";

import { BsArrowDownRight } from "react-icons/bs";

const credentials = [
  {
    num: "01",
    title: "Dean's List, NUS School of Computing",
    obtainedIn: "Semester 1 of AY 2024-2025",
    path: "/assets/24_25-s1.webp",
    link: "https://credentials.nus.edu.sg/80b16acc-9155-4f79-b53e-1473d420a135#acc.DCRuahnr",
  },
  {
    num: "02",
    title: "Dean's List, NUS School of Computing",
    obtainedIn: "Semester 2 of AY 2024-2025",
    path: "/assets/24_25-s2.webp",
    link: "https://credentials.nus.edu.sg/42ffb104-5400-42e8-93b2-984dafc332e1#acc.kPF2NEjV",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Certificates() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] py-12 md:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {credentials.map((credential, idx) => {
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col justify-center gap-6 group mb-5"
              >
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {" "}
                    {credential.num}
                  </div>
                  <Link
                    href={credential.link}
                    className="
                  w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                  >
                    {" "}
                    <BsArrowDownRight className="text-primary text-3xl" />{" "}
                  </Link>
                </div>

                <h3 className="text-[42px] group-hover:text-accent transition-all duration-500">
                  {" "}
                  {credential.title}{" "}
                </h3>
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="text-white/60">
                    <p>Obtained in: {credential.obtainedIn} </p>
                  </div>

                  <Image
                    src={credential.path}
                    alt="Certificate"
                    width={150}
                    height={300}
                  />
                </div>
                <div className="border-b border-white/20 w-full"> </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
