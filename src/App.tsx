import { useState, useEffect, useCallback } from 'react'
import './App.scss'
import { Header } from './header/header'
import { Navigation } from "./navigation/navigation"
import { CardList } from "./cardList/cardList"
import { checkDevice } from "./utils/checkDevice"
import { Sidebar } from "./navigation/sidebar/sidebar"

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const callbacks = {
    sidebarClose: useCallback(() => {
      setIsSidebarOpen(false);
    }, []),
    sidebarOpen: useCallback(() => {
      setIsSidebarOpen(true);
    }, []),
  }

  useEffect(() => {
    const handleResize = () => {
      const isDesk = checkDevice("desktop");
      setIsDesktop(isDesk);
    }
    handleResize()

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div onClick={callbacks.sidebarClose}>
    <div className="app">
      <Header isDesktop={isDesktop} openSidebar={callbacks.sidebarOpen}/>
      {
        isDesktop ?
          <Navigation />
          : <Sidebar isOpen={isSidebarOpen} close={callbacks.sidebarClose}>
            <Navigation />
          </Sidebar>
      }
      <CardList />
    </div>
    </div>
  )
}

export default App
