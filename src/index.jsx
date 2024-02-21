import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './components/app';
import FooterContent from './components/FooterContent';

const root = createRoot(document.getElementById('main'));
root.render(<App />);

const footer = createRoot(document.getElementById('footer'));
footer.render(<FooterContent />);
