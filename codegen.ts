import { Types } from '@graphql-codegen/plugin-helpers';
import { ApolloReactHooksPluginConfig } from 'apollo-react-hooks';
import { GraphQLRequestPluginConfig } from 'typescript-graphql-request';

const config: Types.Config = {
  schema: 'https://graphql-pokemon2.vercel.app/',
  documents: 'src/**/*.gql',
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      } as ApolloReactHooksPluginConfig,
    },
    'src/generated/graphql-request.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true,
      } as GraphQLRequestPluginConfig,
    },
  },
};

export default config;
