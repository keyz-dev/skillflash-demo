import type { Expert, Skill } from "@/lib/types";

type ExpertAboutTabProps = {
  expert: Expert;
  skills: Skill[];
};

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function ExpertAboutTab({ expert, skills }: ExpertAboutTabProps) {
  const skillNames = expert.skills.map((id) => getSkillName(id, skills));

  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-h4 text-foreground">
          Hi 👋 ich bin {expert.name}..
        </h2>
        <p className="mt-4 font-body text-body-lg text-foreground/80">
          {expert.bio}
        </p>
      </section>

      <section>
        <h3 className="font-heading text-h5 text-foreground">
          Das sind meine Skills..
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skillNames.map((name) => (
            <span
              key={name}
              className="rounded-full border-2 border-neutral-black bg-background px-4 py-2 font-body text-p font-bold text-neutral-black shadow-skill-tag"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-heading text-h5 text-foreground">
          Persönlich beschreibe ich mich so..
        </h3>
        <p className="mt-4 font-body text-body-lg text-foreground/80 leading-relaxed">
          {expert.bio} {expert.bio}
        </p>
      </section>
    </div>
  );
}
