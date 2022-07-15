import HeaderComponent from "./Components/HeaderComponent"
import SalesCard from "./Components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <>
    <ToastContainer/>
      <HeaderComponent/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>  
    </>
  )
}

export default App
