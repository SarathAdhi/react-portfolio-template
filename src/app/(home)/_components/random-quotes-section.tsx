const RandomQuotesSection = async () => {
  let randomQuotes;

  try {
    randomQuotes = await (await fetch("https://api.quotable.io/random")).json();
  } catch (error) {}

  if (!randomQuotes) return <></>;

  return (
    <section className="overflow-hidden relative">
      <div className="px-8 py-12 mx-auto md:px-12 lg:py-24 lg:px-36 max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center ring-1 ring-primary-800 border bg-gradient-to-tr from-primary-950 to-primary-700 border-primary-800 shadow-big h-full lg:col-span-full lg:p-20 p-8 rounded-3xl relative "
        >
          <h4 className="lg:text-3xl text-white font-display">
            {randomQuotes?.content}
          </h4>

          <p className="text-primary-300 text-xl mt-6 italic uppercase">
            {randomQuotes?.author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RandomQuotesSection;
