import './App.css'

import Header from './components/Header'
import IndexFunctionalities from './components/IndexFunctionalities'
import IndexHero from './components/IndexHero'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SubHeader from './components/SubHeader';

function App() {

  return (
    <>
      <Header />
      <main>
        <SubHeader />
        {/* <IndexHero /> */}
        {/* <IndexFunctionalities /> */}
      </main>
    </>
  )
}

export default App
