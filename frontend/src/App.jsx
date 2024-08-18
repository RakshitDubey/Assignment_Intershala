import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
      setSearchTerm(term);
  };

  return (
    <div>
      <Navbar/>
      <SearchBar onSearch={handleSearch}/>
      <CardList searchTerm={searchTerm}/>

      <Footer/>
    </div>
  )
}

export default App