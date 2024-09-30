import data from "@/site.config.json";
import { navLinks } from "@components/navbar/navLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Link href="#about">
          <h5>{data.title}</h5>
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-slate-300 hover:text-slate-400 focus:text-slate-400 text-sm"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="block mb-4 text-sm text-center text-slate-400 md:mb-0 border-t border-slate-200 mt-4 pt-4">
        Made with {"❤️"} by&nbsp;
        <a
          href="http://sarathadhi.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Sarath Adhithya
        </a>
      </p>
    </footer>
  );
};

export default Footer;
