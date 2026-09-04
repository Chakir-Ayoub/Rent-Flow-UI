export const environment = {
  production: false,
  //api:'https://customer.morocco-food-tours.com',
  api:'http://localhost:9092',
  keycloak: {
    config: {
  //    url: 'https://auth.morocco-food-tours.com',
      url: 'http://localhost:8080',
      realm: 'rent-flow',
      clientId: 'rentflow'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    }
  }

};
