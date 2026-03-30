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
      className="block border rounded-2xl p-4 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-gray-200 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}