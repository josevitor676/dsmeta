import HeaderComponent from "./Components/HeaderComponent"
import SalesCard from "./Components/SalesCard"

function App() {
  return(
    <>
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
