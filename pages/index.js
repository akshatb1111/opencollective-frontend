import { matchRoutes } from 'react-router-dom';
import { initializeFaro, createReactRouterV6DataOptions, ReactIntegration, getWebInstrumentations, } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

initializeFaro({
  url: 'https://faro-collector-prod-ap-south-1.grafana.net/collect/a6e0b8061d4a27e0d6e364aa499e5bb5',
  app: {
    name: 'Test ',
    version: '1.0.0',
    environment: 'production'
  },
  
  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    // React integration for React applications.
    new ReactIntegration({
      router: createReactRouterV6DataOptions({
        matchRoutes,
      }),
    }),
  ],
});
import { getServerSideProps, HomePage } from './home';

// ts-unused-exports:disable-next-line
export { getServerSideProps };

// next.js export
// ts-unused-exports:disable-next-line
export default HomePage;
