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

  const LEFT_ARROW = 37;

  simulateKeyPress(LEFT_ARROW);
})();
