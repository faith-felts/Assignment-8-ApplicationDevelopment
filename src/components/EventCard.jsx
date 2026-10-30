import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard({ event }) {
  const venue = event._embedded?.venues?.[0];
  const imageUrl = event.images?.[0]?.url;
  
  return (
    <div className="event-card">
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="event-image"
          loading="lazy"
        />
      )}
      <div className="event-info">
        <h3 className="event-title">{event.name}</h3>
        <p className="event-date">
          📅 {event.dates?.start?.localDate || 'Date to be announced'}
        </p>
        <p className="event-venue">
          📍 {venue?.name || 'Venue to be announced'}
        </p>
        <Link to={`/events/${event.id}`} className="view-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;