import { useState, useEffect, use } from "react";

const artUrl = 'https://boolean-uk-api-server.fly.dev';

const fetchArts = async () => {
  const response = await fetch(artUrl+'/art')
  const data = await response.json()
  return data
}


function ArtsSection() {
  const [arts, setArts] = useState([]);
  useEffect(() => {
    fetchArts().then(data => setArts(data))
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul>
          {arts.map(art => (
            <li key={art.id}>
              <img src={artUrl+art.imageURL} alt={art.title} />
              <h2>{art.title}</h2>
              <p>{art.artist}</p>
              <ul>
                {art.publicationHistory.map(history => (
                  <li key={history}>{history}
                    <p>{history}</p>
                  </li>
                ))}
                )}
              </ul>
              </li>))}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
