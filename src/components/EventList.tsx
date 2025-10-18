/**
 * Event List Component
 */

import React, { useState } from 'react';
import { format } from 'date-fns';
import { fi } from 'date-fns/locale';
import { EventItem } from './EventItem';
import { Appointment } from '../types/api.types';
import { getEventsForDate } from '../utils/date.utils';

interface EventListProps {
  selectedDate: Date;
  events: Appointment[];
}

export const EventList: React.FC<EventListProps> = ({ selectedDate, events }) => {
  const dayEvents = getEventsForDate(selectedDate, events);
  const monthName = format(selectedDate, 'LLLL', { locale: fi }).toUpperCase();
  const dayNumber = format(selectedDate, 'd');
  const [ expandedEvent, setExpandedEvent ] = useState<number | null>(null);

  return (
    <div className="event-list">
      <div className="event-list-header">
        <h3 className="event-list-title">TAPAHTUMAT {monthName}</h3>
        <div className="selected-day-badge">{dayNumber}</div>
      </div>

      <div className="events-container">
        {dayEvents.length === 0 ? (
          <div className="no-events">
            <p>Ei tapahtumia tälle päivälle</p>
          </div>
        ) : (
          dayEvents.map((event, index) => <EventItem key={index} eventData={event} expanded={event.base.id === expandedEvent} setExpanded={setExpandedEvent}/>)
        )}
      </div>
    </div>
  );
};
