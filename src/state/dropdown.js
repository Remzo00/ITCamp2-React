import React, { useState } from "react";

const Dropdown = () => {
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };
  
    return (
      <div>
        <label>Odaberite boju: </label>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="">-- Odaberite boju --</option>
          <option>Crvena</option>
          <option>Plava</option>
          <option>Zelena</option>
          <option>Žuta</option>
        </select>
          <p>Odabrana boja: {selectedColor}</p>
      </div>
    );
}

export default Dropdown