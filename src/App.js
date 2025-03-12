



import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Header />
        <TaskForm />
        <TaskList />
      </PersistGate>
    </Provider>
  );
};
export default App;
