import React from 'react';
import './MainPage.css';

function MainPage({
  itemsProduct,
  currentNumberPage,
  setItemsProduct,
  setCurrentNumberPage,
  isLoad,
}) {
  const date = new Date();

  const dateString = `${date.getFullYear()}${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  console.log(dateString);
  return <div>{dateString}</div>;
}

export default MainPage;
