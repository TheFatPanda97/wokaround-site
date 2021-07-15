import React, { FC } from 'react';
import { Button } from '@material-ui/core';

import AppBar from './Common/Components/AppBar';
import './App.scss';

const App: FC = () => (
  <div>
    <Button className="test-button" variant="contained">
      Click Me
    </Button>
    <AppBar />
  </div>
);

export default App;
