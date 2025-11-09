// App.jsx
import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <WelcomeMessage />
      
      {/* User Profile Section */}
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />

        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Passionate about technology and cooking" 
        />
        
        <UserProfile 
          name="Carol" 
          age="28" 
          bio="Travel enthusiast and book lover" 
        />
      </div>

      <MainContent />
      
      {/* Counter Component Section */}
      <Counter />

      <Footer />
    </>
  )
}

export default App