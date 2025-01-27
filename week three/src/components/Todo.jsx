import { Component } from 'react';
import TodoList from './TodoList';

const emptyTodoClass = {
  width: '100%',
  height: '10rem',
  backgroundColor: 'white',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontStyle: 'italic',
};

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      text: '',
      foundTodo: null,
    };
  }

  componentDidMount() {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    this.setState({ list: savedTodos });
    console.log('Component mounted. Loaded todos from localStorage.');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.list !== this.state.list) {
      localStorage.setItem('todos', JSON.stringify(this.state.list));
      console.log('List updated. Saved todos to localStorage.');
    }
  }

  componentWillUnmount() {
    console.log('Component is being unmounted.');
  }

  addTodo = () => {
    const { list, text, foundTodo } = this.state;
    const id = new Date().toString();

    if (foundTodo) {
      const updatedList = list.map((todo) =>
        todo.id === foundTodo.id ? { ...todo, todo: text } : todo
      );
      this.setState({ list: updatedList, foundTodo: null, text: '' });
    } else {
      const newTodo = { id, todo: text, isCompleted: false };
      this.setState({ list: [...list, newTodo], text: '' });
    }
  };

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  deleteTodo = (id) => {
    const { list, foundTodo } = this.state;
    const updatedList = list.filter((todo) => todo.id !== id);

    this.setState({
      list: updatedList,
      ...(foundTodo?.id === id && { foundTodo: null, text: '' }),
    });
  };

  editTodo = (id) => {
    const { list } = this.state;
    const foundTodo = list.find((todo) => todo.id === id);
    this.setState({ foundTodo, text: foundTodo.todo });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    if (!text.trim()) return;
    this.addTodo();
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { list, text } = this.state;

    return (
      <div className='container'>
        <section className='todo-container'>
          <form className='form' onSubmit={this.onSubmit}>
            <input
              type='text'
              placeholder='e.g Read a book'
              value={text}
              onChange={this.handleInputChange}
            />
            <button type='submit'>+</button>
          </form>
          {list.length !== 0 ? (
            <TodoList
              list={list}
              deleteTodo={this.deleteTodo}
              editTodo={this.editTodo}
              toggleComplete={this.toggleComplete}
            />
          ) : (
            <div style={emptyTodoClass}>
              <p>No todo added yet</p>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Todo;
