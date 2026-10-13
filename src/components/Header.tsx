import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from '../assets/logo.svg';
type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { likes } = useLikes();

  return (
    <header className="header">
      <div className="site-brand">
        <img
          src={logo}
          alt="My Portfolio logo"
          className="site-logo"
        />
        <h1>{title}</h1>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span className="header-likes">♥ {likes}</span>
    </header>
  );
};
