import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title1",
//       key: "title1",
//     },
//     "This is heading 1"
//   );

//   const heading2 = React.createElement('h2', {
//     id: 'title2',
//     key: 'title2'
//   }, 'This is heading 2')

//   const heading3 = React.createElement('h3', {
//     id: 'title3',
//     key: 'title3'
//   },
//   'This is heading 3')

//   const container = React.createElement('div',{
//     id: 'container',
//     className: 'title',
//   }, [heading, heading2, heading3]);
//   console.log(heading);

// const heading = <div id='container'>
// <h1 id='title1'>This is heading 1</h1>
// <h2 id='title2'>This is heading 1</h2>
// <h3 id='title3'>This is heading 1</h3>

// </div>

const Title = () => {
  return (
    <div>
      <p>Hello Varsha!!</p>
    </div>
  )
}

const HeadingComponent = () => {
  return (
    <div id='container'>
      <Title />
      <h1 id="title1">This is heading 1</h1>
      <h2 id="title1">This is heading 2</h2>
      <h3 id="title1">This is heading 3</h3>
    </div>
  )
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeadingComponent />);