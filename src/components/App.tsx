import { BrowserRouter } from "react-router"
import { TopBar } from "./topbar/Topbar"
import { MyRoutes } from "../routes"

function App() {

  return (
    <BrowserRouter>
      <div className="main">
        <TopBar />
        <div className="routes-container">
          <MyRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
