import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task-2';
import { deley } from './asynchronous-programming/task-3';
import { getData } from './asynchronous-programming/task-4';

import { getResolvePromice } from './asynchronous-programming/task-6';

foo(5, createCb(7));
foo(20, createCb('cb'));

console.log('//////////////////////////');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

console.log('//////////////////////////');

deley(1000).then(value => console.log(`Done with ${value}`));

console.log('//////////////////////////');

getData();

console.log('//////////////////////////');

getResolvePromice(500)
  .then(response => {
    if (response > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch(e => console.log(e))
  .finally(() => console.log('This is Finally'));

console.log('//////////////////////////');
