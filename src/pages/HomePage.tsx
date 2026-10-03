import { ProfileCard } from '../components/ProfileCard';
import { skills } from '../data/skills';

const bio = 'I am a third-year IT Management student at KBTU. I am interested in subjects that can help me learn new technologies and upgrade my skills for the future. I also want to improve my practical skills by building real web projects.';

export const HomePage = () => {
  return (
          <ProfileCard 
            name="Aibol" 
            role="IT Manager" 
            bio = {bio}
            avatarUrl="./Aibol.jpeg" 
            skills={skills} 
          />
  );
};