import React, { FC } from 'react';
import TextField from './TextField';

const App: FC = () => (
  <div>
    <h1>Hello World</h1>
    <TextField text="hello" person={{ firstName: 'Shawn', lastName: 'Hu' }} />
  </div>
);

export default App;
