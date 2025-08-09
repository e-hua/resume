import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <span> NUS Y2 CS undergraduate</span>
            <h1 className="mt-4 mb-4">
              Hi ! I'm <br /> <span className="text-accent"> Chen Guanhua</span>
            </h1>
            <p className="mb-4">
              Currently specializing in Software Engineering, with a strong
              academic track record and hands-on project experience.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Button variant="outline" size="lg">
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <span>
                {" "}
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
