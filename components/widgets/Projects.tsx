import Link from "next/link";
import { Icon } from "@/ui";
import { getProjects } from "@/lib";

interface IProject {
  id: number | string;
  title: string;
  url: string;
  code: string;
  image: string;
  content: string;
  tags: string[];
}

const ProjectItem = ({ title, image, code, url, tags = [] }: IProject) => {
  return (
    <div className='group overflow-hidden relative w-full h-full flex flex-col justify-start items-start gap-4 p-6 md:p-8 rounded-xl border border-gray-700'>
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
      <div className='mt-3 w-full flex gap-4 items-center justify-start'>
        {code && (
          <Link
            href={code}
            target='_blank'
            className='shrink-0 inline-flex gap-3 items-center justify-center border border-secondary p-2 rounded bg-secondary  hover:bg-transparent text-primary hover:text-secondary transition-colors duration-500 ease-in-out'
          >
            <Icon id='github' className='w-5 h-5' />
          </Link>
        )}
        {url && (
          <Link
            href={url}
            target='_blank'
            className='shrink-0 inline-flex gap-3 items-center justify-center border border-secondary p-2 rounded hover:bg-secondary hover:text-primary transition-colors duration-500 ease-in-out'
          >
            <Icon id='link2' className='w-5 h-5' />
          </Link>
        )}
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
