import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, onValue, push, set, remove,
} from 'firebase/database';

// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgKxdYoyt1vpHIl9QFcsR9EBRKKEiljtI',
  authDomain: 'sanrio-post-it-notes.firebaseapp.com',
  databaseURL: 'https://sanrio-post-it-notes-default-rtdb.firebaseio.com',
  projectId: 'sanrio-post-it-notes',
  storageBucket: 'sanrio-post-it-notes.appspot.com',
  messagingSenderId: '1085663495883',
  appId: '1:1085663495883:web:1712cfedca20217a1f3d4e',
  measurementId: 'G-G7B4KFSN9D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

// write the data

// read the data
export function onNotesValueChange(callback) {
  const notesRef = ref(db, 'notes/');
  onValue(notesRef, (snapshot) => {
    const data = snapshot.val();
    // callback() when done
    callback(data);
  });
}

export function createNewNote(note) {
  const notesRef = ref(db, 'notes/');
  push(notesRef, note);
}

export function updateNote(noteId, note) {
  const noteRef = ref(db, `notes/${noteId}`);
  set(noteRef, note);
}

export function deleteNote(noteId) {
  const noteRef = ref(db, `notes/${noteId}`);
  remove(noteRef);
}

export function deleteAllNotes(notes) {
  const notesRef = ref(db, 'notes/');
  remove(notesRef);
}
