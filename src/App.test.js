import React from 'react'; 
import { render, screen } from '@testing-library/react';
import App from './App.js';
//COS60015_FRONT-END/create-demo-app/src/App.js

test('renders page title', () => {
  render(<App />);
  const linkElement = screen.getByText("Creative Demonstrations app");
  expect(linkElement).toBeInTheDocument();
});
