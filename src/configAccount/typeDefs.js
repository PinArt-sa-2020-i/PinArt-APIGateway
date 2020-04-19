export const configAccoutTypeDef = `
    type NotificationType {
        id: Int!
        nombre: String!
        descripcion: String!
    }
    type ConfigNotification {
        id: Int!
        userId: Int!
        typeId: Int!
        activado: Boolean!
    }
    type Way {
        id: Int!
        nombre: String!
    }
    type Session {
        id: Int!
        userId: Int!
        authwayId: Int!
        dispositivo: String!
        creacion: String!
        activado: Boolean!
    }
    type LinkedAccount {
        id: Int!
        userId: Int!
        authwayId: Int!
        correo: String!
    }


    input NotificationTypeInput {
        nombre: String!
        descripcion: String!
    }
    input ConfigNotificationInput {
        userId: Int!
        typeId: Int!
        activado: Boolean!
    }
    input WayInput {
        nombre: String!
    }
    input SessionInput {
        userId: Int!
        authwayId: Int!
        dispositivo: String!
        creacion: String!
        activado: Boolean!
    }
    input LinkedAccountInput {
        userId: Int!
        authwayId: Int!
        correo: String!
    }

`
;

export const configAccoutQueries = `
    allNotificationTypes: [NotificationType]!
    allConfigNotificatins: [ConfigNotification]!
    allWays: [Way]!
    allSessions: [Session]!
    allLinkedAccounts: [LinkedAccount]!

    notificationTypeById(id: Int!): NotificationType!
    configNotificationById(id: Int!): ConfigNotification!
    wayById(id: Int!): Way!
    sessionById(id: Int!): Session!
    linkedAccountById(id: Int!): LinkedAccount!
`;

export const configAccoutMutations = `
    createNotificationType(notificationType: NotificationTypeInput!): NotificationType!
    updateNotificationType(id: Int!, notificationType: NotificationTypeInput!): NotificationType!
    deleteNotificationType(id: Int!): Int

    createConfigNotification(configNotification: ConfigNotificationInput!): ConfigNotification!
    updateConfigNotification(id: Int!, configNotification: ConfigNotificationInput!): ConfigNotification!
    deleteConfigNotification(id: Int!): Int

    createWay(way: WayInput!): Way!
    updateWay(id: Int!, way: WayInput!): Way!
    deleteWay(id: Int!): Int

    createSession(session: SessionInput!): Session!
    updateSession(id: Int!, session: SessionInput!): Session!
    deleteSession(id: Int!): Int

    createLinkedAccount(linkedAccount: LinkedAccountInput!): LinkedAccount!
    updateLinkedAccount(id: Int!, linkedAccount: LinkedAccountInput!): LinkedAccount!
    deleteLinkedAccount(id: Int!): Int
`;