import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import routes from './routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

export function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const { path, page } = route
            const Page = page
            const Layout = route.isShowHeader ? DefaultComponent : React.Fragment
            return <Route path={path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App