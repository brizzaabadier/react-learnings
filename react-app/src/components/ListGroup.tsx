import { MouseEvent, useState } from "react";

// { items:[], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string)=> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   const getMessage = (message: string) => {
  //     return items.length === 0 ? <p>{message}</p> : null;
  //   };

  // handle single parameter
  const handleClick = (e: MouseEvent) => console.log("clicked", e);
  // handling multiple parameters
  // arrow funciton and then calling the function (e, ...) => { e.preventDefault(); otherFunction(...);
  // useCallback hook

  // useState hook a fn to tap builtin feature in react
  // change variable over time
  const [selectedIndex, setSelectedIndex] = useState(-1); // init value
  // const [name, setName] = useState('');
  //   arr[0]; // variable (selectedIndex)
  //   arr[1]; // udpater function

  return (
    // React doesn't allow multiple dom
    // thus it has to be wrapped with another dom/tag, Fragment or <>
    <>
      <h1>{heading}</h1>
      {
        // always ternary condition because && will not evaluate the left hand side when right side is already falsy
        items.length === 0 ? <p>No items found </p> : null
        // items.length  === 0 && <p>No items found </p>
      }
      <ul className="list-group">
        {
          // JSX does not allow script without curly braces
          items.map((item, index) => (
            <li
              className={
                "list-group-item " + (selectedIndex === index ? "active" : "")
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
