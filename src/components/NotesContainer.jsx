import React, { useState } from 'react';
import NoteItem from './NoteItem';
import { getContainerHeight } from '../utils/position-utils';

function NotesContainer({ notes, setNotes }) {
  // set a max z-index variable to increment
  const [maxZIndex, setMaxZindex] = useState(2);

  function renderNotesItems() {
    const noteArray = Object.keys(notes);
    const noteItems = noteArray.map((key, index) => {
      return <NoteItem id={key} key={key} maxZIndex={maxZIndex} notes={notes} setMaxZindex={setMaxZindex} setNotes={setNotes} />;
    });

    return noteItems;
  }
  return (
    <div className="notes-container" style={{ height: getContainerHeight(Object.keys(notes).length) }}>
      {renderNotesItems()}
    </div>
  );
}

export default NotesContainer;
