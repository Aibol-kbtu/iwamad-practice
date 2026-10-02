type FooterProps = {
  year: number;
};

export const Footer = ({ year }: FooterProps) => {
  return (
    <footer className="footer">
      <p>&copy; {year}  My Profile App.</p>
    </footer>
  );
};