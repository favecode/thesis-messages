// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const users = require(`${CONTROLLERS}/${VERSION}/Users`)

const resolvers = {
    Query: {
        getUser: (_, args, context) => users.show(args, context),
    }
}

module.exports = resolvers