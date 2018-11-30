import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import TextField from '@material-ui/core/TextField';

import Navbar from '../Navbar/Navbar';
import MediaCard from '../Card/Card';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button variant="outlined" color="primary">
          <Bookmarks></Bookmarks>
          Chaper 2
        </Button>
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
        <MediaCard />
      </div>
    );
  }
}

export default App;