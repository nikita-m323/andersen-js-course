function getResolvePromice(value) {
  return new Promise(resolve => {
    resolve(value);
  });
}

getResolvePromice(500)
  .then(response => {
    if (response > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch(e => console.log(e))
  .finally(() => console.log('This is Finally'));
