import connectDB from "../../../config/connectDB";
import Todos from "../../../model/todoModel";
import { getSession } from "next-auth/client";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await createdTodo(req, res);
      break;
  }
}

const createdTodo = async (req, res) => {
  try {
    const session = await getSession({ req });
    console.log({ session, todo: req.body.todo });
    if (!session) {
      return res.status(400).json({ msg: "Invalid Authentication!" });
    }
    const { userId } = session;
    const { todo } = req.body;

    if (!todo) return res.status(400).json({ msg: "Please add todo!" });

    const newTodo = new Todos({
      name: todo.toLowerCase(),
      user: userId,
    });
    await newTodo.save();
    res.json({ msg: "Success! Create a new Todo" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};