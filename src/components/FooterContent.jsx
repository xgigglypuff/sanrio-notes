import React, { useCallback } from 'react';
import { deleteAllNotes } from '../services/datastore';

function FooterContent({ notes }) {
  // when delete all button is clicked
  const onClear = useCallback(() => {
    deleteAllNotes(notes);
  }, [notes]);

  return (
    <div id="clear">
      <button className="clear-button" type="button" onClick={onClear}>Clear All</button>
    </div>
  );
}

export default FooterContent;
