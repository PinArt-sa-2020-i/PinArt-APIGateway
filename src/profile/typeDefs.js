export const profileTypeDef = 
    // type User {
    //     id: Int!
    //     nombre: String!
    //     apellido: String!
    //     nick: String
    //     correo: String!
    //     eliminado: Boolean!
    //     privado: Boolean!
    //     createdDate: String!
    //     received: [Report]
    //     recoveries: [Recovery]
    //     profiles: [Profile]
    //     auth: [Auth]
    // }
    // input UserInput {
    //     nombre: String!
    //     apellido: String!
    //     nick: String
    //     correo: String!
    //     eliminado: Boolean!
    //     privado: Boolean!
    // }
    `
    type Profile {
        country: Country!
        id: Int!
        fechaNacimiento: String
        genero: String
        foto: String
        descripcion: String
        noTelefono: String
        edad: String
        userId: Int!
        countryId: Int! 
    }
    type Country {
        id: Int!
        nombre: String!
        prefijo: String!
    }
    input ProfileInput {
        fechaNacimiento: String
        genero: String
        foto: String
        descripcion: String
        noTelefono: String
        edad: String
        userId: Int!
        countryId: Int! 
    }
    input CountryInput {
        nombre: String!
        prefijo: String!
    }
`
;

export const profileQueries = 
// profileById(id: Int!): Profile!
// allCountries: [Country]!
`
    allProfiles: [Profile]!
    countryById(id: Int!): Country!
`;

export const profileMutations = 
    // createProfile(profile: ProfileInput!): Profile!
    // updateProfile(id: Int!, profile: ProfileInput!): Profile!
    // deleteProfile(id: Int!): Int
`
    createCountry(country: CountryInput!): Country!
`;