import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Report from './pages/report/report'
import Performance from './pages/performance/performance'
import Customers from './pages/customers/customers'
import Orders from './pages/orders/orders'
import Settings from './pages/settings/settings'
import Help from './pages/helpCenter/help'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<Report />} path='/report'></Route>
      <Route element={<Performance />} path='/performance'></Route>
      <Route element={<Customers />} path='/customers'></Route>
      <Route element={<Orders />} path='/orders'></Route>
      <Route element={<Settings />} path='/settings'></Route>
      <Route element={<Help />} path='/help-center'></Route>
    </Routes>
  )
}

export default App
