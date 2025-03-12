import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const { tasks, filters } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  // Log the tasks state to verify it's updated
  console.log('Current Tasks:', tasks);

  const filteredTasks = tasks
    .filter((task) => {
      if (filters.status === 'completed') return task.completed;
      if (filters.status === 'active') return !task.completed;
      return true;
    })
    .filter((task) => task.name.toLowerCase().includes(filters.search.toLowerCase()));

  return (
    <div className="task-list-container">
      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter({ status: 'all' }))}>All</button>
        <button onClick={() => dispatch(setFilter({ status: 'completed' }))}>Completed</button>
        <button onClick={() => dispatch(setFilter({ status: 'active' }))}>Active</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => dispatch(setFilter({ search: e.target.value }))}
        className="search-input"
      />
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p style={{ textAlign: 'center' }}>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
