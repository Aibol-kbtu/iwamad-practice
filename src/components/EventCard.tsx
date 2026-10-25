import { Link } from 'react-router';
import  { type CampusEvent } from '../data/events';

type EventsCardProps = {
  event: CampusEvent;
};

export default function EventCard({ event }: EventsCardProps) {
  return (
    <article>
      <h2>
        <Link to={`/events/${event.id}`}>
          {event.title}
        </Link>
      </h2>

      <p>Date: {event.date}</p>
      <p>Place: {event.place}</p>
    </article>
  );
}