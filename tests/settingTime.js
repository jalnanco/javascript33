const delayReport = deplayMs =>
  new Promise(resolve => {
    setTimeout(resolve, deplayMs);
  });

const setIntervalAsync = (fn, ms) => {
  fn().then(() => {
    setTimeout(() => setIntervalAsync(fn, ms), ms);
  });
};

setIntervalAsync(async () => {
  console.log(new Date());
  await delayReport(1000);
}, 1000);
