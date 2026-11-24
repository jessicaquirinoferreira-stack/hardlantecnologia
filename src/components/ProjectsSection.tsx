import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PROJECTS, type ProjectCase, type ProjectCategory } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

const CATEGORIES: ProjectCategory[] = [
  'Todos',
  'Redes & Wi-Fi',
  'Servidores & VM',
  'Cybersegurança',
  'Hardware',
];

interface ProjectsSectionProps {
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export function ProjectsSection({ onRequestQuoteForProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  return (
    <section
      id="projetos"
      className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0D14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#007BFF] dark:text-[#00D4FF] mb-3">
              Projetos e Cases Reais
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white [text-wrap:balance]">
              Execução técnica comprovada em campo
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Racks estruturados, clusters de virtualização, segurança perimetral e hardware de alto desempenho entregues em São José do Rio Preto e região.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filtrar projetos por especialidade"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] p-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] ${
                    isActive
                      ? 'bg-white dark:bg-[#007BFF] text-slate-950 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#11131C] transition-colors duration-200 hover:border-[#007BFF]/45 dark:hover:border-[#00D4FF]/45"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0C12]">
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/85 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-mono text-[#00D4FF] tabular-nums">
                    {project.outcomeMetric}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Clean unboxed metadata (Zero-Pill discipline) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className={project.featured ? 'text-[#007BFF] dark:text-[#00D4FF] font-semibold' : ''}>
                      {project.client}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#007BFF] dark:text-[#00D4FF] hover:underline underline-offset-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded px-1 -ml-1 whitespace-nowrap"
                  >
                    Ver detalhes técnicos
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#10121B] shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full bg-[#0A0C12]">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fechar detalhes do projeto"
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/65 text-white backdrop-blur-md hover:bg-black/85 transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-[#007BFF] dark:text-[#00D4FF] font-semibold">
                    {selectedProject.client}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{selectedProject.year}</span>
                </div>

                <h3
                  id="project-modal-title"
                  className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedProject.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-200 dark:border-white/10 pt-4">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#007BFF] dark:text-[#00D4FF]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-5">
                  <span className="text-xs font-mono text-[#007BFF] dark:text-[#00D4FF]">
                    {selectedProject.outcomeMetric}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onRequestQuoteForProject(title);
                    }}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00B4E6] px-5 py-2 text-sm font-semibold text-white hover:brightness-110 transition-all cursor-pointer"
                  >
                    Quero um projeto similar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
