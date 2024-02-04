import {Navigate, Route, Routes} from "react-router-dom";
import Header from "@/components/Header.jsx";
import List from "@/pages/List.jsx";
import Favoris from "@/pages/favoris.jsx";
import Message from "@/pages/Message.jsx";
import Login from "@/pages/Login.jsx";
import Logout from "@/pages/Logout.jsx";
import Detail from "@/pages/Detail.jsx";

function App() {
    var connected = localStorage.getItem("auth");
  return(
      <>
        <Header/>
          <Routes>
            <Route path="/" exact element={<List />}/>
              <Route path="/favoris" element={
                      connected ? <Favoris/> : <Navigate to="/login"/>
              }>
              </Route>
              <Route path="/message" element={ connected ? <Message/> : <Navigate to="/login"/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
      </>
  )
}

export default App;
