const photos = Array.from({ length: 46 }, (_, i) => {
  return new URL(`./assets/jame${i + 1}.png`, import.meta.url).href;
});

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

shuffle(photos);

const App = () => {
  return (
    <div>
      <h1>Jame Li Club</h1>
      <p>Welcome to Jame Li Club</p>
      <p>We meet daily at 11pm</p>
      <p>Allan joe</p>
      <h2>Jame collage</h2>
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`jame${index + 1}`} />
      ))}
    </div>
  );
};

export default App;
