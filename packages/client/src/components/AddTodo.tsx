import { useState } from "react";
import { trpc } from "../lib/trpc";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodo = trpc.todo.create.useMutation();
  const trpcContetxt = trpc.useContext();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className=" text-sm font-semibold text-gray-900 mb-1">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter your todos here..."
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-900 mb-1">
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter the description here..."
          className="rounded-md"
        />
      </div>
      <button
        disabled={addTodo.isLoading}
        onClick={() => {
          addTodo.mutate(
            { title, description },
            {
              onSuccess: () => {
                trpcContetxt.todo.list.invalidate();
                setTitle("");
                setDescription("");
              },
            }
          );
        }}
        className={`bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white mt-2 py-3 px-3 rounded-md ${
          addTodo.isLoading && "opacity-50 cursor-not-allowed"
        }`}
      >
        {addTodo.isLoading ? "Loading..." : "Add Todo"}
      </button>
    </div>
  );
}
