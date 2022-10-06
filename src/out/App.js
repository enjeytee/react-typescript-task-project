"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
require("./App.css");
const InputField_jsx_1 = __importDefault(require("./component/InputField.jsx"));
const TodoList_jsx_1 = __importDefault(require("./component/TodoList.jsx"));
const App = () => {
    const [todo, setTodo] = (0, react_1.useState)("");
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [completedTodos, setCompletedTodos] = (0, react_1.useState)([]);
    const handleAdd = (e) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
        ;
    };
    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination)
            return;
        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return;
        let add, active = todos, complete = completedTodos;
        if (source.droppableId === "TodosList") {
            add = active[source.index];
            active.splice(source.index, 1);
        }
        else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }
        ;
        if (destination.droppableId === "TodosList") {
            active.splice(destination.index, 0, add);
        }
        else {
            complete.splice(destination.index, 0, add);
        }
        ;
        setCompletedTodos(complete);
        setTodos(active);
    };
    return (react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
        react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("span", { className: "heading" }, "Taskify"),
            react_1.default.createElement(InputField_jsx_1.default, { todo: todo, setTodo: setTodo, handleAdd: handleAdd }),
            react_1.default.createElement(TodoList_jsx_1.default, { todos: todos, setTodos: setTodos, completedTodos: completedTodos, setCompletedTodos: setCompletedTodos }))));
};
exports.default = App;
//# sourceMappingURL=App.js.map