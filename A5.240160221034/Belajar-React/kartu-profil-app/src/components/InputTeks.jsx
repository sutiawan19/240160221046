import React, { useState } from 'react';
import './InputTeks.css';

function InputTeks() {
  const [teks, setTeks] = useState('');

  function handleChange(event) {
    setTeks(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={teks}
        onChange={handleChange}
        placeholder="Ketik sesuatu..."
      />

      <p className="display-teks">
        Anda mengetik: <strong>{teks}</strong>
      </p>
    </div>
  );
}

export default InputTeks;