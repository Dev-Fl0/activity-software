import React, { useContext, useState } from 'react';

import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import withDragAndDrop, {
  withDragAndDropProps,
} from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';

import { UserContext } from '../../../../utils/context/userContext';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Planning.scss';

export default function Planning() {
  const { userConnect } = useContext(UserContext);

  const [events, setEvents] = useState<Event[]>([
    {
      title: 'Learn cool stuff',
    },
  ]);

  const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  const locales = {
    'fr-EU': fr,
  };

  // The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div className="dashboard-content">
      <DnDCalendar
        className="calendar"
        defaultView="week"
        events={events}
        localizer={localizer}
        onEventResize={onEventResize}
        resizable
      />
    </div>
  );
}
