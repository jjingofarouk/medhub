import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    useEffect(() => {
        // Initialization code if needed
    }, []);

    return (
        <div className="dashboard-item calendar-card">
            <h2>Appointment Calendar</h2>
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
                ]}
                eventColor="#ff867c"
                eventTextColor="#ffffff"
            />
        </div>
    );
};

export default Calendar;
