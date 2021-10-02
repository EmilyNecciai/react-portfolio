import React from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer'
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
