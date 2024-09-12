
export default function TabButton(props: any) {

  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
