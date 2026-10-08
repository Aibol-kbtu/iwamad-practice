import { useLikes } from '../context/LikesContext';

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike} className="like-button">
      {likes > 0 ? '❤️ Liked' : '🤍 Like'} ({likes})
    </button>
  );
};