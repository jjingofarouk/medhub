// src/components/Calendar.js
import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
  useEffect(() => {
    // Calendar initialization is handled by FullCalendar
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={[
        {
          title: 'Consultation with Dr. Smith',
          start: '2024-09-10T10:00:00',
          end: '2024-09-10T11:00:00'
        },
        {
          title: 'Health Checkup',
          start: '2024-09-12T14:00:00',
          end: '2024-09-12T15:00:00'
        }
        // Add more events here
      ]}
      eventColor="#ff867c" // Customize the color of events
      eventTextColor="#ffffff" // Customize the text color of events
    />
  );
};

export default Calendar;
