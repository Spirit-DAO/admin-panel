
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    "https://gateway.thegraph.com/api/dc01828428d23395fcb920aec70a7c01/subgraphs/id/CCzukThD1ovSzoGwYZg3ZQaXVqetRjec97aiLcjf48PK",
    "https://gateway.thegraph.com/api/dc01828428d23395fcb920aec70a7c01/subgraphs/id/E1Ci6VTWwwSugbryJKaa1rVEwTitE9eFb6hKH8paHGE3"
  ],
  documents: "src/graphql/queries/!(*.d).{ts,tsx}",
  generates: {
    "src/graphql/generated/graphql.tsx": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withResultType: true
      }
    }
  }
};

export default config;
