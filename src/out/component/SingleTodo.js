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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
require("./styles.css");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const SingleTodo = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = (0, react_1.useState)(false);
    const [editTodo, setEditTodo] = (0, react_1.useState)(todo.todo);
    const handleDone = (id) => {
        setTodos(todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { isDone: !todo.isDone }) : todo));
    };
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleEdit = (e, id) => {
        e.preventDefault();
        setTodos(todos.map(todo => (todo.id === id ? Object.assign(Object.assign({}, todo), { todo: editTodo }) : todo)));
        setEdit(false);
    };
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [edit]);
    return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { draggableId: todo.id.toString(), index: index }, (provided, snapshot) => (react_1.default.createElement("form", Object.assign({ className: `todos__single ${snapshot.isDragging ? "drag" : ""}`, onSubmit: e => handleEdit(e, todo.id) }, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef }),
        edit ? (react_1.default.createElement("input", { ref: inputRef, value: editTodo, onChange: e => setEditTodo(e.target.value), className: "todos__single--text" })) : (todo.isDone ? (react_1.default.createElement("s", { className: "todos__single--text" }, todo.todo)) : (react_1.default.createElement("span", { className: "todos__single--text" }, todo.todo))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", { className: "icon", onClick: () => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                } },
                react_1.default.createElement(ai_1.AiFillEdit, null)),
            react_1.default.createElement("span", { className: "icon", onClick: () => handleDelete(todo.id) },
                react_1.default.createElement(ai_1.AiFillDelete, null)),
            react_1.default.createElement("span", { className: "icon", onClick: () => handleDone(todo.id) },
                react_1.default.createElement(md_1.MdDone, null)))))));
};
exports.default = SingleTodo;
//# sourceMappingURL=SingleTodo.js.map