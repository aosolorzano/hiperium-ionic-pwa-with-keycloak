import { KeycloakConfig } from 'keycloak-angular';

// Keycloak setup info
const keycloakConfig: KeycloakConfig = {
  url: 'http://192.168.1.102:8080/auth',
  realm: 'hiperium',
  clientId: 'hiperium-web-app-client-localhost'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
