import './HoroscopeList.scss';

const HoroscopeCard = ({ data }) => {
  const { id, title, date, desc, image } = data;

  return (
    <div key={id} className="horoscope-card">
      <div className="card-over">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{date}</p>
        <div id="horoscope-description">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeCard;
