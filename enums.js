const MemberRoleEnum = {
    OWNER:0,
    ADMIN:1,
    USER:2,
    ALL_OPTIONS: [0,1,2]
}

const MemberStatusEnum = {
    ACTIVE:0,
    INVITED:1,
    ALL_OPTIONS: [0,1]
}

const HttpStatusCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,

    INTERNAL_SERVER: 500,

} 

module.exports = {
    MemberRoleEnum: MemberRoleEnum,
    MemberStatusEnum: MemberStatusEnum,
    HttpStatusCodes: HttpStatusCodes
}