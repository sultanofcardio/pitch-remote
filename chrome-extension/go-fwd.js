(() => {
  function simulateKeyPress(keyCode) {
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
  }

  const RIGHT_ARROW = 39;

  simulateKeyPress(RIGHT_ARROW);
})();
