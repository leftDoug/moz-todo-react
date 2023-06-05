import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import {useState} from 'react';
import {nanoid} from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const toogleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(id === task.id)
        return {...task, completed: !task.completed};
      return task;
    });
    setTasks(updatedTasks);
  }
  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toogleTaskCompleted={toogleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  const button = props.buttons.map((button) => (
    <FilterButton
      name={button.name}
      key={button.id}
    />
  ));
  const addTask = (name) => {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks': 'task';
  const headingText = `${taskList.length} ${tasksNoun} remainig`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className='filters btn-group stack-exception'>
        {button}
      </div>
      <h2 id='list-heading'>{headingText}</h2>
      <ul 
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'>
        {taskList}
      </ul>
    </div>
  );
}

export default App;
