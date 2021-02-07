import { Todo } from './todo.class';

export class TodoList {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.actualizarContador();
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.actualizarContador();
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {
        this.actualizarContador()

        for ( const todo of this.todos ) {

            if ( todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.actualizarContador();
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
   
        this.actualizarContador();
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage() {

        this.todos = JSON.parse(localStorage.getItem('todo')) || [];
        this.actualizarContador();
        this.todos = this.todos.map( Todo.fromJson );

    }

    actualizarContador(){
        const contador = this.todos.filter( elem => elem.completado === false );
        return contador.length;
    }

}