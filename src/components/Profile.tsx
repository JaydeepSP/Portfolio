import profile from "../assets/avatar.png";
import { SOCIAL_LINKS } from "../utils/constant";
import String from "./String";

export function Profile() {
  return (
    <section className="flex flex-col items-start gap-6">
      <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl hover:backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="w-24 h-24 rounded-xl bg-gray-200 overflow-hidden shadow-sm transition-all duration-300 ease-in-out group-hover:backdrop">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-[25px] leading-[37.5px] font-medium text-text-primary-light dark:text-text-primary-dark tracking-[-0.5px]">
          Hey, I'm Jaydeep Prajapati.
        </h1>
        <p className="text-[20px] leading-[30px] font-medium text-text-primary-light/60 dark:text-text-primary-dark/60 tracking-[-0.4px] max-w-lg">
          I'm a Web Developer.
        </p>
        <div className="flex gap-2 relative z-50">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <SocialLink key={href} href={href} icon={<Icon size={20} />} />
          ))}
        </div>
      </div>
      <String />
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      className="p-2.5 text-text-primary-light dark:text-text-primary-dark bg-white dark:bg-card-bg-dark border border-gray-100 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}
