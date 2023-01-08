import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoService } from "../../firebase/functions/TodoActions";
import { getTodoList } from "../../Redux/Actions/User.actions";
import { RootStore } from "../../Redux/Store";
import SvgButton from "../common/button/SvgButton";
import Loader from "../common/Loader";
import TodoComponent from "./TodoComponent";

const TodoDropdown = ({
  openTasks,
  setOpenTasks
}: {
  openTasks: boolean;
  setOpenTasks: any;
}) => {
  const [addTodoValue, setAddTodoValue] = useState("");
  const [addTodo, setAddTodo] = useState(false);

  const TodoDataRedux: any = useSelector(
    (state: RootStore) => state.userTodoData
  );

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    addTodoService(addTodoValue);
    setAddTodoValue("");
    dispatch(getTodoList());
  };

  const inputRef: any = useRef();

  return (
    <div>
      <div onClick={() => setOpenTasks(!openTasks)}>
        <SvgButton type="todo" position="bottom-0 right-0" />
      </div>
      <div
        className={` ${
          openTasks === true ? "" : "hidden"
        }  text-gray-700 pt-4 absolute bottom-0 right-0 mb-16 mr-6 `}>
        <ul className="glasshover h-full w-full">
          <div
            style={{
              minWidth: "25rem",
              maxWidth: "25rem",
              minHeight: "20rem",
              maxHeight: "25rem",
              overflowY: "auto",
              overflowX: "hidden"
            }}
            className="w-full">
            <div className="flex my-auto">
              <h1 className="font-bold m-2 text-white  text-lg">Today</h1>
              {/* <div className="div my-auto">
                <Svg type="dropdown" />
              </div> */}
            </div>
            <div className="h-full w-full">
              <div>
                {TodoDataRedux.data ? (
                  TodoDataRedux.data.map((link: any) => {
                    return (
                      <li className="w-full" key={link.id}>
                        <TodoComponent
                          todoId={link.id}
                          todoName={link.data.todoName}
                          checked={link.data.checked}
                        />
                      </li>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </div>
              {TodoDataRedux.loading === false &&
                TodoDataRedux.data.length === 0 && (
                  <div className="absolute flex h-full inset-0 items-center justify-center w-full">
                    <h1 className="my-auto text-white  text-sm">
                      No Todo found.
                    </h1>
                    <a
                      onClick={() => {
                        setAddTodo(true);
                        setTimeout(() => {
                          inputRef.current.focus();
                        }, 500);
                      }}
                      className="bg-white focus:outline-none font-bold ml-2 p-1 px-2 rounded-full text-sm text-white hover:underline hover:text-purple">
                      Add todo
                    </a>
                  </div>
                )}
            </div>
          </div>
          <div>
            <input
              className="bg-transparent border-none focus:outline-none m-1 p-1 placeholder-black text-white w-full"
              placeholder="Add todo here..."
              ref={inputRef}
              value={addTodoValue}
              onChange={e => setAddTodoValue(e.target.value)}
              onKeyPress={e => e.key === "Enter" && addTodoHandler()}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TodoDropdown;
