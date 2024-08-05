import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'hjve7z',
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar eventos do Node aqui
      // Por exemplo: on('before:browser:launch', (browser = {}, launchOptions) => { ... });
    },
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 10000, // Tempo padrão de espera para comandos
    pageLoadTimeout: 60000, // Tempo máximo para o carregamento da página
    viewportWidth: 1280, // Largura padrão do viewport
    viewportHeight: 720, // Altura padrão do viewport
    retries: {
      runMode: 2, // Número de tentativas de execução em modo de execução (quando o teste falha)
      openMode: 1 // Número de tentativas de execução em modo interativo (quando o teste falha)
    },
    video: true, // Ativa a gravação de vídeo dos testes
    screenshotOnRunFailure: true, // Captura screenshots em caso de falha
    env: {
      // Variáveis de ambiente que podem ser usadas nos testes
      loginUser: 'standard_user',
      loginPassword: 'secret_sauce'
    }
  }
});
