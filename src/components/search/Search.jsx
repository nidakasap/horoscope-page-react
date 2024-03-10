import { Select, useState } from 'react';
import './Search.scss';
import { data as horoscopes } from '../../helper/data';

const Search = () => {
  const [selectedSign, setSelectedData] = useState(null);
  const zodiacSignOptions = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];

  const handleSelectChange = e => {
    setSelectedData(e.target.value);
  };

  return (
    <div className="search-container">
      {!selectedSign && (
        <div className="select-container">
          <h2>Learn more about your sign.</h2>
          <select onChange={handleSelectChange}>
            <option>Select your sign</option>
            {zodiacSignOptions.map((sign, index) => (
              <option key={index} value={sign}>
                {sign}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedSign && (
        <div>
          {horoscopes.map(
            horoscope =>
              horoscope.title === selectedSign && (
                <div key={horoscope.title} className="sign-info">
                  <div>
                    <h1>{horoscope.title}</h1>
                    <h5>{horoscope.date}</h5>
                  </div>
                  <div className="sign-feautures">
                    <p>
                      Element:
                      <span>{horoscope.element}</span>
                    </p>
                    <p>
                      Ruler:
                      <span>{horoscope.ruler}</span>
                    </p>
                    <p>
                      Strengths:
                      <span>{horoscope.strengths}</span>
                    </p>
                    <p>
                      Weaknesses:
                      <span>{horoscope.weaknesses}</span>
                    </p>
                    <p>
                      Likes:
                      <span>{horoscope.likes}</span>
                    </p>
                    <p>
                      Dislikes:
                      <span>{horoscope.dislikes}</span>
                    </p>
                    å
                    <h4>
                      Summary: <span>{horoscope.summary}</span>
                    </h4>
                  </div>
                  <div onClick={() => setSelectedData(null)}>{'<- Back to search'}</div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
