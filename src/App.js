import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.css"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProductedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/">
        <Route index element={<ProductedRoute>
          <Home/>
          </ProductedRoute>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
