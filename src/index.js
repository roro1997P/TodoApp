import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml );


/* const contador = todoList.todos.filter( elem => elem.completado === false );
todoCount.innerHTML = contador.length; */