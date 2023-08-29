import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/graphql/generated/schema.graphql',
  documents: ['./src/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      config: {
        withHooks: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, string>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
      },
      presetConfig: {
        persistedDocuments: true,
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config
