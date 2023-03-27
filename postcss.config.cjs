module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-custom-media': {
      extensions: {
        '--mobile-screen': '(width >= 320px) and (width <= 480px)',
        '--tablet-screen': '(width >= 481px) and (width <= 768px)',
        '--laptop-screen': '(width >= 769px) and (width <= 1023px)',
        '--desktop-screen': '(width >= 1024px) and (width <= 1200px)',
        '--extra-large-screen': '(width >= 1201px)'
      }
    }
  }
};
