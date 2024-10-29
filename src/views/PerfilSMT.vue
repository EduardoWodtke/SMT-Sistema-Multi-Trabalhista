<template>
    <div class="profile-page">
      <!-- Cabeçalho do Perfil -->
      <div class="profile-header">
        <div class="banner">
          <img :src="bannerImage" alt="Banner" class="banner-image" />
        </div>
        <div class="profile-info">
          <img :src="profileImage" alt="Foto de Perfil" class="profile-image" />
          <h2>{{ userName }}</h2>
          <p>{{ bio }}</p>
          <!-- Botão de Editar Perfil -->
          <button @click="openEditProfileModal">Editar Perfil</button>
        </div>
      </div>
  
      <!-- Feed de Publicações -->
      <div class="post-feed">
        <div v-for="post in posts" :key="post.id" class="post">
          <p>{{ post.text }}</p>
          <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
        </div>
      </div>
  
      <!-- Botão de Criar Publicação -->
      <button class="create-post-button" @click="openCreatePostModal">+</button>
  
      <!-- Modal de Edição de Perfil -->
      <div v-if="showEditProfileModal" class="modal-overlay">
        <div class="modal-content">
          <h3>Editar Perfil</h3>
          <label>Nova Foto de Perfil:</label>
          <input type="file" @change="updateProfileImage" />
          
          <label>Novo Banner:</label>
          <input type="file" @change="updateBannerImage" />
          
          <label>Biografia:</label>
          <textarea v-model="newBio" placeholder="Edite sua biografia"></textarea>
          
          <button @click="saveProfileChanges">Salvar Alterações</button>
          <button @click="closeEditProfileModal">Cancelar</button>
        </div>
      </div>
  
      <!-- Modal de Criação de Publicação -->
      <div v-if="showCreatePostModal" class="modal-overlay">
        <div class="modal-content">
          <h3>Criar Publicação</h3>
          <textarea v-model="newPostText" placeholder="Escreva algo..."></textarea>
          <input type="file" @change="handleImageUpload" />
          <button @click="createPost">Publicar</button>
          <button @click="closeCreatePostModal">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: "Nome do Usuário",
        bio: "Aqui vai a biografia do usuário.",
        profileImage: "https://via.placeholder.com/150",
        bannerImage: "https://via.placeholder.com/600x200",
        posts: [],
        showEditProfileModal: false,
        showCreatePostModal: false,
        newProfileImage: null,
        newBannerImage: null,
        newBio: "",
        newPostText: "",
        newPostImage: null,
      };
    },
    methods: {
      openEditProfileModal() {
        this.showEditProfileModal = true;
        this.newBio = this.bio;
      },
      closeEditProfileModal() {
        this.showEditProfileModal = false;
        this.newProfileImage = null;
        this.newBannerImage = null;
        this.newBio = this.bio;
      },
      updateProfileImage(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newProfileImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      updateBannerImage(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newBannerImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      saveProfileChanges() {
        if (this.newProfileImage) this.profileImage = this.newProfileImage;
        if (this.newBannerImage) this.bannerImage = this.newBannerImage;
        this.bio = this.newBio;
        this.closeEditProfileModal();
      },
      openCreatePostModal() {
        this.showCreatePostModal = true;
      },
      closeCreatePostModal() {
        this.showCreatePostModal = false;
        this.newPostText = "";
        this.newPostImage = null;
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newPostImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      createPost() {
        if (this.newPostText || this.newPostImage) {
          this.posts.unshift({
            id: Date.now(),
            text: this.newPostText,
            image: this.newPostImage,
          });
          this.closeCreatePostModal();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  *,
  *::before,
  *::after {
    color: black !important; /* Garante que todos os textos tenham cor preta */
  }
  
  .profile-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 20px;
  }
  
  .banner {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: #ddd;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    position: absolute;
    top: 120px;
  }
  
  .profile-info {
    margin-top: 60px;
    text-align: center;
  }
  
  .profile-info h2,
  .profile-info p,
  .profile-info button {
    color: black !important;
  }
  
  .profile-info button {
    background-color: #1877F2;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Feed de Publicações */
  .post-feed {
    margin-top: 20px;
  }
  
  .post {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    color: black !important;
  }
  
  .post-image {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
  }
  
  /* Botão de Criar Publicação */
  .create-post-button {
    position: fixed;
    bottom: 480px;
    right: 700px;
    width: 50px;
    height: 50px;
    background-color: #1877F2;
    color: white;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  /* Modal de Edição de Perfil */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    color: black !important;
  }
  
  .modal-content h3,
  .modal-content label,
  .modal-content textarea,
  .modal-content input,
  .modal-content button {
    color: black !important;
  }
  
  .modal-content h3 {
    margin-bottom: 10px;
  }
  
  .modal-content textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    resize: none;
  }
  
  .modal-content input {
    margin-bottom: 10px;
  }
  
  .modal-content button {
    background-color: #1877F2;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  </style>
  