<template>
  <div class="main-container">
    <!-- DROPDOWN MENU -->
    <DropDownMenu />
    <!-- FIRST SCREEN -->
    <section class="first-screen screen-font">
      <div id="Principal" class="idToSect" />
      <div class="first-screen-div">
        <h1><a href="/">SIGARI GOURMET CO.</a></h1>
        <div>
          <p>
            "Disfruta del sabor y la calidad con cada bocanada: Cigarros gourmet para paladares
            exigentes."
          </p>
        </div>
        <a class="compra-aqui-a" href="#Nuestrosproductos">COMPRA AQUÍ</a>
      </div>
    </section>
    <!-- SECOND SCREEN -->
    <section class="second-screen screen-font">
      <div id="Nuestrahistoria" class="idToSect" />
      <div class="second-screen-div">
        <h1>Nuestra historia</h1>
        <h4>Compromiso con la excelencia</h4>
        <div>
          <p>
            Nuestra empresa de cigarros gourmet es el resultado de nuestra pasión por el tabaco y el
            deseo de ofrecer una experiencia de fumar única y excepcional. Nos dedicamos a
            seleccionar las mejores hojas de tabaco de todo el mundo y a utilizar técnicas
            artesanales para crear cigarros de alta calidad con sabores y aromas inigualables.
          </p>
        </div>
      </div>
      <div class="second-screen-img">
        <img src="@/assets/images/historia.webp" alt="Sigari Gourmet CO" />
      </div>
    </section>
    <!-- THIRD SCREEN -->
    <section class="third-screen screen-font" id="">
      <div id="Productosnaturales" class="idToSect" />
      <h1>Productos naturales</h1>
      <div class="third-screen-div 1st-img">
        <div class="third-screen-img">
          <img src="@/assets/images/ingredientes.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Ingredientes</h2>
          <p>
            De la más alta calidad y excelencia, para una esencia natural y sana en el mundo del
            tabaco.
          </p>
        </div>
      </div>
      <div class="third-screen-div 2nd-img">
        <div class="third-screen-img">
          <img src="@/assets/images/alternativa-sostenible.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Alternativa sostenible</h2>
          <p>Sin comprometer la salud de los clientes o la integridad de nuestro planeta.</p>
        </div>
      </div>
      <div class="third-screen-div 3rd-img">
        <div class="third-screen-img">
          <img src="@/assets/images/sabores.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Sabores</h2>
          <p>
            Cada cigarro es elaborado a mano por expertos artesanos, asegurando que cada uno tenga
            un sabor y una calidad excepcionales. Este producto es perfecto para aquellos que buscan
            una experiencia de fumar diferente y natural.
          </p>
        </div>
      </div>
    </section>
    <!-- FOURTH SCREEN -->
    <section class="fourth-screen screen-font" id="">
      <div id="¿Quiénessomos?" class="idToSect" />
      <h1>¿Quiénes somos?</h1>
      <div class="fourth-screen-div 1st-sec">
        <div class="fourth-screen-img">
          <img src="@/assets/images/empresa.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Empresa 100% mexicana</h2>
          <p>
            Basados en productos naturales y sin químicos para la creación de cada cigarro Somos una
            empresa nueva en el mercado que viene desde abajo arrasnado con toda la competencia,
            animate a fumar tu platillo favorito.
          </p>
        </div>
      </div>
      <div class="fourth-screen-div 2nd-sec">
        <div class="fourth-screen-img">
          <img src="@/assets/images/creacion.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Creación</h2>
          <p>
            Creada en 2020 con ideas y bases italianas, forma parte de nuestras recetas creadas por
            nuestros ancestros combinando productos naturales y el sabor de tu platillo favorito,
            solo para los paladares mas refinados del planeta.
          </p>
        </div>
      </div>
      <div class="fourth-screen-div 3rd-sec">
        <div class="fourth-screen-img">
          <img src="@/assets/images/innovacion.webp" alt="Sigari Gourmet CO" />
        </div>
        <div>
          <h2>Innovación</h2>
          <p>
            Nuestra elaboración se caracteriza por ser única al momento de trabajar con los
            ingredientes y priorizando laarmonía entre salud y sabor.
          </p>
        </div>
      </div>
    </section>
    <!-- FIFTH SCREEN - NUESTROS PRODUCTOS-->
    <section class="fifth-screen screen-font" id="">
      <div id="Nuestrosproductos" class="idToSect" />
      <h1>Nuestros productos</h1>
      <div class="fifth-screen-img first-img">
        <img src="@/assets/images/nuestros-productos.webp" alt="Sigari Gourmet CO" />
      </div>
      <div class="fifth-screen-div 1sec">
      <div class="fifth-screen-img" @click="selectedProduct(0)">
          <h2>Coffee Bomb</h2>
          <img src="@/assets/images/coffee-bomb.webp" alt="Sigari Gourmet CO" />
        </div>
      </div>
      <div class="fifth-screen-div 2sec">
      <div class="fifth-screen-img" @click="selectedProduct(1)">
          <h2>Choco Passion</h2>
          <img src="@/assets/images/choco-passion.webp" alt="Sigari Gourmet CO" />
        </div>
      </div>
      <div class="fifth-screen-div 3sec">
      <div class="fifth-screen-img" @click="selectedProduct(2)">
          <h2>Mango Fresa Delight</h2>
          <img src="@/assets/images/mango-fresa-delight.webp" alt="Sigari Gourmet CO" class="object-contain" />
        </div>
      </div>
      <div class="fifth-screen-div 4sec">
      <div class="fifth-screen-img" @click="selectedProduct(3)">
          <h2>Menta Fusión</h2>
          <img src="@/assets/images/menta-fusion.webp" alt="Sigari Gourmet CO" />
        </div>
      </div>
      <div class="fifth-screen-div 5sec">
      <div class="fifth-screen-img" @click="selectedProduct(4)">
          <h2>Bubble-Gum</h2>
          <img src="@/assets/images/bubble-gum.webp" alt="Sigari Gourmet CO" />
        </div>
      </div>
      <div class="fifth-screen-div 6sec">
      <div class="fifth-screen-img" @click="selectedProduct(5)">
          <h2>Chai smoke</h2>
          <img src="@/assets/images/chai-smoke.webp" alt="Sigari Gourmet CO" />
        </div>
      </div>
      <ProductosModal v-if="this.productStore.isProductModalOpen" :productIndex="productIndex"></ProductosModal>
    </section>
    <!-- SIXTH SCREEN --- OPINIONES SOBRE NOSOTROS-->
    <section class="sixth-screen screen-font" id="">
      <img src="@/assets//images/sixth.webp" alt="" class="sixth-img-background" />
      <div id="Opinionessobrenosotros" class="idToSect" />
      <h1>Opiniones sobre nosotros</h1>
      <div class="sixth-screen-div 1st-op">
        <p>
          "Me encanta el sabor de ramen con capsulas de infusión de cerdo ahumado me hace recordar
          mi país natal."
        </p>
        <h3>- Lee Yoon Ollin, reconocido actor surcoreano hollywoodense.</h3>
      </div>
      <div class="sixth-screen-div 2nd-op">
        <p>
          "El cigarro de sabor chicle es una opción perfecta para ocasiones especiales o simplemente
          para disfrutar de un momento de relajación y indulgencia."
        </p>
        <h3>- Uriel Ortíz, CEO fábrica de chocolates.</h3>
      </div>
      <div class="sixth-screen-div 3rd-op">
        <p>
          "Gran servicio y atención personalizada, entrega de producto en buen estado y gran calidad
          de los cigarros lo recomiendo ampliamente; esto detendrá el hambre mundial."
        </p>
        <h3>- Feisal Mustafá, Príncipe de Arabia Saudita.</h3>
      </div>
    </section>
    <!-- SEVENTH SCREEN -->
    <section class="seventh-screen screen-font" id="">
      <div id="Contacto" class="idToSect" />
      <h1>Contacto</h1>
      <div class="seventh-screen-img">
        <img src="@/assets/images/contact.png" alt="Sigari Gourmet CO" />
      </div>
      <div class="seventh-screen-div 1st-sec">
        <h2>Direccion</h2>
        <h3>Calle Guanajuato 10 b, Col.Roma.</h3>
      </div>
      <div class="seventh-screen-div 2nd-sec">
        <h2>Email</h2>
        <h3>sigari@gmail.com</h3>
      </div>
      <div class="seventh-screen-div 3rd-sec">
        <h2>Teléfono</h2>
        <h3>(55)-9110-5676</h3>
      </div>
      <div class="svg-div">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="1.0 1.0 126.0 126.0"
              zoomAndPan="magnify"
              style="fill: rgb(166, 96, 58)"
              original_string_length="552"
              width:="50px"
              height="50px"
            >
              <g id="__id147_sm6ytjuv9k">
                <path
                  d="m95.4 1h-62.9c-17.3 0-31.5 14.2-31.5 31.6v62.9c0 17.3 14.2 31.5 31.5 31.5h62.9c17.4 0 31.6-14.2 31.6-31.6v-62.8c0-17.4-14.2-31.6-31.6-31.6zm-14.5 63h-11.9v39h-15v-39h-8v-16h7v-6.8c0-6.4 3.2-16.5 16.7-16.5h12.3v13.3h-8.7c-1.4 0-3.3.9-3.3 4v6h12.3z"
                  style="fill: inherit"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="0.0 0.0 456.4 456.3"
              zoomAndPan="magnify"
              style="fill: rgb(0, 0, 0)"
              original_string_length="2075"
              width:="50px"
              height="50px"
            >
              <g>
                <g id="__id143_sm6ytjuv9k">
                  <path
                    d="M228.1,41.1c60.9,0,68.1,0.2,92.2,1.3c22.2,1,34.3,4.7,42.4,7.9c10.6,4.1,18.2,9.1,26.2,17.1 c8,8,12.9,15.6,17.1,26.2c3.1,8,6.8,20.1,7.9,42.4c1.1,24.1,1.3,31.3,1.3,92.2c0,60.9-0.2,68.1-1.3,92.2c-1,22.2-4.7,34.3-7.9,42.4 c-4.1,10.6-9.1,18.2-17.1,26.2c-8,8-15.6,12.9-26.2,17.1c-8,3.1-20.1,6.8-42.4,7.9c-24.1,1.1-31.3,1.3-92.2,1.3 c-60.9,0-68.1-0.2-92.2-1.3c-22.2-1-34.3-4.7-42.4-7.9c-10.6-4.1-18.2-9.1-26.2-17.1c-8-8-12.9-15.6-17.1-26.2 c-3.1-8-6.8-20.1-7.9-42.4c-1.1-24.1-1.3-31.3-1.3-92.2c0-60.9,0.2-68.1,1.3-92.2c1-22.2,4.7-34.3,7.9-42.4 c4.1-10.6,9.1-18.2,17.1-26.2c8-8,15.6-12.9,26.2-17.1c8-3.1,20.1-6.8,42.4-7.9C160,41.3,167.2,41.1,228.1,41.1 M228.1,0 c-62,0-69.7,0.3-94.1,1.4c-24.3,1.1-40.9,5-55.4,10.6c-15,5.8-27.7,13.6-40.4,26.3C25.6,51,17.8,63.7,12,78.7 c-5.6,14.5-9.5,31.1-10.6,55.4C0.3,158.4,0,166.2,0,228.1c0,62,0.3,69.7,1.4,94.1c1.1,24.3,5,40.9,10.6,55.4 c5.8,15,13.6,27.7,26.3,40.4c12.7,12.7,25.4,20.5,40.4,26.3c14.5,5.6,31.1,9.5,55.4,10.6c24.3,1.1,32.1,1.4,94.1,1.4 c62,0,69.7-0.3,94.1-1.4c24.3-1.1,40.9-5,55.4-10.6c15-5.8,27.7-13.6,40.4-26.3c12.7-12.7,20.5-25.4,26.3-40.4 c5.6-14.5,9.5-31.1,10.6-55.4c1.1-24.3,1.4-32.1,1.4-94.1c0-62-0.3-69.7-1.4-94.1c-1.1-24.3-5-40.9-10.6-55.4 c-5.8-15-13.6-27.7-26.3-40.4c-12.7-12.7-25.4-20.5-40.4-26.3c-14.5-5.6-31.1-9.5-55.4-10.6C297.9,0.3,290.1,0,228.1,0"
                    style="fill: rgb(166, 96, 58)"
                  />
                </g>
                <g id="__id144_sm6ytjuv9k">
                  <path
                    d="M228.1,111C163.4,111,111,163.4,111,228.1c0,64.7,52.5,117.2,117.2,117.2c64.7,0,117.2-52.4,117.2-117.2 C345.3,163.4,292.8,111,228.1,111 M228.1,304.2c-42,0-76-34-76-76c0-42,34-76,76-76c42,0,76,34,76,76 C304.2,270.1,270.1,304.2,228.1,304.2"
                    style="fill: rgb(166, 96, 58)"
                  />
                </g>
                <g id="__id145_sm6ytjuv9k">
                  <path
                    d="M377.3,106.4c0,15.1-12.3,27.4-27.4,27.4c-15.1,0-27.4-12.3-27.4-27.4c0-15.1,12.3-27.4,27.4-27.4 C365,79,377.3,91.2,377.3,106.4"
                    style="fill: rgb(166, 96, 58)"
                  />
                </g>
              </g>
            </svg>
      </div>
      <p>Derechos reservados SIGARI GOURMET 2020 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width:="5px" height="10px" fill="rgb(166, 96, 58)"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg></p>
    </section>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import DropDownMenu from '@/components/DropDownMenu.vue';
import ProductosModal from '@/components/ProductosModal.vue';
import useProductStore from "@/stores/product.js";

export default {
  name: 'App',
  data() {
    return {
      productIndex: "",
    };
  },
  components: {
    DropDownMenu,
    ProductosModal
  },
  methods: {
    selectedProduct(value) {
      this.productStore.isProductModalOpen = !this.productStore.isProductModalOpen;
      this.productIndex = value;
    }
  },
  computed: {
    ...mapStores(useProductStore),
  }
};
</script>
