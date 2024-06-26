import './App.css';

function App() {
  const context = new AudioContext();
  // const o = context.createOscillator();
  // o.type = "sine";
  // o.connect(context.destination);

  const handlePlay = () => {
    playOscillator(context.currrentTime, context.currentTime + 1.5);
  }

  const playOscillator = (startTime, endTime) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    // oscillator.connect(context.destination);
    oscillator.connect(gain);
    oscillator.type = 'square';
    oscillator.frequency.value = 164.81;
    gain.connect(context.destination);
    oscillator.start(startTime);
    // oscillator.stop(gain.gain.exponentialRampToValueAtTime(0.00001, endTime));
    gain.gain.exponentialRampToValueAtTime(0.000001, endTime);
    oscillator.stop(endTime);
  }

  // const handleStop = () => {
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button id="play" onClick={handlePlay}>play</button>  
          {/* <button id="stop" onClick={handleStop}>stop</button>   */}
        </div>

      </header>
    </div>
  );
}

export default App;
