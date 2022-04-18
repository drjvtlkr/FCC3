const drumSoundBank = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Bass Drum',
        url: './sounds/bassDrum.WAV'
      },
      {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Clap',
        url: './sounds/clap.WAV'
      },
      {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Cowbell',
        url: './sounds/cowBell.WAV'
      },
      {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Cymbal',
        url: './sounds/cymbal.WAV'
      },
      {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Hi-Hat',
        url: './sounds/hiHat.WAV'
      },
      {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Rim Shot',
        url: './sounds/rimShot.WAV'
      },
      {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Snare Drum",
        url: './sounds/snareDrum.WAV'
      },
      {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Tight Cymbal',
        url: './sounds/tightCymbal.WAV'
      },
      {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Claves',
        url: './sounds/claves.WAV'
      }
];



function App(){
const [display] = React.useState("");
    return(
        <div className="min-vh-100">
                <h1 className="pt-4 text-center">Drum Machine</h1>
                <h5 className="text-center sub-heading">For All Your Hip-Hop Needs</h5>
            <div id="drum-machine">
                <div id="container">{drumSoundBank.map(clip => (
                    <Pad key={clip.id} clip={clip} display={display}/>
                ))}
                </div>
            </div>
                <h5 id="display">{display}</h5>
        </div>
    )
}

function Pad({ clip, display }) {
  const [active, setActive] = React.useState(false);

React.useEffect(()=> {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    }
}, [])

const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
        playSound();
    }
};

const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(()=> setActive(false), 200)
    audioTag.currentTime = 0;
    audioTag.play();
    display = document.getElementById("display").innerText = clip.id;
};
    return (
        <div onClick={playSound}  className={`drum-pad  ${active && "background-change"}`} id="clip.keyTrigger">
            <audio className="clip" id={clip.keyTrigger} src={clip.url}/>
            {clip.keyTrigger}
        </div>

    );
}



ReactDOM.render(<App />, document.getElementById("root"));