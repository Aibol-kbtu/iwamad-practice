import { SkillBadge } from '../components/SkillBadge';
import { skills } from '../data/skills';

export const SkillsPage = () => {
  return (
    <div>
      <h2>My Profile Page</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};