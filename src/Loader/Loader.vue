<template>
    <div class="loader-container">
      <img class="loader" src="../assets/ap-loader.gif" alt="Loader" />
    </div>
  </template>
  
  <style scoped>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.4); 
  }
  
  .loader {
    width: 150px; 
    height:  150px; 
  }
  </style>
  