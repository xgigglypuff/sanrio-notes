import React, { useEffect, useState } from 'react';
import AddNote from './AddNote';
import NotesContainer from './NotesContainer';
import { onNotesValueChange } from '../services/datastore';

function App(props) {
  // initialize the states
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState({});

  useEffect(() => {
    onNotesValueChange(setNotes);
  }, []);

  return (
    <div id="content">
      <img alt="" id="sanrio-notes-logo" src="src/media/sanrio-notes-logo.gif" />
      <AddNote notes={notes} setTitle={setTitle} title={title} />
      {!notes ? null : <NotesContainer notes={notes} setNotes={setNotes} />}
    </div>
  );
}

export default App;
