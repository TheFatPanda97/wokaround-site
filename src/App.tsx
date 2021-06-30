import { FC } from 'react';
import TextField from './TextField';

const App: FC = () => {
  return (
    <div>
      <h1>Hello there</h1>
      <TextField text="hello" person={{ firstName: 'Shawn', lastName: 'Hu' }} />
    </div>
  );
};

export default App;
