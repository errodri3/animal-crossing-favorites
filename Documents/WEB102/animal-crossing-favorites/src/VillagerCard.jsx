function VillagerCard({ name, species, personality, catchphrase, favoriteColor, birthday, image, wiki }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>
        <p><strong>Species:</strong> {species}</p>
        <p><strong>Personality:</strong> {personality}</p>
        <p><strong>Catchphrase:</strong> "{catchphrase}"</p>
        <p><strong>Favorite Color:</strong> {favoriteColor}</p>
        <p><strong>Birthday:</strong> {birthday}</p>
        <a href={wiki} target="_blank" rel="noreferrer">
          <button>View Wiki</button>
        </a>
      </div>
    </div>
  );
}

export default VillagerCard;