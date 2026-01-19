import type { LucideIcon } from "lucide-react";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  color: string;
};

function SocialLink({ href, icon: Icon, color }: SocialLinkProps) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={`
        relative z-50 p-2.5 rounded-full bg-white dark:bg-card-bg-dark border border-gray-100 dark:border-gray-800 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all shadow-sm ${color}`}
    >
      <Icon size={20} />
    </a>
  );
}
export default SocialLink;
