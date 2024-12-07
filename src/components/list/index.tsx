import { ITask } from '../../types/task';
import Item from './item';
import style from './list.module.scss';

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Day studies</h2>
            <ul>
                {tasks.map(item => (
                  <Item
                    selectTask={selectTask}
                    key={item.id}
                    {...item}
                  /> 
                ))}
            </ul>
        </aside>
    )
}

export default List;