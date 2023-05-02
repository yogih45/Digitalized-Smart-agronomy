import  {Routes,Route,} from "react-router-dom";
import About from "./about";
import Contact from "./contact"
import Blogs from "./blogs"
import Marketplace from "./marketplace"
import Products from "./products"
import Dashboard from "./dashboard/Dashboard";



function Links(){   
    return(
        <div>
               <Routes>
                 <Route exact path="/"  Component={Dashboard}/>
                 <Route path="blogs" Component={Blogs } />
                 <Route path="products" Component={Products} />
                 <Route path="marketplace" Component={Marketplace } />
                 <Route path='contact' Component={Contact} />
                 <Route path="about" Component={About } />


               </Routes>  
        </div>
    )
}
export default Links;