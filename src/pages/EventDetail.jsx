import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../services/ticketmaster';
import './EventDetail.css';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventDetail = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event:', error);
        setEvent(null);
        setError('Event details could not be loaded. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return <div className="detail-message" role="status">Loading event details...</div>;
  }

  if (error) {
    return <div className="detail-message" role="alert">{error}</div>;
  }

  if (!event) {
    return <div className="detail-message" role="alert">Event not found.</div>;
  }

  const venue = event._embedded?.venues?.[0];
  const imageUrl = event.images?.[0]?.url;
  const city = venue?.city?.name;
  const state = venue?.state?.stateCode;
  const location = [city, state].filter(Boolean).join(', ');

  return (
    <div className="event-detail">
      <div className="detail-container">
        {imageUrl && (
          <div className="detail-image">
            <img src={imageUrl} alt="" />
          </div>
        )}
        
        <div className="detail-content">
          <h1 className="detail-title">{event.name}</h1>
          
          <div className="detail-info">
            <div className="info-item">
              <strong>Date:</strong>
              <span>{event.dates?.start?.localDate || 'To be announced'}</span>
            </div>
            <div className="info-item">
              <strong>Time:</strong>
              <span>{event.dates?.start?.localTime || 'To be announced'}</span>
            </div>
            <div className="info-item">
              <strong>Venue:</strong>
              <span>{venue?.name || 'To be announced'}</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <span>
                {location || 'To be announced'}
              </span>
            </div>
          </div>

          {event.info && (
            <div className="detail-description">
              <h2>About This Event</h2>
              <p>{event.info}</p>
            </div>
          )}

          <div className="detail-actions">
            {event.url && (
              <a 
                href={event.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ticket-button"
              >
                Get Tickets
              </a>
            )}
            <Link to="/events" className="back-button">
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;