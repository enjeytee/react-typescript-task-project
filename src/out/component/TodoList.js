"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles.css");
const SingleTodo_jsx_1 = __importDefault(require("./SingleTodo.jsx"));
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
;
const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "TodosList" }, (provided, snapshot) => (react_1.default.createElement("div", Object.assign({ className: `todos ${snapshot.isDraggingOver ? "dragactive" : ""}`, ref: provided.innerRef }, provided.droppableProps),
            react_1.default.createElement("span", { className: "todos__heading" }, "Active Tasks"),
            todos.map((todo, index) => (react_1.default.createElement(SingleTodo_jsx_1.default, { index: index, todo: todo, todos: todos, key: todo.id, setTodos: setTodos }))),
            provided.placeholder))),
        react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "TodosRemove" }, (provided, snapshot) => (react_1.default.createElement("div", Object.assign({ className: `todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`, ref: provided.innerRef }, provided.droppableProps),
            react_1.default.createElement("span", { className: "todos__heading" }, "Completed  Tasks"),
            completedTodos.map((todo, index) => (react_1.default.createElement(SingleTodo_jsx_1.default, { index: index, todo: todo, todos: completedTodos, key: todo.id, setTodos: setCompletedTodos }))),
            provided.placeholder))))
    // <div className="todos">
    //     {todos.map(todo => (
    //         <SingleTodo 
    //             todo={todo} 
    //             key={todo.id}
    //             todos={todos}
    //             setTodos={setTodos}
    //         />
    //     ))}
    // </div>
    );
};
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map