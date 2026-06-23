export const NotFoundProject = () => (
  <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 pt-24 text-center dark:bg-navy-950">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">Project not found</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">This case study is not available.</h1>
      <a href="#projects" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
        Back to projects
      </a>
    </div>
  </main>
);
