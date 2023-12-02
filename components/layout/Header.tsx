import Link from "next/link";
import Toolbox from "./Toolbox";
import { Icon } from "@/ui";
import Image from "next/image";

const Header = () => {
  return (
    <header id='header' className='py-6'>
      <div className='container flex items-center justify-between gap-10'>
        <Toolbox />

        <Link
          target='_blank'
          href={"/damri-abdellah-cv.pdf"}
          className={`inline-flex items-center justify-center gap-3 hover_link uppercase tracking-widest text-lg`}
        >
          <span className='inline-block mt-0.5'>My Resume</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
