import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Svg from "../common/Svg";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import {
  deleteUserTodoService,
  updateUserTodoService
} from "../../firebase/functions/TodoActions";
import { useDispatch } from "react-redux";
import { getTodoList } from "../../Redux/Actions/User.actions";

interface todo {
  todoId: string;
  todoName: string;
  checked: boolean;
}

const TodoComponent: React.FC<todo> = ({ todoId, todoName, checked }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [editTodo, setEditTodo] = React.useState(false);
  const [todoNameInput, setTodoNameInput] = React.useState(todoName);

  useEffect(() => {
    if (checked) setIsChecked(checked);
  }, []);

  const inputRef: any = useRef();

  const dispatch = useDispatch();

  const editHandler = () => {
    updateUserTodoService(todoId, todoNameInput, isChecked);
    dispatch(getTodoList());
  };

  const deleteHandler = () => {
    deleteUserTodoService(todoId);
    dispatch(getTodoList());
  };

  useEffect(() => {
    if (editTodo) inputRef.current.focus();
  }, [editTodo]);

  return (
    <div className="todo flex justify-start m-1 w-full">
      <div className="w-full">
        <input
          className=" mx-2 mt-1 border-0 outline-none focus:outline-none transition duration-200"
          onClick={() => {
            setIsChecked(!isChecked);
            setEditTodo(false);
          }}
          checked={isChecked}
          type="checkbox"
        />
      </div>
      <div
        className={`break-words  text-gray-900 font-medium w-full ${
          isChecked ? "line-through" : ""
        }`}>
        {editTodo === true ? (
          <input
            id="editTodo"
            className="bg-transparent focus:outline-none w-full"
            value={todoNameInput}
            ref={inputRef}
            onChange={e => {
              setTodoNameInput(e.target.value);
            }}
            onKeyPress={e => e.key === "Enter" && editHandler()}
          />
        ) : (
          <h1 className="w-full">{todoName}</h1>
        )}
      </div>
      <div className="tododelete hidden">
        <div
          className="cursor-pointer"
          onClick={() => {
            setEditTodo(!editTodo);
          }}>
          <Svg type="editTodo" />
        </div>
        <div className="cursor-pointer" onClick={deleteHandler}>
          <Svg type="deleteTodoComponent" />
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;

TodoComponent.propTypes = {
  todoId: PropTypes.string.isRequired,
  todoName: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};
