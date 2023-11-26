import { getStack } from "@/lib";

const Stack = async () => {
  const stack = await getStack();
  return (
    <section className='flex flex-col gap-10 py-10'>
      <h2 className='heading_2'>Stack</h2>
      <div className='flex justify-start items-center gap-5 flex-wrap'>
        {stack.map((s: { id: string | number; name: string }) => (
          <span
            className='md:text-base text-xs inline-flex shrink-0 uppercase border border-secondary pt-2 pb-1.5 px-4 rounded tracking-widest'
            key={s?.id}
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Stack;
