<template>
  <div
    class="nav-main-container"
    :class="{ 'scrolled-down': this.scrolledDown, 'menu-open': this.isMenuOpen }"
  >
    <div
      @click="toggleMenu"
      class="nav-main-container-1st-div"
      :class="{ 'scrolled-down-a': this.scrolledDownA }"
    >
      <span>{{ this.textMenuLabelComp }}</span>
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
    <div class="nav-container" v-show="this.isMenuOpen" ref="navContainer">
      <ul class="nav-menu">
        <li
          v-for="(value, key) in opciones"
          class="nav-item"
          :key="value"
          :class="{ 'active-section': value == currentSection }"
          @click="onClickToSection(value)"
        >
          <a :href="toDiv">{{ key }}</a>
        </li>
      </ul>
    </div>
    <!-- RESPONSIVE NAV FOR SCREENS OVER 768PX -->
    <div class="nav-container-large" :class="{ 'scrolled-down': this.scrolledDown }">
      <ul class="nav-menu-large">
        <li
          v-for="(value, key) in opciones"
          class="nav-item-large"
          :key="value"
          :class="{
            'active-section-large': value == currentSection && value != 'principal',
            'scrolled-down-a-large': this.scrolledDownA
          }"
          @click="this.selectedSection = value"
        >
          <a :href="toDiv">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  props: {
    currentSection: String
  },
  data() {
    return {
      scrolledDown: false,
      scrolledDownA: false,
      isMenuOpen: false,
      selectedSection: '',
      opciones: {
        Principal: 'principal',
        'Nuestra historia': 'nuestra-historia',
        'Productos naturales': 'productos-naturales',
        '¿Quiénes somos?': 'quienes-somos',
        'Nuestros productos': 'nuestros-productos',
        'Opiniones sobre nosotros': 'opiniones-sobre-nosotros',
        Contacto: 'contacto'
      }
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
    onClickToSection(value) {
      this.selectedSection = value;
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  computed: {
    textMenuLabelComp() {
      return Object.keys(this.opciones).find((key) => this.opciones[key] === this.currentSection);
    },
    toDiv() {
      return `#${this.selectedSection}`;
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

<style lang="scss">
@custom-media --large-screen (width >= 769px);

.menu-open {
  background: rgb(166, 96, 58) !important;
  span {
    color: rgb(239, 227, 184) !important;
  }
  svg {
    fill: rgb(239, 227, 184) !important;
  }
}
.nav-container-large {
  display: none;
}
.nav-main-container {
  position: fixed;
  top: 0;
  z-index: 3;
  min-height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.3s;
  color: rgb(239, 227, 184);
}
.nav-main-container-1st-div {
  padding: 20px 10px;
  transition: all 0.3s, color 0.1s;
  span {
    font-family: 'Rasa-SemiBold', sans-serif;
    font-size: 1.9rem;
    margin-right: 6px;
    user-select: none;
  }
}
.nav-main-container-1st-div:hover {
  cursor: pointer;
}
.scrolled-down {
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
  background: rgb(239, 227, 184);
}
.scrolled-down-a {
  padding: 25px 0;
  color: rgb(166, 96, 58);
  svg {
    fill: rgb(166, 96, 58);
  }
}
.nav-container {
  position: sticky;
  top: 81.6px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  background: rgb(239, 227, 184);
  border-bottom: 3px solid rgb(146, 76, 38);
  border-top: 3px solid rgb(146, 76, 38);
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
.active-section {
  background: rgb(166, 96, 58);
  a {
    color: rgb(239, 227, 184);
    font-family: 'Rasa-Bold', sans-serif;
  }
}
@media only screen and (--large-screen) {
  .nav-main-container-1st-div,
  .nav-container {
    display: none;
  }
  .nav-container-large {
    display: block;
    width: 100%;
    z-index: 10;
  }
  .nav-menu-large {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .nav-item-large a {
    display: inline-block;
    padding: 18px 24px;
    color: rgb(239, 227, 184);
    font-family: 'Rasa-SemiBold', sans-serif;
    font-size: 1.4rem;
    min-height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
  .nav-item-large a:hover {
    cursor: pointer;
    color: rgb(239, 227, 184) !important;
    font-family: 'Rasa-Bold', sans-serif;
    background: rgb(166, 96, 58);
  }
  .active-section-large {
    background: rgb(166, 96, 58);
    a {
      color: rgb(239, 227, 184) !important;
      font-family: 'Rasa-Bold', sans-serif;
    }
  }
  .scrolled-down {
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
    background: rgb(239, 227, 184);
  }
  .scrolled-down-a-large {
    a {
      min-height: 88px;
      padding: 21px 24px;
      color: rgb(166, 96, 58);
      &:hover {
        color: rgb(146, 76, 38);
      }
    }
  }
}
</style>
