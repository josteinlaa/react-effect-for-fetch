import { useState, useEffect } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const fetchRandomAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice?nocache=${Math.random()}`);
    const data = await response.json()
    setAdvice(data.slip.advice)
  }
  
  const saveFavouriteSlip = (slip) => {
    setFavouriteSlips([...favouriteSlips, { id: Date.now(), advice: slip }]);
  };
  

  return (
    <section>
      <h2>Advice Section</h2>
      <button onClick={fetchRandomAdvice}>Get Advice</button>
      <section className="adivce-slip">
        <p>{advice}</p>
        <button onClick={() => saveFavouriteSlip(advice)}>Save Favourite</button>
        </section>
      <section className="favourtite-slips-list">
        <ul>
        {favouriteSlips.map((slip) => (
          <li key={slip.id}>
            <p>{slip.advice}</p>
          </li>
        ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
