import React, { useEffect, useRef, useState } from "react";
import { addLinksService } from "../../firebase/functions/LinksActions";
import SvgButton from "../button/SvgButton";
import Svg from "../common/Svg";
import TodoComponent from "./TodoComponent";
import {
  addTodoService,
  deleteUserTodoService
} from "../../firebase/functions/TodoActions";
import { getTodoList } from "../../Redux/Actions/User.actions";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Redux/Store";
import Loader from "../common/Loader";

const TodoDropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
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
      <div onClick={() => setOpenDropDown(!openDropDown)}>
        <SvgButton type="todo" position="bottom-0 right-0" />
      </div>
      <div
        className={` ${
          openDropDown === true ? "" : "hidden"
        }  text-gray-700 pt-4 absolute bottom-0 right-0 mb-16 mr-6 `}>
        <ul className="glasstodo w-full h-full">
          <div
            style={{
              minWidth: "20rem",
              minHeight: "15rem",
              maxHeight: "25rem",
              overflowY: "auto",
              overflowX: "hidden"
            }}
            className="w-full">
            <div className="flex my-auto ">
              <h1 className="font-bold text-gray-900 m-2 text-lg">Today</h1>
              <div className="div my-auto">
                <Svg type="dropdown" />
              </div>
            </div>
            <div className="w-full h-full">
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
                  <div className="absolute inset-0 flex w-full h-full justify-center items-center">
                    <h1 className="text-sm my-auto text-gray-900">
                      No Todo found.
                    </h1>
                    <button
                      onClick={() => {
                        setAddTodo(true);
                        setTimeout(() => {
                          inputRef.current.focus();
                        }, 500);
                      }}
                      className=" ml-2 p-1 font-bold rounded-full text-white bg-gray-900 px-2 text-sm focus:outline-none">
                      Add todo
                    </button>
                  </div>
                )}
            </div>
          </div>
          <div>
            <input
              className="w-full p-1 border-none focus:outline-none bg-transparent m-1 text-white"
              placeholder="add todo"
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
