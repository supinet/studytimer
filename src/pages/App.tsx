import React, { useState } from 'react';
import Form from '../components/forms';
import List from '../components/list';
import style from './app.module.scss';
import Stopwatch from '../components/stopwatch';
import {ITask} from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(historyTasks => historyTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(historyTasks => historyTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks}/>
     <List
        tasks={tasks}
        selectTask={selectTask}
      />
     <Stopwatch
      selected={selected}
      finishTask={finishTask}
      />
    </div>
  );
}

export default App;
