module.exports  = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        },
        fontSize: {
            h1: [
              "clamp(2rem, 1.786vw + 1.643rem, 2.5rem)",
              {
                lineHeight: "clamp(2.6rem, 2.321vw + 2.136rem, 3.25rem)",
                fontWeight: "700",
              },
            ],
        },
      }
    }
  }