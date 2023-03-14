import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import {lazy, Suspense, useEffect} from 'react'
import { LoginPage } from "./pages/Login";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from './components/Spinner'
import {validateToken} from './redux/auth/actions'
// const Home = lazy(() => import("./pages/Home"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Products = lazy(() => import("./pages/Products"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const LoginPage = lazy(() => import("./pages/Login"));
function ProtectedRoute({element}){
  const {isAuth} = useSelector(state=>state.authReducer);

  if (isAuth) {return element} else {<Navigate to='/login'/>}

}
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const localStorageToken = !!localStorage.getItem('token');
const {loading} = useSelector(state=>state.authReducer)

useEffect(()=> {
if(localStorageToken) dispatch(validateToken()).then(res=> {
 if(res){
  navigate('./login')
} 
})
},[localStorageToken])


if(loading) return (<Spinner />)
  return (
  
    <div className="App">
      <Suspense fallback='Loading...'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/products" element={<ProtectedRoute element= {<Products/>} />} />
        <Route path="/carts" element={<ProtectedRoute element= {<Cart/>} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </div>
    
    
  )
}


export default App