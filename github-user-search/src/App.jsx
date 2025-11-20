import Search from './components/Search';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Search />
      </div>
    </ErrorBoundary>
  );
}

export default App;