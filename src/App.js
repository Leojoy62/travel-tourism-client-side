import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Packages from './Components/Packages/Packages';
import MyOrder from './Components/MyOrder/MyOrder';
import AboutUs from './Components/AboutUs/AboutUs';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import AddNewOrder from './Components/AddNewOrder/AddNewOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myorder/:packageId">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/addnewpackage">
              <AddNewOrder></AddNewOrder>
            </Route>
            <PrivateRoute path="/placeorder/:packageName">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
