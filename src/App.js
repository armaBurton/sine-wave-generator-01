import './App.css';

function App() {

  const handleClick = (e) => {
    const value = e.target.value;
    console.log("click");
    console.log(value);
    alert(value);
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
