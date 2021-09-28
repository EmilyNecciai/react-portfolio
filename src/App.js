import React, { useState } from 'react';
// import Navigation from './components/Navigation';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>

      <main>
        <p>Hi!</p>
      </main>
    </div>
  );
}

export default App;
