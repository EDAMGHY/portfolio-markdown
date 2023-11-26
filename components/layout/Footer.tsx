import Link from "next/link";
import { Icon } from "@/ui";
import { Toolbox } from "@/layout";

const Footer = () => {
  return (
    <footer className='w-full flex md:flex-row flex-col justify-between items-center gap-6 py-8'>
      <p className='text-center md:text-base text-lg'>
        ©{new Date().getFullYear()} - <span>ABDELLAH DAMRI</span>
      </p>

      <Toolbox />
      <Link
        className='inline-flex items-center justify-center gap-3 text-lg tracking-wider hover:underline underline-offset-4'
        href='#header'
      >
        <span className='inline-block mt-0.5'>Back to top</span>
        <Icon id='arrow-up' className='w-5 h-5' />
      </Link>
    </footer>
  );
};

export default Footer;
