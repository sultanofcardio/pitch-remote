import "./App.css";
import { moveInDirection } from "./content-scripts/move-in-direction";

const runMoveInDirectionScript = (direction: "forward" | "back") => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];

    if (tab.id) {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          func: moveInDirection,
          args: [direction],
        })
        .then((results: chrome.scripting.InjectionResult[]) => {
          console.log(results);
        });
    }
  });
};

function App() {
  return (
    <>
      <button onClick={() => runMoveInDirectionScript("back")}>Go back</button>
      <button onClick={() => runMoveInDirectionScript("forward")}>
        Go forward
      </button>
    </>
  );
}

export default App;
