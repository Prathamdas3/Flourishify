import { useContext, useState, useEffect } from 'react';

import TodoList from '../components/TodoSection';

export default function TodoPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  // const todoData = useContext(TodoContext);

  return (
    <div className="overflow-x-auto mt-10 mx-auto container">
      <table className="table">
        {/* head */}
        <thead className="mb-2">
          <tr>
            <th>
              <label>
                <button
                  className="btn btn-success"
                  onClick={() =>
                    document.getElementById('my_modal_1').showModal()
                  }
                >
                  Add
                </button>
              </label>
            </th>

            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
          </tr>
        </thead>
        <TodoList />
      </table>
      {/* This is the input section */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Title</h3>
          <input
            type="text"
            className="input input-bordered w-full max-w-[28rem]"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title here"
          />
          <p className="py-3">Title is required</p>
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <textarea
            className="textarea textarea-bordered min-w-[28rem]"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description here"
          />
          <p className="py-3">Description is required</p>
          <h3 className="font-bold text-lg mb-2">Tags</h3>
          <input
            type="text"
            className="input input-bordered w-full max-w-[28rem]"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags here"
          />
          {/* button section */}
          <div className="modal-action ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mr-2">Close</button>
              <button
                className="btn btn-success"
                onClick={() =>
                  todoData.addData(title, description, isComplete, tags)
                }
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
