import { Link } from 'react-router';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <Link to="/">Back to start</Link>
    </div>
  );
};