import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sm text-white/40 hover:text-white/70 transition-colors mb-8 inline-block"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-white/50 mb-10">A selection of things I&apos;ve built.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
