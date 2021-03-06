import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import PrivateRoute from './routes/private-route'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import AddItem from './pages/AddItem/AddItem'
import ItemInfo from './pages/ItemInfo/ItemInfo'

const App = () => {


  return (
    <Layout>
      <Switch>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
        <PrivateRoute path="/" exact component={Home}/>
        <PrivateRoute path="/addItem" exact component={AddItem}/>
        <PrivateRoute path="/itemInfo/:id" exact component={ItemInfo}/>
      </Switch>
   </Layout>
  )
}

export default App
