import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allProfiles: (_) =>
			getRequest(`${URL}profile`, ''),
        countryById: (_, { id }) =>
			generalRequest(`${URL}country/${id}`, 'GET'),
	},
	Mutation: {
		createCountry: (_, { country }) =>
			generalRequest(`${URL}`, 'POST', country),
	}
};

export default resolvers;
