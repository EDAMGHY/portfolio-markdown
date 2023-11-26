import Link from "next/link";
import Toolbox from "./Toolbox";
import { Icon } from "@/ui";
import Image from "next/image";

const Header = () => {
  return (
    <header id='header' className='py-6'>
      <div className='container flex items-center justify-center gap-10'>
        {/* <div className='relative rounded-full shrink-0 w-[50px] h-[50px] md:w-[90px] md:h-[90px] overflow-hidden'>
          <Image
            src='https://source.unsplash.com/random?gaming'
            alt='me'
            fill
          />
        </div> */}

        <Link
          href={"/"}
          className={`inline-flex items-center justify-center gap-3 hover_link uppercase tracking-widest text-lg`}
        >
          <span className='inline-block mt-0.5'>My Resume</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
