import { useState } from 'react';
import { type Skill, SkillBadge } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: Skill[];
};

export const ProfileCard = ({ name, role, bio, avatarUrl, skills }: ProfileCardProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className={`profile-card ${isLiked ? 'liked-highlight' : ''}`}>
      <img src={avatarUrl || "./Aibol.jpeg"} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <button onClick={handleLike} className="like-button">
        {isLiked ? '❤️ Liked' : '🤍 Like'} ({likes})
      </button>
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