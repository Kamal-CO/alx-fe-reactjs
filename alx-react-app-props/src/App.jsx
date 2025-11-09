// App.jsx
import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
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

      {/* Context API Demo Section */}
      <div style={{
        padding: '30px',
        backgroundColor: '#ecf0f1',
        margin: '20px',
        borderRadius: '15px',
        border: '2px solid #3498db'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '20px'
        }}>
          Context API Demo
        </h2>
        <ProfilePage />
      </div>

      <Footer />
    </UserContext.Provider>
  )
}

export default App