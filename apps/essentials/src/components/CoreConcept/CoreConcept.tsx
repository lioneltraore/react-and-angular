import { Concept } from "../../types/concept";
import './CoreConcept.module.scss';

export default function CoreConcept(props: Concept) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
