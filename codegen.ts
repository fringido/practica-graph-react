import { Types } from '@graphql-codegen/plugin-helpers';

const config: Types.Config = {
  schema: 'https://graphql-pokemon2.vercel.app/',
  documents: 'src/**/*.gql',
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo' ],
      config: {
        withHooks: true,
        flattenGeneratedTypes: true,
        flattenGeneratedTypesIncludeFragments: true
      } ,
    },
    
  },
};

export default config;
