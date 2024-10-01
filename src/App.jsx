import jame1 from "./assets/jame1.png";
import jame2 from "./assets/jame2.png";
import jame3 from "./assets/jame3.png";
import jame4 from "./assets/jame4.png";
import jame5 from "./assets/jame5.png";
import jame6 from "./assets/jame6.png";
import jame7 from "./assets/jame7.png";
import jame8 from "./assets/jame8.png";
import jame9 from "./assets/jame9.png";
import jame10 from "./assets/jame10.png";
import jame11 from "./assets/jame11.png";
import jame12 from "./assets/jame12.png";
import jame13 from "./assets/jame13.png";
import jame14 from "./assets/jame14.png";
import jame15 from "./assets/jame15.png";
import jame16 from "./assets/jame16.png";
import jame17 from "./assets/jame17.png";
import jame18 from "./assets/jame18.png";
import jame19 from "./assets/jame19.png";
import jame20 from "./assets/jame20.png";
import jame21 from "./assets/jame21.png";
import jame22 from "./assets/jame22.png";
import jame23 from "./assets/jame23.png";
import jame24 from "./assets/jame24.png";
import jame25 from "./assets/jame25.png";
import jame26 from "./assets/jame26.png";
import jame27 from "./assets/jame27.png";
import jame28 from "./assets/jame28.png";
import jame29 from "./assets/jame29.png";
import jame30 from "./assets/jame30.png";
import jame31 from "./assets/jame31.png";
import jame32 from "./assets/jame32.png";
import jame33 from "./assets/jame33.png";
import jame34 from "./assets/jame34.png";
import jame35 from "./assets/jame35.png"
import jame36 from "./assets/jame36.png"
import jame37 from "./assets/jame37.png"
import jame38 from "./assets/jame38.png"
import jame39 from "./assets/jame39.png"
import jame40 from "./assets/jame40.png"
import jame41 from "./assets/jame41.png"
import jame42 from "./assets/jame42.png"
import jame43 from "./assets/jame43.png"
import jame44 from "./assets/jame44.png"


const photos = [
  jame1,
  jame2,
  jame3,
  jame4,
  jame5,
  jame6,
  jame7,
  jame8,
  jame9,
  jame10,
  jame11,
  jame12,
  jame13,
  jame14,
  jame15,
  jame16,
  jame17,
  jame18,
  jame19,
  jame20,
  jame21,
  jame22,
  jame23,
  jame24,
  jame25,
  jame26,
  jame27,
  jame28,
  jame29,
  jame30,
  jame31,
  jame32,
  jame33,
  jame34,
  jame35,
  jame36,
  jame37,
  jame38,
  jame39,
  jame40,
  jame41,
  jame42,
  jame43,
  jame44,
];

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffle(photos);

const App = () => {
  return (
    <>
      <div>
        <h1> Jame Li Club </h1>
        <p> Welcome to Jame Li Club </p>
        <p> We meet daily at 11pm </p>
        <p> Allan joe </p>
        <h2>Jame collage</h2>
        {
          photos.map((photo, index) => (
            <img key={index} src={photo} alt={`jame${index + 1}`} />
          ))
        }
      </div>
      <div>
        <video controls width="100%" height="auto">
          <source src="/assets/jameliBall.mp4" type="video/mp4"/>
        </video>
      </div>
    </>
  );
};

export default App;

