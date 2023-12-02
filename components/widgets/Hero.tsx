const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col gap-4 items-start justify-start py-12 md:py-24'
    >
      <h1 className='text-4xl md:text-5xl lg:text-7xl leading-[1.2] font-medium'>
        &quot;Code. Create. Captivate.&quot;
      </h1>
      <p className='text-[20px] lg:text-2xl leading-[1.6] lg:leading-[40px] tracking-wide'>
        As a junior Full-Stack Developer, I embrace the power of code to create
        captivating digital experiences. With a passion for innovation and a
        keen eye for detail, I&apos;m on a mission to turn ideas into
        interactive realities. Join me on this coding adventure where each line
        is a brushstroke, and every project is a captivating masterpiece in the
        digital realm.
      </p>
      <h2
        className={
          "relative before:absolute before:content-[''] before:w-[60px] before:h-0.5 ml-[70px] before:-left-[70px] before:top-1/2 before:-translate-y-1/2 font-medium text-base uppercase tracking-widest before:bg-secondary"
        }
      >
        Abdellah DAMRI
      </h2>
    </section>
  );
};

export default Hero;
