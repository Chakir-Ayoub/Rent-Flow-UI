export const environment = {
  production: false,
  api:'http://187.124.35.145:9092',
  keycloak: {
    config: {
      url: 'http://187.124.35.145:8080',
      realm: 'rent-flow',
      clientId: 'rentflow'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    }
  }

};
