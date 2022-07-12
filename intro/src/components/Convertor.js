import { useState } from 'react';

export default function Convertor() {
  const [color, setColor] = useState('');

  const handleChange = ({ target }) => {
      console.log(target)
    if (target.value.length < 7) {
      return;
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
    console.log(result)
    if (result === null) {
      setColor('Ошибка!');
      return;
    }

    const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    setColor(`rgb(${rgb})`);
  }

  return (
    <div className="Convertor" style={{ backgroundColor: color }}>
      <div className="Convertor__container">
        <input className="Convertor__input" onChange={handleChange} />
        <div className="Convertor__result">{color}</div>
      </div>
    </div>
  );
}