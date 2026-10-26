import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';
export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <Button onClick={addLike}>
      {likes > 0 ? '❤️ Liked' : '🤍 Like'} ({likes})
    </Button>
  );
};