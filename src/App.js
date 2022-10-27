import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toast';
import './App.css';
import { router } from './router/router';


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App;
