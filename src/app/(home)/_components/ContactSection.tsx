import siteConfig from "@/site.config.json";
import { Button } from "@components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
        <div className="text-center lg:mx-auto">
          <h2 className="text-4xl lg:text-6xl text-white font-display">
            Get In Touch
          </h2>

          <p className="mt-5 text-primary-300 lg:text-xl text-center">
            My inbox is always open. Whether you have a question or just want to
            say hello, I&apos;ll get back to you! Feel free to mail me about any
            relevant job updates.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-12 justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href={`mailto:${siteConfig.links.mail}`} target="_blank">
              Drop me a digital pigeon!
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          <a
            className="duration-200 hover:opacity-80"
            href={siteConfig.links.linkedin}
            target="_blank"
          >
            <Linkedin />
          </a>

          <a
            className="duration-200 hover:opacity-80"
            href={siteConfig.links.github}
            target="_blank"
          >
            <Github />
          </a>

          <a
            className="duration-200 hover:opacity-80"
            href={siteConfig.links.twitter}
            target="_blank"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
