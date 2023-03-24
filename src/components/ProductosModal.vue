<template>
  <div class="fifth-screen-div 1sec">
    <div class="fifth-screen-img">
      <img :src="imgSrc" alt="Sigari Gourmet CO" />
    </div>
    <h2>{{ productosInfo[productIndex].producto }}</h2>
    <p>{{ productosInfo[productIndex].desc }}</p>
  </div>
</template>

<script>
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
      return `../src/assets/images/${this.productosInfo[this.productIndex].img}.webp`;
    }
  },
  data() {
    return {
      productosInfo: [
        {
          producto: 'Coffee Bomb',
          desc: `Si eres un amante del café, nuestro producto elaborado con café es perfecto para ti. Con
          su sabor delicioso y natural, podrás disfrutar de la experiencia de un café recién hecho
          en cualquier momento y lugar.`,
          img: 'coffee-bomb'
        },
        {
          producto: 'Choco Passion',
          desc: `Con su sabor rico y cremoso, podrás disfrutar de la experiencia del chocolate en cualquier
          momento y lugar, sin sentirte culpable por haberlo disfrutado.`,
          img: 'choco-passion'
        },
        {
          producto: 'Mango Fresa Delight',
          desc: `Nuestro producto elaborado con mango con fresa es versátil y se puede disfrutar en
          cualquier momento del día. Ya sea como un complemento perfecto para un desayuno
          energizante, como un snack delicioso a media tarde, o incluso como postre después de una
          cena deliciosa, nuestro producto siempre es una buena opción.`,
          img: 'mango-fresa-delight'
        },
        {
          producto: 'Menta Fusión',
          desc: `Hemos utilizado la mejor selección de hojas de menta fresca o hierbas finas para crear un
          sabor fresco y aromático que te encantará. Delicioso y refrescante.`,
          img: 'menta-fusion'
        },
        {
          producto: 'Bubble-Gum',
          desc: `El sabor a chicle es conocido por su sabor dulce y refrescante, y hemos creado una mezcla
          de sabores que seguramente satisfará tus antojos por lo dulce. Ya sea que lo disfrutes
          como un postre después de una comida, como un refrigerio dulce en el trabajo o en la
          escuela, o incluso como una opción para satisfacer los antojos durante la noche, nuestro
          producto siempre será una buena elección.`,
          img: 'bubble-gum'
        },
        {
          producto: 'Chai smoke',
          desc: `          Nos complace presentarte nuestro nuevo producto elaborado con té chai, una deliciosa
          bebida que ha sido cuidadosamente creada con una combinación de especias aromáticas y té
          negro. Este producto es perfecto para aquellos que buscan una bebida con un sabor exótico
          y estimulante.`,
          img: 'chai-smoke'
        }
      ]
    };
  }
};
</script>
