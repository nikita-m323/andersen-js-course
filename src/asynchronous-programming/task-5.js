const a = fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS');
const b = fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi');
const c = fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
const d = fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
const e = fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK');

/* function parallel() {
  const promises = [a, b, c, d, e];
  Promise.all(promises)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(data => {
      console.log(data);
    });
} 

parallel(); */

function methodThatReturnsAPromise(id) {
  return new Promise(resolve => {
    id.then(response =>
      response.json().then(data => {
        console.log(data);
        resolve(data);
      })
    );
  });
}
const promises = [a, b, c, d, e];
const result = promises.reduce((accumulatorPromise, nextID) => {
  return accumulatorPromise.then(() => {
    return methodThatReturnsAPromise(nextID);
  });
}, Promise.resolve());

result.then(item => item);
