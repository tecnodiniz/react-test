import { useParams } from "react-router-dom";

function About() {
  return <h1>Hello ABout {useParams().id}</h1>;
}

export default About;
