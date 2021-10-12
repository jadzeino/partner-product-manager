import './App.css';
import {Home} from "./components/home";
import {AddPartner} from "./components/add-partner";
import {EditPartner} from "./components/edit-partner";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {PartnerProducts} from "./components/product/partner-products";
import {AddProduct} from "./components/product/add-product";
import {EditProduct} from "./components/product/edit-product";
import {GlobalProvider} from "./context/global-state";
import {ProductProvider} from "./context/product-state";

function App() {
  return (
    /*<div style={{maxWidth:"30rem",margin:"4rem auto"}}>*/
          <div>
            <GlobalProvider>
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/add-partner" component={AddPartner} AddPartner/>
                      <Route path="/edit-partner/:name" component={EditPartner} />
                      <ProductProvider>
                      {/*<Route path="/list-product" component={PartnerProducts} />*/}
                      <Route path="/partner/:partner/products/" component={PartnerProducts} />
                      <Route path="/add-product/:partner" component={AddProduct} />
                      <Route path="/edit-product/:partner/:id" component={EditProduct} />
                      </ProductProvider>
                  </Switch>
              </BrowserRouter>
            </GlobalProvider>
          </div>
  );
}

export default App;
