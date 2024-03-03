import './HoroscopeList.scss';
import { data as horoscopes } from '../../helper/data';
import HoroscopeCard from './HoroscopeCard';

const HoroscopeList = () => {
  return (
    <div className="horoscope-list-container">
      {horoscopes.map(horoscope => (
        <HoroscopeCard data={horoscope} />
      ))}
    </div>
  );
};

export default HoroscopeList;
