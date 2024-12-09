import { useOptimistic, useRef, useState } from "react";

const Example2 = () => {
  const formRef = useRef();
  const [todos, setTodos] = useState(["Buy food", "Clean house"]);
  const [optimisticTodos, addOptimisticTodos] = useOptimistic(todos, (prev, value) => [...prev, value]);

  const addTodo = async (formData) => {
    const value = formData.get("todo");
    formRef.current.reset();
    addOptimisticTodos(value);

    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    return setTodos((prev) => [...prev, value]);
  };

  return (
    <div>
      <h1>useOptimistic</h1>
      <p>Todo list:</p>
      {optimisticTodos.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
      <form action={addTodo} ref={formRef}>
        <input name="todo" />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default Example2;
