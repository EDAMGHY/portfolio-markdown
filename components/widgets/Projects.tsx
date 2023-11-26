import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/ui";
import { getProjects } from "@/lib";

interface IProject {
  id: number | string;
  title: string;
  url: string;
  image: string;
  content: string;
  tags: string[];
}

const ProjectItem = ({ title, image, url, tags = [] }: IProject) => {
  return (
    <div className='group flex flex-col sm:flex-row items-start md:items-center gap-6'>
      {url ? (
        <Link href={url} className='md:block hidden' target='_blank'>
          <div className='shrink-0 relative aspect-square w-[150px] overflow-hidden rounded-xl'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover w-full h-full group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 ease-out group-hover:rotate-3'
            />
          </div>
        </Link>
      ) : (
        <div className='shrink-0 relative aspect-square w-[150px] overflow-hidden rounded-xl'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover w-full h-full group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 ease-out group-hover:rotate-3'
          />
        </div>
      )}

      <div className='overflow-hidden relative py-5 w-full flex flex-col justify-center items-start gap-4 px-5 md:bg-transparent bg-[rgba(0,0,0,0.6)] md:px-2 rounded-xl'>
        <Image
          src={image}
          alt={title}
          fill
          className='md:hidden block absolute w-full h-full -z-[1] object-cover rounded-xl'
        />
        <h3 className='text-xl font-medium tracking-wider line-clamp-2'>
          {title}
        </h3>

        <div className='flex gap-4 items-center flex-wrap'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block text-xs rounded uppercase font-bold bg-secondary text-primary pt-2 pb-1.5 px-4 tracking-[3px]'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='-translate-x-full group-hover:translate-x-0 transition-transform duration-500 w-full flex gap-4 items-center justify-start'>
          <Link
            href={url}
            target='_blank'
            className='shrink-0 inline-flex gap-3 items-center justify-center border border-secondary p-2 rounded bg-secondary  hover:bg-transparent text-primary hover:text-secondary transition-colors duration-500 ease-in-out'
          >
            <Icon id='github' className='w-5 h-5' />
          </Link>
          <Link
            href={url}
            target='_blank'
            className='shrink-0 inline-flex gap-3 items-center justify-center border border-secondary p-2 rounded hover:bg-secondary hover:text-primary transition-colors duration-500 ease-in-out'
          >
            <Icon id='link2' className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = async () => {
  const projects: IProject[] = await getProjects();
  return (
    <section className='flex flex-col gap-10 py-10'>
      <h2 className='heading_2'>Work</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        {projects.map((project, index) => (
          <ProjectItem key={project?.id || index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
