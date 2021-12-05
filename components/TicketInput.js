import React, { useState } from "react";
import axios from "axios";
const TicketInput = () => {
  const [todo, setTodo] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/todo", { todo });

    console.log(res);
  };
  return (
    <div>
      <h2 className="text-center text-secondary mt-4">Ticket List</h2>

      <form className="input-group mt-4 mb-5 shadow" onSubmit={handlerSubmit}>
        <input
          type="text"
          value={todo}
          className="form-control"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-dark">Create</button>
      </form>
    </div>
  );
};

export default TicketInput;
