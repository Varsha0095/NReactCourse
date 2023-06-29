import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? (
        <button
          className="border-2 rounded-md border-amber-100 font-semibold w-20 text-amber-100 bg-blue-950"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="border-2 rounded-md border-blue-950 font-semibold w-20 text-blue-950 bg-amber-100"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibility, setVisibility] = useState("about");
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible = {visibility === "about"}
        setIsVisible = {() => setVisibility("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibility === "team"}
        setIsVisible = {() => setVisibility("team")}
      />
      <Section
        title={"Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibility === "careers"}
        setIsVisible = {() => setVisibility("careers")}
      />
    </div>
  );
};

export default Instamart;
