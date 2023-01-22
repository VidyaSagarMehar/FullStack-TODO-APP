import './App.css';
import { Form } from './components/Form';
import Login from './components/Login.js';
import Signup from './components/Signup';
import { TodoList } from './components/TodoList';
import './index.css';

function App() {
	return (
		<div>
			<Form />
			<TodoList />
			<Login />
			<Signup />
		</div>
	);
}

export default App;
