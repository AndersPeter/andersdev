type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <a
      href={link}
      className="block rounded-2xl border border-white/8 bg-white/3 p-5 hover:border-indigo-500/40 hover:bg-white/5 transition-all"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-white/50 mt-2 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
