import villagers from './data';
import VillagerCard from './VillagerCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🌿 Animal Crossing Favorites 🌿</h1>
        <p>Meet the most beloved villagers from the island!</p>
      </header>

      <div className="card-grid">
        {villagers.map((villager) => (
          <VillagerCard
            key={villager.id}
            name={villager.name}
            species={villager.species}
            personality={villager.personality}
            catchphrase={villager.catchphrase}
            favoriteColor={villager.favoriteColor}
            birthday={villager.birthday}
            image={villager.image}
            wiki={villager.wiki}
          />
        ))}
      </div>
    </div>
  );
}

export default App;