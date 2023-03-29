const sliderOptions = {
    
    pagination: false,
    drag: 'free',
    perPage: 4, // 1400px以上の場合の初期値
    gap: '5rem',
    type: 'loop',
    arrows: false,
    autoScroll: {
      rewind: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 0.5,
    },
    breakPoints: {
      0: {
        perPage: 1, // 600px以下の場合
      },
      600: {
        perPage: 1,
      },
      1024: {
        perPage: 2, // 1024px以下の場合
      },
      1400: {
        perPage: 3, // 1400px以下の場合
      }
    }
  };
  

  export default sliderOptions
