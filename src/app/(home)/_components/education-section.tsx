import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";
import { EducationType } from "types/education";

type Props = {
  educationHistory: EducationType[];
};

const EducationSection = ({ educationHistory }: Props) => {
  return (
    <section id="education" className="overflow-hidden relative">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-36 max-w-7xl">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-4xl text-white font-display flex flex-wrap gap-x-2">
            Education
            <span className="md:block text-primary-500">History</span>
          </h3>
        </div>

        <div className="mt-24">
          <div className="relative flex flex-wrap">
            <div className="absolute top-8 left-0 right-0 hidden lg:block h-[1px] -z-1">
              <div
                className="h-[1px] w-full bg-secondary-300 "
                data-aos="fade-left"
                data-aos-duration="1000"
              ></div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 relative">
              {educationHistory.map(
                ({ name, description, image, start, end }, index) => (
                  <div
                    key={name + index}
                    className="w-full pb-4 border-b border-primary-800"
                  >
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay={`${index * 100 * 2}`}
                      className="flex items-center justify-center w-16 h-16 mb-5 lg:mb-16 rounded-xl border bg-gradient-to-tr from-primary-950 to-primary-700 border-primary-800 shadow-2xl "
                    >
                      <Image
                        width={500}
                        height={500}
                        className="w-full h-full rounded-xl"
                        src={urlForImage(image)}
                        alt={name}
                      />
                    </div>

                    <div>
                      <p className="mt-12 text-xl font-medium leading-6 text-white">
                        {name}
                      </p>

                      <p className="mt-4 text-base text-primary-300">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
