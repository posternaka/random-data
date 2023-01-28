import React from 'react';
import ReactDOM from 'react-dom/client';

import Rus from './Ru/Rus';

// import Ru from './Ru';
// import En from './En';
// import De from './De';

import 'bulma/css/bulma.css';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rus />
    {/* <Ru faker={faker} /> */}
    {/* <En faker={faker} /> */}
    {/* <De faker={faker} /> */}
  </React.StrictMode>
);