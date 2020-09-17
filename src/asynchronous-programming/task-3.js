function deley(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });
}

deley(1000).then(value => console.log(`Done with ${value}`));
