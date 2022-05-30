import { IDummyEvents } from '../dummy-data';
import { EventElement } from './event-element';
import classes from './event-list.module.css';

interface IEventList {
  events: IDummyEvents[];
}

export const EventList = ({ events }: IEventList) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventElement {...event} key={event.id} />
      ))}
    </ul>
  );
};
