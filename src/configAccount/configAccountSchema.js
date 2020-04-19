import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from '../utilities';

import {
	configAccoutTypeDef,
	configAccoutQueries,
	configAccoutMutations
} from './typeDefs';

import configAccountResolvers from './configAccountResolver';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		configAccoutTypeDef
	],
	[
		configAccoutQueries
	],
	[
		configAccoutMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		configAccountResolvers
	)
});
