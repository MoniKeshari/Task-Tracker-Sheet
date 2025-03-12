// components/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask, setTaskToEdit } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id)); // Toggle task completion status
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Delete task
  };

  const handleEdit = () => {
    dispatch(setTaskToEdit(task)); // Set task to edit in Redux
  };

  return (
    <div className="task-item">
      <div className={`task-name ${task.completed ? 'completed' : ''}`}>
        {task.name}
      </div>
      <div className="task-actions">
        <button onClick={handleToggleStatus} className="task-btn">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleEdit} className="task-btn">Edit</button>

        <button onClick={handleDelete} className="task-btn delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
