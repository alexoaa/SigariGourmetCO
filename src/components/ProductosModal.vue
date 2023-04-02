<template>
  <div class="product-modal">
    <div class="product-modal-content" ref="modalContent">
      <div
      class="product-modal-close"
      @click="closeModal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width:="30px" height="30px" fill="rgb(166, 96, 58)">
        <path
          d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
        />
      </svg>
    </div>
      <div class="product-modal-img">
        <!-- <img :src="imgSrc" alt="Sigari Gourmet CO" /> -->
        <img src="@/assets/images/coffee-bomb.webp" alt="Sigari Gourmet CO" />
      </div>
      <h2>{{ productosInfo[productIndex].producto }}</h2>
      <p>{{ productosInfo[productIndex].desc }}</p>
      <button @click="addShopCart">Añadir al carrito</button>
      <button @click="buyNow">Comprar ya</button>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import useProductStore from '@/stores/product.js';
import { onClickOutside } from '@vueuse/core';

export default {
  name: 'ProductosModal',
  props: {
    productIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgSrc() {
      // return this.productosInfo[this.productIndex].img;
      return "@/assets/images/coffee-bomb.webp";
    },
    ...mapStores(useProductStore)
  },
  methods: {
    addShopCart() {
      this.productStore.productsShopCar++;
      this.closeModal();
    },
    buyNow() {
      this.closeModal();
    },
    closeModal() {
      this.productStore.isProductModalOpen = !this.productStore.isProductModalOpen;
    },
  },
  data() {
    return {
      productosInfo: [
        {
          producto: 'Coffee Bomb',
          desc: `Si eres un amante del café, nuestro producto elaborado con café es perfecto para ti. Con
          su sabor delicioso y natural, podrás disfrutar de la experiencia de un café recién hecho
          en cualquier momento y lugar.`,
          img: '@/assets/images/coffee-bomb.webp'
        },
        {
          producto: 'Choco Passion',
          desc: `Con su sabor rico y cremoso, podrás disfrutar de la experiencia del chocolate en cualquier
          momento y lugar, sin sentirte culpable por haberlo disfrutado.`,
          img: 'choco-passion.webp'
        },
        {
          producto: 'Mango Fresa Delight',
          desc: `Nuestro producto elaborado con mango con fresa es versátil y se puede disfrutar en
          cualquier momento del día. Ya sea como un complemento perfecto para un desayuno
          energizante, como un snack delicioso a media tarde, o incluso como postre después de una
          cena deliciosa, nuestro producto siempre es una buena opción.`,
          img: 'mango-fresa-delight.webp'
        },
        {
          producto: 'Menta Fusión',
          desc: `Hemos utilizado la mejor selección de hojas de menta fresca o hierbas finas para crear un
          sabor fresco y aromático que te encantará. Delicioso y refrescante.`,
          img: 'menta-fusion.webp'
        },
        {
          producto: 'Bubble-Gum',
          desc: `El sabor a chicle es conocido por su sabor dulce y refrescante, y hemos creado una mezcla
          de sabores que seguramente satisfará tus antojos por lo dulce. Ya sea que lo disfrutes
          como un postre después de una comida, como un refrigerio dulce en el trabajo o en la
          escuela, o incluso como una opción para satisfacer los antojos durante la noche, nuestro
          producto siempre será una buena elección.`,
          img: 'bubble-gum.webp'
        },
        {
          producto: 'Chai smoke',
          desc: `          Nos complace presentarte nuestro nuevo producto elaborado con té chai, una deliciosa
          bebida que ha sido cuidadosamente creada con una combinación de especias aromáticas y té
          negro. Este producto es perfecto para aquellos que buscan una bebida con un sabor exótico
          y estimulante.`,
          img: 'chai-smoke.webp'
        }
      ]
    };
  },
  mounted() {
    // Agrega la clase modal-open al cuerpo de la página cuando se abre el modal
    document.body.classList.add('modal-open');

    // Para cerrar el modal al clickear afuera de este
    onClickOutside(this.$refs.modalContent, this.closeModal);
  },
  beforeUnmount() {
    // Elimina la clase modal-open del cuerpo de la página cuando se cierra el modal
    document.body.classList.remove('modal-open');
  }
};
</script>

<style lang="scss">
@custom-media --small-screen (width <= 480px);
@custom-media --medium-screen (width >= 481px) and (width <= 768px);
@custom-media --large-screen (width >= 769px);

.product-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 11;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .product-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 1rem;
    padding: 1rem;
    background: rgb(239, 227, 184);
    border-radius: 10px;
    overflow-y: auto;

    .product-modal-close {
      width: 100%;
      text-align: right;
      svg:hover {
        cursor: pointer;
        fill: rgb(146, 76, 38);
      }
    }
    h2 {
      font-size: 2.5rem;
      margin: 1.5rem 0;
      width: 100%;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
      line-height: 2rem;
      margin: 1rem 0;
    }
    button {
      font-size: 1.5rem;
      padding: 16px 24px;
      margin: 1rem;
      border: 1px solid rgb(239, 227, 184);
      border-radius: 5px;
      background: rgb(166, 96, 58);
      color: rgb(239, 227, 184);
      &:hover {
        background: rgb(146, 76, 38);
        color: rgb(259, 247, 204);
        cursor: pointer;
      }
    }
  }
  .product-modal-img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    border-radius: 10px;
    width: 100%;
    img {
      object-fit: cover;
      height: 300px;
      width: 100%;
    }
  }
}
@media only screen and (--large-screen) {
  .product-modal {
    .product-modal-content {
      width: 60%;
      padding: 1rem 2rem;
      p {
        padding: 0 1rem;
    }
    }
    .product-modal-img {
      width: 60%;
    }
  }
}
</style>
