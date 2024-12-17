<template>
    <div class="container">
      <div class="worker-photo">
        <img src="../assets/imagens/ggg.png" alt="Foto do Trabalhador" />
      </div>

     
      <div class="worker-info">
        <h2 class="worker-name">Roberto</h2>
        <p class="worker-description">
          Roberto é um eletricista altamente qualificado com mais de 10 anos de experiência em instalações residenciais e industriais.
        </p>
        <div class="worker-rating">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
          <p>5.0 (200 avaliações)</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
 
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 17.9rem;
  }
  
  .worker-photo img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
  }
  
  .worker-info {
    max-width: 600px;
  }
  
  .worker-name {
    font-size: 4rem;
    font-weight: bold;
    color: #333;
  }
  
  .worker-description {
    font-size: 2rem;
    color: #555;
    line-height: 1.5;
    margin: 10px 0;
  }
  
  .worker-rating {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    color: #f39c12;
  }
  
  /* Responsividade */
  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding: 15px;
    }
  
    .worker-photo img {
      width: 200px;
      height: 200px;
    }
  
    .worker-info {
      text-align: center;
    }
  
    .worker-name {
      font-size: 3rem;
    }
  
    .worker-description {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 430px) {
    .worker-photo img {
      width: 100px;
      height: 100px;
    }
  
    .worker-name {
      font-size: 1.8rem;
    }
  
    .worker-description {
      font-size: 1.5rem;
    }
  
    .worker-rating {
      font-size: 0.9rem;
  
    }
  }
  </style>
  