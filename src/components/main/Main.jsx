import "./main.css";
import image from "./amir1.jpg"

function Main() {
  return (
    <div className="main">
      <h1 className="about">About me</h1>
      <main className="postmain">
        <img src={image} alt="Image" />
        <p>
          I graduated from Gimnazija high school in Novi Pazar. I am a student
          at the State University in Novi Pazar, studying computer technology.
          Certified by Centar NIT as a Javascript and ReactJS
          developer.Interested in learning new technologies and highly motivated
          to do what I love.
        </p>
      </main>
    </div>
  );
}

export default Main;
