function parseJSON(jsonStr, sCb, fCb) {
  try {
    const a = JSON.parse(jsonStr);
    sCb(a);
  } catch (e) {
    fCb(e);
  }
}

function successCb(result) {
  console.log('Success parse!');
  console.log(result);
}

function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
