import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allNotificationTypes: (_) =>
            getRequest(`${URL}TipoNotificaciones`, ''),
        allConfigNotificatins: (_) =>
            getRequest(`${URL}ConfigNotificaciones`, ''),
        allWays: (_) =>
            getRequest(`${URL}Medio`, ''),
        allSessions: (_) =>
            getRequest(`${URL}Sesiones`, ''),
        allLinkedAccounts: (_) =>
            getRequest(`${URL}CuentasEnlazadas`, ''),


        notificationTypeById: (_, { id }) =>
            generalRequest(`${URL}TipoNotificaciones/${id}`, 'GET'),
        configNotificationById: (_, { id }) =>
            generalRequest(`${URL}ConfigNotificaciones/${id}`, 'GET'),
        wayById: (_, { id }) =>
            generalRequest(`${URL}Medio/${id}`, 'GET'),
        sessionById: (_, { id }) =>
            generalRequest(`${URL}Sesiones/${id}`, 'GET'),
        linkedAccountById: (_, { id }) =>
			generalRequest(`${URL}CuentasEnlazadas/${id}`, 'GET'),
	},
	Mutation: {
        createNotificationType: (_, { notificationType }) =>
            generalRequest(`${URL}TipoNotificaciones`, 'POST', notificationType),
        updateNotificationType: (_, { id, notificationType }) =>
            generalRequest(`${URL}TipoNotificaciones/${id}`, 'PUT', notificationType),
        deleteNotificationType: (_, { id }) =>
            generalRequest(`${URL}TipoNotificaciones/${id}`, 'DELETE'),


        createConfigNotification: (_, { configNotification }) =>
            generalRequest(`${URL}ConfigNotificaciones`, 'POST', configNotification),
        updateConfigNotification: (_, { id, configNotification }) =>
            generalRequest(`${URL}ConfigNotificaciones/${id}`, 'PUT', configNotification),
        deleteConfigNotification: (_, { id }) =>
            generalRequest(`${URL}ConfigNotificaciones/${id}`, 'DELETE'),


        createWay: (_, { way }) =>
            generalRequest(`${URL}Medio`, 'POST', way),
        updateWay: (_, { id, way }) =>
            generalRequest(`${URL}Medio/${id}`, 'PUT', way),
        deleteWay: (_, { id }) =>
            generalRequest(`${URL}Medio/${id}`, 'DELETE'),


        createSession: (_, { session }) =>
            generalRequest(`${URL}Sesiones`, 'POST', session),
        updateSession: (_, { id, session }) =>
            generalRequest(`${URL}Sesiones/${id}`, 'PUT', session),
        deleteSession: (_, { id }) =>
            generalRequest(`${URL}Sesiones/${id}`, 'DELETE'),


        createLinkedAccount: (_, { linkedAccount }) =>
            generalRequest(`${URL}CuentasEnlazadas`, 'POST', linkedAccount),
        updateLinkedAccount: (_, { id, linkedAccount }) =>
            generalRequest(`${URL}CuentasEnlazadas/${id}`, 'PUT', linkedAccount),
        deleteLinkedAccount: (_, { id }) =>
            generalRequest(`${URL}CuentasEnlazadas/${id}`, 'DELETE')
	}
};

export default resolvers;
