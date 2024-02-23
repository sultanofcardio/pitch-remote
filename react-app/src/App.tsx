import './App.css'

function App() {
  return (
    <div className="App">
      <button onClick={() => console.log("Clicked go back")}>Go back</button>
      <button onClick={() => console.log("Clicked go forward")}>
        Go forward
      </button>
    </div>
  );
}

export default App
