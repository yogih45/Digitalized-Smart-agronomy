import {Route,Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";

import Products from "./Components/products";
import Contact from "./Components/contact"
import Blogs from "./Components/blogs"
import Marketplace from "./Components/marketplace"
import About from "./Components/about";



function App() {
  return (
    <div className="App">
      
      <Routes>

          <Route path="/" element={<Dashboard/>}></Route>

          <Route path="products" element={<Products />}></Route>
          <Route path="marketplace" element={<Marketplace />}></Route> 
          <Route path='contact' element={<Contact />}></Route>
          <Route path="about" element={<About /> } ></Route>
          <Route path="blogs" element={<Blogs /> }></Route>

          
      </Routes>
    </div>
  );
}
export default App;
