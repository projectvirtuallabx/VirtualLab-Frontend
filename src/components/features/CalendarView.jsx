import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView = ({ onDateSelect, onEventClick, initialEvents }) => {
  return (
    <div className="p-4 rounded-lg glass-effect text-gray-200">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        selectable={true}
        dateClick={onDateSelect}
        events={initialEvents || []}
        eventClick={onEventClick}
        height="auto"
        eventColor="#3b82f6"
        eventTextColor="#ffffff"
        dayHeaderClassNames="text-gray-300 bg-gray-700/50 p-2"
        viewClassNames="bg-gray-800/30"
        slotLabelClassNames="text-gray-400"
        buttonText={{
          today: 'Today',
        }}
      />
    </div>
  );
};

export default CalendarView;
