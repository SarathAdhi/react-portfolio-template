type Props = {
  skills: SkillType[];
};

const SkillsSection = ({ skills }: Props) => {
  return (
    <section id="skills" className="overflow-hidden relative">
      <div className="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <h3 className="text-4xl text-white font-display flex flex-wrap gap-x-2">
            Skills
            <span className="md:block text-primary-400">Snapshot</span>
          </h3>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-2 order-y py-6 mt-12 border-primary-800 md:grid-cols-4 gap-8">
          {skills.map(({ name, image }) => (
            <li key={name} className="flex items-center gap-2">
              <img className="w-6 h-6" src={image} alt={name} />

              <p className="text-base text-primary-300">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
