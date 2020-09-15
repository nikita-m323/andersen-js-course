import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task-2';

foo(5, createCb(7));
foo(20, createCb('cb'));

console.log('//////////////////////////');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
