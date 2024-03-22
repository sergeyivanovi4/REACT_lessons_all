// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


const data = [
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2016,
    "Year": "2016",
    "Population": 323127515,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2015,
    "Year": "2015",
    "Population": 321418821,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2014,
    "Year": "2014",
    "Population": 318857056,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2013,
    "Year": "2013",
    "Population": 316128839,
    "Slug Nation": "united-states"
  }
];


const PopulationData = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>ID Nation: {item['ID Nation']}</p>
          <p>Nation: {item.Nation}</p>
          <p>ID Year: {item['ID Year']}</p>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>Slug Nation: {item['Slug Nation']}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      {/* lessons_Population */}
      <h1>Population Data:</h1>
      <PopulationData data={data} />
      
      {/* lessons_Swapi */}
      <h1>Star Wars Characters</h1>
      {results.map((character, index) => (
        <Character key={index} character={character} />
      ))}
      
    </div>
   
  );
}

export default App;








const results = [
  {
      "name": "Luke Skywalker", 
      "height": "172", 
      "mass": "77", 
      "hair_color": "blond", 
      "skin_color": "fair", 
      "eye_color": "blue", 
      "birth_year": "19BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/", 
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/12/", 
          "https://swapi.dev/api/starships/22/"
      ], 
      "created": "2014-12-09T13:50:51.644000Z", 
      "edited": "2014-12-20T21:17:56.891000Z", 
      "url": "https://swapi.dev/api/people/1/"
  }, 
  {
      "name": "C-3PO", 
      "height": "167", 
      "mass": "75", 
      "hair_color": "n/a", 
      "skin_color": "gold", 
      "eye_color": "yellow", 
      "birth_year": "112BBY", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:10:51.357000Z", 
      "edited": "2014-12-20T21:17:50.309000Z", 
      "url": "https://swapi.dev/api/people/2/"
  }, 
  {
      "name": "R2-D2", 
      "height": "96", 
      "mass": "32", 
      "hair_color": "n/a", 
      "skin_color": "white, blue", 
      "eye_color": "red", 
      "birth_year": "33BBY", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/8/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:11:50.376000Z", 
      "edited": "2014-12-20T21:17:50.311000Z", 
      "url": "https://swapi.dev/api/people/3/"
  }, 
  {
      "name": "Darth Vader", 
      "height": "202", 
      "mass": "136", 
      "hair_color": "none", 
      "skin_color": "white", 
      "eye_color": "yellow", 
      "birth_year": "41.9BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [
          "https://swapi.dev/api/starships/13/"
      ], 
      "created": "2014-12-10T15:18:20.704000Z", 
      "edited": "2014-12-20T21:17:50.313000Z", 
      "url": "https://swapi.dev/api/people/4/"
  }, 
  {
      "name": "Leia Organa", 
      "height": "150", 
      "mass": "49", 
      "hair_color": "brown", 
      "skin_color": "light", 
      "eye_color": "brown", 
      "birth_year": "19BBY", 
      "gender": "female", 
      "homeworld": "https://swapi.dev/api/planets/2/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [], 
      "created": "2014-12-10T15:20:09.791000Z", 
      "edited": "2014-12-20T21:17:50.315000Z", 
      "url": "https://swapi.dev/api/people/5/"
  }, 
  {
      "name": "Owen Lars", 
      "height": "178", 
      "mass": "120", 
      "hair_color": "brown, grey", 
      "skin_color": "light", 
      "eye_color": "blue", 
      "birth_year": "52BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:52:14.024000Z", 
      "edited": "2014-12-20T21:17:50.317000Z", 
      "url": "https://swapi.dev/api/people/6/"
  }, 
  {
      "name": "Beru Whitesun lars", 
      "height": "165", 
      "mass": "75", 
      "hair_color": "brown", 
      "skin_color": "light", 
      "eye_color": "blue", 
      "birth_year": "47BBY", 
      "gender": "female", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:53:41.121000Z", 
      "edited": "2014-12-20T21:17:50.319000Z", 
      "url": "https://swapi.dev/api/people/7/"
  }, 
  {
      "name": "R5-D4", 
      "height": "97", 
      "mass": "32", 
      "hair_color": "n/a", 
      "skin_color": "white, red", 
      "eye_color": "red", 
      "birth_year": "unknown", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:57:50.959000Z", 
      "edited": "2014-12-20T21:17:50.321000Z", 
      "url": "https://swapi.dev/api/people/8/"
  }, 
  {
      "name": "Biggs Darklighter", 
      "height": "183", 
      "mass": "84", 
      "hair_color": "black", 
      "skin_color": "light", 
      "eye_color": "brown", 
      "birth_year": "24BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [
          "https://swapi.dev/api/starships/12/"
      ], 
      "created": "2014-12-10T15:59:50.509000Z", 
      "edited": "2014-12-20T21:17:50.323000Z", 
      "url": "https://swapi.dev/api/people/9/"
  }, 
  {
      "name": "Obi-Wan Kenobi", 
      "height": "182", 
      "mass": "77", 
      "hair_color": "auburn, white", 
      "skin_color": "fair", 
      "eye_color": "blue-gray", 
      "birth_year": "57BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/20/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/38/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/48/", 
          "https://swapi.dev/api/starships/59/", 
          "https://swapi.dev/api/starships/64/", 
          "https://swapi.dev/api/starships/65/", 
          "https://swapi.dev/api/starships/74/"
      ], 
      "created": "2014-12-10T16:16:29.192000Z", 
      "edited": "2014-12-20T21:17:50.325000Z", 
      "url": "https://swapi.dev/api/people/10/"
  }
]



const Character = ({ character }) => {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url } = character;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      {hair_color !== 'n/a' && <p>Hair Color: {hair_color}</p>}
      {skin_color !== 'n/a' && skin_color !== 'none' && <p>Skin Color: {skin_color}</p>}
      {eye_color !== 'n/a' && eye_color !== 'none' && <p>Eye Color: <span style={{ color: eye_color }}>{eye_color}</span></p>}
      <p>Birth Year: {birth_year}</p>
      {gender && <p>Gender: {gender}</p>}
      <p>Homeworld: {homeworld}</p>
      <p>Films: {films.join(', ')}</p>
      {species.length > 0 && <p>Species: {species.join(', ')}</p>}
      {vehicles.length > 0 && <p>Vehicles: {vehicles.join(', ')}</p>}
      {starships.length > 0 && <p>Starships: {starships.join(', ')}</p>}
      <p>Created: {created}</p>
      <p>Edited: {edited}</p>
      <p>URL: {url}</p>
    </div>
  );
};
