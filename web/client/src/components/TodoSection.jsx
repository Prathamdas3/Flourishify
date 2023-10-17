import React from 'react';

export default function InputSection() {
  //   const todoData = useContext(TodoContext);

  return (
    <>
      <tbody>
        {todoData.allData &&
          todoData.allData.map((todo) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{todo.title}</div>
                  </div>
                </div>
              </td>
              <td>{todo.description.slice(0, 35)}...</td>
              <td>{todo.tags}</td>
              <th>
                <button
                  className="btn btn-success btn-xs mr-2"
                  onClick={() =>
                    document.getElementById('my_modal_2').showModal() ||
                    todoData.showTodo(todo.id)
                  }
                >
                  Details
                </button>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => todoData.deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </th>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    {todoData.oneData && todoData.oneData.title}
                  </h3>
                  <p className="py-4">
                    {todoData.oneData && todoData.oneData.description}
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </tr>
          ))}
      </tbody>
    </>
  );
}
