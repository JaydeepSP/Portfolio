import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "text-xl sm:text-3xl md:text-[64px] font-bold mb-8 uppercase tracking-wider text-gray-400 dark:text-white",
        className,
      )}
    >
      {title}
    </h2>
  );
}
