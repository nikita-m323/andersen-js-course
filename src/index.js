import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';

foo(5, createCb(7));
foo(20, createCb('cb'));
