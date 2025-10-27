import Form from './components/Form.jsx';

// Don't change the name of the 'App' 
// function and keep it a named export

export default function App() {
  function handleRestart() {}

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form />
    </div>
  );
}