<template>
  <div class="nav-main-container" :class="{ 'scrolled-down': this.scrolledDown }">
    <div
      @click="toggleMenu"
      class="nav-main-container-1st-div"
      :class="{ 'scrolled-down-a': this.scrolledDownA }"
    >
      {{ this.textMenuLabelComp }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="18"
        height="18"
        fill="#EFE3B8"
        v-if="!this.isMenuOpen"
      >
        <path
          d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        v-else
        width="18"
        height="18"
        fill="#EFE3B8"
      >
        <path
          d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
      </svg>
    </div>
    <div class="nav-container" v-show="this.isMenuOpen">
      <ul class="nav-menu">
        <li
          v-for="opcion in opciones"
          class="nav-item"
          :key="opcion"
          @click="onClickToSection(opcion)"
        >
          <a :href="toDiv">{{ opcion }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  data() {
    return {
      scrolledDown: false,
      scrolledDownA: false,
      isMenuOpen: false,
      textMenuLabel: 'Principal',
      opciones: [
        'Principal',
        'Nuestra historia',
        'Productos naturales',
        '¿Quiénes somos?',
        'Nuestros productos',
        'Opiniones sobre nosotros',
        'Contacto'
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    onScroll() {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 10 && !this.scrolledDown && !this.scrolledDownA) {
        this.scrolledDown = true;
        this.scrolledDownA = true;
      } else if (scrollPosition <= 10 && this.scrolledDown && this.scrolledDownA) {
        this.scrolledDown = false;
        this.scrolledDownA = false;
      }
    },
    onClickToSection(opcion) {
      this.textMenuLabel = opcion;
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  computed: {
    textMenuLabelComp() {
      return this.textMenuLabel;
    },
    toDiv() {
      return `#${this.textMenuLabel.replace(/\s+/g, '')}`;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
};
</script>

<style>
.nav-main-container {
  position: fixed;
  top: 0;
  z-index: 1;
  min-height: 56px;
  background: rgb(166, 96, 58);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.3s;
  color: rgb(239, 227, 184);
}
.nav-main-container-1st-div {
  padding: 20px 10px;
  font-family: 'Rasa-SemiBold', sans-serif;
  font-size: 1.9rem;
  transition: 0.3s;
}
.nav-main-container-1st-div:hover {
  cursor: pointer;
}
.scrolled-down {
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.14);
}
.scrolled-down-a {
  padding: 25px 0;
}
.nav-container {
  position: sticky;
  top: 81.6px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  background: rgb(239, 227, 184);
  border-bottom: 1px solid rgb(146, 76, 38);
  border-top: 1px solid rgb(146, 76, 38);
}
.nav-menu {
  width: 100%;
  text-align: center;
  height: fit-content;
}
.nav-item a {
  display: block;
  padding: 20px 0;
  color: rgb(166, 96, 58);
  font-family: 'Rasa-SemiBold', sans-serif;
  font-size: 1.7rem;
}
.nav-item a:hover {
  cursor: pointer;
  color: rgb(239, 227, 184);
  background: rgb(166, 96, 58);
}
</style>
