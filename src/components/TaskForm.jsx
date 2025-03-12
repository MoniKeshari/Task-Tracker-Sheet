import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, clearTaskToEdit } from '../redux/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state) => state.task.taskToEdit);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    } else {
      setTaskName('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      return;
    }

    if (taskToEdit) {
      const updatedTask = {
        ...taskToEdit,
        name: taskName,
      };
      dispatch(updateTask(updatedTask));
      dispatch(clearTaskToEdit());
    } else {
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
        priority: 'normal',
        category: 'general',
      };
      dispatch(addTask(newTask));
    }

    setTaskName('');
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Enter task"
        className="task-input"
        maxLength={50}
      />
      <button type="submit" className="task-submit-btn">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
