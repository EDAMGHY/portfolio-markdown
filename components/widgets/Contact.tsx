import Link from "next/link";
import { Icon } from "@/ui";

const Contact = () => {
  return (
    <section className='flex flex-col gap-8 justify-center items-center py-12 md:py-24'>
      <h3 className=' font-medium text-2xl md:text-5xl text-center max-w-4xl mx-auto md:leading-[1.4] px-4'>
        I’m always happy to chat. And I read every message. So, send me a note.
      </h3>
      <Link
        href='mailto:damriabdellah@gmail.com'
        className={`inline-flex items-center justify-center gap-3 font-bold uppercase text-xs md:text-sm bg-secondary text-primary rounded-md py-2 md:py-3 px-4 md:px-6 w-fit h-fit border-secondary border-2 hover:text-secondary hover:bg-transparent transition-all duration-500 tracking-wider`}
      >
        <span className='inline-block mt-0.5'>Contact Me</span>
        <Icon id='send' className='w-5 h-5' />
      </Link>
    </section>
  );
};

export default Contact;
