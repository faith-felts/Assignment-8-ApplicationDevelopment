import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { getEvents } from '../services/ticketmaster';
import './EventsList.css';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Events could not be loaded. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading" role="status">Loading events...</div>;
  }

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Upcoming Events</h1>
        <p>Showing {events.length} music events in New York</p>
      </div>
      
      <div className="events-container">
        <aside className="sidebar">
          <div className="filter-section">
            <h2>Live Music</h2>
            <p className="filter-note">Concerts and music events in New York.</p>
          </div>
        </aside>
        
        <main className="events-grid">
          {error ? (
            <p className="events-message" role="alert">{error}</p>
          ) : events.length ? (
            events.map(event => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="events-message">No music events were found for New York.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default EventsList;