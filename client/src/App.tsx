import {BrowserRouter, Route, Routes} from "react-router-dom";

import { Home, Login, SignUp, Product, PageNotFound } from index.js;
function App() {

  return (
    <>
      <BrowserRouter>
                <NavBar/>
          <Routes>
            <Route index element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="signup" element={<SignUp/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="product/:productID" element={<Product/>} />
          <Route path="*" element={<PageNotFound/>} />
          </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
