import siteConfig from "@/site.config.json";
import SquarePatterns from "@components/SquarePatterns";
import { Button } from "@components/ui/button";
import Link from "next/link";

const LandingSection = ({ resumeUrl = "" }) => {
  return (
    <section
      id="about"
      className="h-screen relative overflow-hidden grid place-content-center"
    >
      <SquarePatterns />

      <div className="px-8 py-24 text-center mx-auto max-w-7xl relative space-y-4">
        <div className="space-y-2">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="text-white font-display"
          >
            Hi 👋, I'm {siteConfig.name}
          </h1>

          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="md:block text-primary-400 font-display"
          >
            {siteConfig.role}
          </h1>
        </div>

        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="text-primary-100 mt-4"
        >
          {siteConfig.description}
        </p>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Button size="lg" variant="outline" asChild>
            <Link href={resumeUrl} target="_blank">
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
