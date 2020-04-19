import Koa from 'koa';
import KoaRouter from 'koa-router';
import koaLogger from 'koa-logger';
import koaBody from 'koa-bodyparser';
import koaCors from '@koa/cors';

import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';

import { formatErr } from './utilities';
import profileSchema from './profile/profileSchema';
import configAccountSchema from './configAccount/configAccountSchema';

const app = new Koa();
const router = new KoaRouter();
const PORT = process.env.PORT || 5000;

app.use(koaLogger());
app.use(koaCors());

// read token from header
app.use(async (ctx, next) => {
	if (ctx.header.authorization) {
		const token = ctx.header.authorization.match(/Bearer ([A-Za-z0-9]+)/);
		if (token && token[1]) {
			ctx.state.token = token[1];
		}
	}
	await next();
});

// GraphQL
const profileql = graphqlKoa((ctx) => ({
	schema: profileSchema,
	context: { token: ctx.state.token },
	formatError: formatErr
}));
router.post('/profile', koaBody(), profileql);
router.get('/profile', profileql);

const configaccountql = graphqlKoa((ctx) => ({
	schema: configAccountSchema,
	context: { token: ctx.state.token },
	formatError: formatErr
}));
router.post('/configaccount', koaBody(), configaccountql);
router.get('/configaccount', configaccountql);

// test route
router.get('/profileql', graphiqlKoa({ endpointURL: '/profile' }));
router.get('/configaccountql', graphiqlKoa({ endpointURL: '/configaccount' }));

app.use(router.routes());
app.use(router.allowedMethods());
// eslint-disable-next-line
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
