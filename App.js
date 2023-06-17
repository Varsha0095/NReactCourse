const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Hello World By React!"
  );

  const heading2 = React.createElement('h2', {
    id: 'title2'
  }, 'Heya!!')

  const container = React.createElement('div',{
    id: 'container'
  }, [heading, heading2])
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);