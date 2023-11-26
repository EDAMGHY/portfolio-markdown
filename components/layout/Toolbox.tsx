import Link from "next/link";
import { Icon } from "../elements";
import clsx from "clsx";
import { getSocials } from "@/lib";

const Toolbox = async () => {
  const socials = await getSocials();

  if (socials.length === 0) {
    return null;
  }

  return (
    <div className={clsx("flex gap-2 items-center justify-center")}>
      {socials.map((social, index) => (
        <Link
          key={social?.id || index}
          href={social.url || "#."}
          target='_blank'
          className={clsx(
            "inline-block transition-all duration-300 ease-in-out p-2 rounded-full hover:bg-secondary hover:text-primary"
          )}
        >
          <Icon id={social.icon} className={clsx("w-5 h-5")} />
        </Link>
      ))}
    </div>
  );
};

export default Toolbox;
