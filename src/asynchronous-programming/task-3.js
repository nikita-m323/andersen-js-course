function deley(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });
}

// eslint-disable-next-line import/prefer-default-export
export { deley };
