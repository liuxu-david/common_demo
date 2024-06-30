// function sleep(time) {
//   const now = Date.now();
//   while (Date.now() - now < time) {}
// }

function sleep(time) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
}
(async () => {
  console.log(1);
  await sleep(3000);
  console.log(3);
})();
