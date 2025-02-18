import React from 'react';

function TranslateInput({ text, setText }) {
  return (
    <div className="form-group">
      <textarea
        placeholder="Translation..."
        cols={40}
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TranslateInput;