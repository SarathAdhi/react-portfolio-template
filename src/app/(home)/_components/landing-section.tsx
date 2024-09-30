import { Button } from "@components/ui/button";
import Link from "next/link";

const LandingSection = ({ resumeUrl = "" }) => {
  return (
    <section
      id="about"
      className="h-screen relative overflow-hidden grid place-content-center"
    >
      <div className="-z-10 absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="-z-10 absolute inset-x-0 bottom-0 h-96 rotate-0 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="px-8 py-24 mx-auto max-w-7xl relative">
        <div className="text-center mx-auto">
          <div className="text-white font-display space-y-2">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              Hii 👋, I'm Rishikeshav Ravichandran
            </h1>

            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:block text-primary-400"
            >
              Backend Developer
            </h1>
          </div>

          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="text-primary-300 mt-4"
          >
            Crafting Scalable Solutions, Fueled by Passion.
          </p>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Button size="lg" variant="outline" className="mt-12" asChild>
              <Link href={resumeUrl} target="_blank">
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
