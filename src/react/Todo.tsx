import React from "react";
import useBlight from "../lib";

interface Items {
  id: number;
  text: string;
  done: boolean;
  list: string[];
}

const Todo = () => {
  const $items = useBlight<Items[]>([
    { id: 1, text: "Text", done: true, list: ["1", "2"] },
  ]);

  const addItem = () => {
    $items.push({
      id: Date.now(),
      text: "New item",
      done: false,
      list: [],
    });
  };

  const handleChangeDone = (item: Items) => {
    // just set the value :)
    item.done = !item.done;
  };

  return (
    <div>
      <h2>Todo list:</h2>
      <table>
        {$items.map((item) => (
          <tr key={item.id}>
            <td>
              {" "}
              <input
                type="checkbox"
                onChange={() => handleChangeDone(item)}
              ></input>{" "}
            </td>
            <td>
              {" "}
              <strong>{item.done ? "DONE!" : ""}</strong>{" "}
            </td>
            <td>
              <strong>{item.text}</strong>
              <br />
              <input
                type="text"
                value={item.text}
                onChange={({ target }) => (item.text = target.value)}
              />
            </td>
            <td>
              {item.list.join(", ")}
              <br />
              <button
                onClick={() => item.list.push((Math.random() * 10).toFixed(0))}
              >
                add
              </button>
            </td>
          </tr>
        ))}
        <button onClick={addItem}>Add</button>
      </table>
    </div>
  );
};

export default Todo;
