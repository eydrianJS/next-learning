import { IDummyEvents } from '../dummy-data';
import { Button } from './ui/button';
import classes from './event-item.module.css';
import ArrowRightIcon from './icons/arrow-right-icon';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const EventElement = ({ id, title, image, date, location }: IDummyEvents) => {
  return (
    <li className={classes.item}>
      <img src={image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formatDate(date)}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`events/${id}`}>
            <span>EXPLORE MORE</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
