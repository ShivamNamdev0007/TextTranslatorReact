import React from 'react';

function LanguageSelect({ languages, fromRef, toRef }) {
  return (
    <div className="language-select">
      <div className="form-group">
        <label htmlFor="from-select">From:</label>
        <select id="from-select" ref={fromRef}>
          {languages.map((item) => (
            <option key={item.code} value={item.code}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="to-select">To:</label>
        <select id="to-select" ref={toRef}>
          {languages.map((item) => (
            <option key={item.code} value={item.code}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LanguageSelect;