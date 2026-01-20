import profile from "../assets/images/avatar.png";
import { SOCIAL_LINKS } from "../utils/constant";
import SocialLink from "./SocialLink";
import { ThemeToggle } from "./ThemeToggle";

export function Profile() {
  return (
    <section className="flex flex-col items-start gap-6">
      <div className="flex gap-2 items-start justify-between w-full">
        <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl hover:backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="w-[3.75rem] h-[3.75rem] rounded-xl bg-gray-200 overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:backdrop">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <ThemeToggle />
      </div>
      <div className="space-y-4">
        <h1 className="text-[25px] leading-[37.5px] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.5px]">
          Hey, I'm Jaydeep Prajapati.
        </h1>
        <p className="text-[20px] leading-[30px] font-medium text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-[-0.4px] max-w-lg">
          I'm a Web Developer.
        </p>
        {/* Social links */}
        <div className="flex gap-2 relative z-50">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.href} {...link} />
          ))}
        </div>
      </div>
      {/* <String /> */}
    </section>
  );
}
