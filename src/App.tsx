import { Link } from "react-router"
import Header from "./Components/Header"

function App() {

  return (
    <div>
      <Header />
      <div className="py-5 md:py-10 px-2 flex items-start md:items-center h-[80vh] bg-[url(/src/assets/expense-tracker-hero.jpg)] bg-no-repeat bg-cover bg-center">
        <h2 className="text-slate-400 max-w-[200px] md:max-w-[300px] md:ml-15 md:text-2xl">
          Simplify your money management with Expense Tracker
          <Link className="ml-2 text-cyan-400" to={'/dashboard'}>Here</Link>
        </h2>
      </div>
    </div>
  )
}

export default App
