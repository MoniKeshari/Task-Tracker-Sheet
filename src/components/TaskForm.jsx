// components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, clearTaskToEdit } from '../redux/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state) => state.task.taskToEdit);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name); // Pre-populate input when editing a task
    } else {
      setTaskName('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      return; // Prevent adding task if input is empty or only spaces
    }

    if (taskToEdit) {
      // If editing an existing task
      const updatedTask = {
        ...taskToEdit,
        name: taskName,
      };
      dispatch(updateTask(updatedTask));
      dispatch(clearTaskToEdit()); // Clear taskToEdit from the state
    } else {
      // If adding a new task
      const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false,
        priority: 'normal',
        category: 'general',
      };
      dispatch(addTask(newTask)); // Add new task
    }

    setTaskName(''); // Clear input after submitting
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
