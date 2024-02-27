import React, { useState } from 'react';
import MainPage from '../MainPage/MainPage.jsx';
import Header from '../Header/Header.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import Footer from '../Footer/Footer.jsx';
import postAPI from '../../utils/mainAPI';
import './App.css';

function App() {
  const { isLoad, setIsload } = useState(false);
  const { itemsProduct, setItemsProduct } = useState([]);
  const { currentNumberPage, setCurrentNumberPage } = useState(0);
  console.log('sdfdsdfds');

  return (
    <div>
      <Header theme="ligth" />
      {isLoad ? (
        <Preloader type="page" />
      ) : (
        <MainPage
          itemsProduct={itemsProduct}
          currentNumberPage={currentNumberPage}
          setItemsProduct={setItemsProduct}
          setCurrentNumberPage={setCurrentNumberPage}
          theme="ligth"
        />
      )}

      <Footer theme="ligth" />
    </div>
  );
}

export default App;
