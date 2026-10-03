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
    <div className="space-y-6">
      <section>
        <h2 className="font-heading text-h6 font-bold text-foregroun  d">
          Hi 👋 ich bin {expert.name}..
        </h2>
        <p className="mt-4 font-body text-p text-foreground">{expert.bio}</p>
      </section>

      <section>
        <h3 className="font-heading text-h6 text-foreground">
          Das sind meine Skills..
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {skillNames.map((name) => (
            <span
              key={name}
              className="rounded-full border-2 border-neutral-black bg-foreground px-4 py-2 font-body text-p font-bold text-background shadow-skill-tag"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-heading text-h6 text-foreground">
          Persönlich beschreibe ich mich so..
        </h3>
        <p className="mt-4 font-body text-p text-neutral-black leading-relaxed">
          {expert.bio} {expert.bio}
        </p>
      </section>
    </div>
  );
}
