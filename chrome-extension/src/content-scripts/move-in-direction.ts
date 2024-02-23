export const moveInDirection = (direction: "forward" | "back") => {
  const simulateKeyPress = (keyCode: number) => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        keyCode: keyCode,
        which: keyCode,
        altKey: false,
        ctrlKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
      })
    );
  };

  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  if (direction === "forward") {
    simulateKeyPress(RIGHT_ARROW);
  } else {
    simulateKeyPress(LEFT_ARROW);
  }
};
