import { type Skill, SkillBadge } from './SkillBadge';
import { LikeButton } from './LikeButton';
import { useLikes } from '../context/LikesContext';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: Skill[];
};

export const ProfileCard = ({ name, role, bio, avatarUrl, skills }: ProfileCardProps) => {
  const { likes } = useLikes();

  return (
    <div className={`profile-card ${likes > 0 ? 'liked-highlight' : ''}`}>
      <img src={avatarUrl || "./Aibol.jpeg"} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <LikeButton />
      <div className="skills-container">
        <h3>Skills:</h3>
        {skills.length > 0 ? (
          <div className="skills-list">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="empty-message">No skills added yet.</p>
        )}
      </div>
    </div>
  );
};