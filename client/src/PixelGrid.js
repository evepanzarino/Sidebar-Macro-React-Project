import React, { useState, useRef } from 'react';
import './App.css';

export default function PixelGrid({ rows = 16, cols = 16, pixelSize = 20 }) {
  const total = rows * cols;
  const [cells, setCells] = useState(() => Array(total).fill('#ffffff'));
  const [color, setColor] = useState('#000000');
  const painting = useRef(false);

  const setCellColor = (index, value) => {
    setCells((prev) => {
      const next = prev.slice();
      next[index] = value;
      return next;
    });
  };

  const handleToggle = (index) => {
    setCellColor(index, cells[index] === '#ffffff' ? color : '#ffffff');
  };

  const handleMouseDown = (index, event) => {
    event.preventDefault();
    painting.current = true;
    setCellColor(index, color);
  };

  const handleMouseEnter = (index) => {
    if (painting.current) setCellColor(index, color);
  };

  const handleMouseUp = () => {
    painting.current = false;
  };

  const clear = () => setCells(Array(total).fill('#ffffff'));

  return (
    <div
      className="pixelgrid-root"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ margin: 0, padding: 0 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <label>
          Color: <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <button onClick={clear}>Clear</button>
        <span style={{ marginLeft: 8, color: '#666' }}>Click & drag to paint</span>
      </div>

      <div
        className="pixelgrid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
          gap: 1,
          userSelect: 'none',
        }}
      >
        {cells.map((c, i) => (
          <div
            key={i}
            onMouseDown={(e) => handleMouseDown(i, e)}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={() => handleToggle(i)}
            style={{
              width: pixelSize,
              height: pixelSize,
              background: c,
              border: '1px solid #eee',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}
