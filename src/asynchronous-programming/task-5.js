const a = fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS');
const b = fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi');
const c = fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
const d = fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
const e = fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK');

function parallel() {
  const promises = [a, b, c, d, e];
  Promise.all(
    promises.map(request => {
      return fetch(request)
        .then(response => {
          return response.json();
        })
        .then(data => {
          return data;
        });
    })
  ).then(values => {
    console.log('values', values);
  });
}

parallel();
