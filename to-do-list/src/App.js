import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App">
     <Header />
     <Form />
     <Tasks />
    </div>
  );
}

export default App;
