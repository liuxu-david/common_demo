function throttle(fn, wait) {
  let lastTimer = 0;
  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastTimer > wait) {
      fn.apply(this, args);
      lastTimer = currentTime;
    }
  };
}
