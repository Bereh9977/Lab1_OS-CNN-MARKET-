import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import MainContent from './components/MainContent/MainContent'
import AsideFacts from './components/AsideFacts/AsideFacts'
import CatalogItems from './components/CatalogItems/CatalogItems'
import Form from './components/Form/Form'

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import fallingProducts from './components/js/fallingProducts'
import displayNavigation from './components/js/displayNavigation'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fallingProducts()
    displayNavigation()
  }, [])

  return (
    <>
      <Header />
      <Navigation
        text1={<a href="/">Головна сторінка</a>}
        text2={<a href="/catalog">Каталог</a>}
        text3={<a href="/feedback">Зворотній зв’язок</a>}
      />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <MainContent />
              <AsideFacts />
            </main>
          }
        />

        <Route path="/catalog" element={<CatalogItems />} />

        <Route
          path="/feedback"
          element={
            <main className="main">
              <Form />
            </main>
          }
        />

        <Route
          path="*"
          element={
            <main className="main">
              <MainContent />
              <AsideFacts />
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
