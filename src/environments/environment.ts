export const environment = {
  production: false,
  keycloak: {
    config: {
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
