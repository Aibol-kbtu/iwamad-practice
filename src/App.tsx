import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import { type Skill } from './components/SkillBadge';

function App() {
  const [skills] = useState<Skill[]>([
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'HTML & CSS' },
    { id: 4, label: 'Git / GitHub' },
  ]);

  const bio = 'I am a third-year IT Management student at KBTU. I am interested in subjects that can help me learn new technologies and upgrade my skills for the future. I also want to improve my practical skills by building real web projects.'
  
  return (
    <div className="app-container">
      <Header title="My Profile Page" />
      
      <ProfileCard 
        name="Aibol" 
        role="IT Manager" 
        bio = {bio}
        avatarUrl="./Aibol.jpeg" 
        skills={skills} 
      />

      <Footer year={2026} />
    </div>
  );
}

export default App;