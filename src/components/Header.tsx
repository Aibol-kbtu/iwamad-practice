import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { likes } = useLikes();

  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span className="header-likes">♥ {likes}</span>
    </header>
  );
};