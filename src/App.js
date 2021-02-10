import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  function runToast(){
    toast("here simple toast", {
      position: "top-center",
      autoClose: 5000, 
      type: "success"
    })
  }

  return (
    <div className="App">
      <ToastContainer />
      <button onClick={runToast}>I'm a notification</button>
    </div>
  );
}

export default App;
