import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
      id: "title1",
      key: "title1",
    },
    "This is heading 1"
  );

  const heading2 = React.createElement('h2', {
    id: 'title2',
    key: 'title2'
  }, 'This is heading 2')

  const heading3 = React.createElement('h3', {
    id: 'title3',
    key: 'title3'
  },
  'This is heading 3')

  const container = React.createElement('div',{
    id: 'container',
    className: 'title',
  }, [heading, heading2, heading3]);
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);