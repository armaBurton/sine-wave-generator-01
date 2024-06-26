import './App.css';

function App() {
  const context = new AudioContext();

  const handleClick = (e) => {
    const value = e.target.value;

    const freq = (value === "blue") ? 195.998 :
      (value === "yellow") ? 261.626 : 
        (value === "red") ? 329.628 : 391.995;

    playOscillator(context.currentTime, context.currentTime + .42, freq)
  }

  const playOscillator = (startTime, endTime, freq) =>{
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    oscillator.type = 'square';
    oscillator.frequency.value = freq;
    gain.gain.value = 0.125;
    gain.connect(context.destination);
    oscillator.start(startTime);
    // gain.gain.exponentialRampToValueAtTime(0.1, endTime);
    oscillator.stop(endTime);
  }

  return (
    <section className="App">
      <div id="buttonWrapper">
        <button className="gamePad" onClick={(e) => handleClick(e)} key="blue" value="blue" id="blue"></button>
        <button className="gamePad" onClick={(e) => handleClick(e)} value="red" id="red"></button>
        <button className="gamePad" onClick={(e) => handleClick(e)} value="yellow" id="yellow"></button>
        <button className="gamePad" onClick={(e) => handleClick(e)} value="green" id="green"></button>
      </div>
    </section>
  );
}

export default App;
