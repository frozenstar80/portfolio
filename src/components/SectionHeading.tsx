type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
  </div>
);
