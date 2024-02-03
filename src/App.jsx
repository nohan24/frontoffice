import {Route, Routes} from "react-router-dom";
import Header from "@/components/Header.jsx";
import List from "@/pages/List.jsx";

function App() {
  return(
      <>
        <Header/>
          <Routes>
            <Route path="/" exact element={<List />}/>
          </Routes>
      </>
  )
}

export default App;
