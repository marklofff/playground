const ENV = process.env.NODE_ENV || 'development'
const SOCKET_HOST = (ENV === 'test') ? 'http://localhost:8011' :'http://localhost:8010'
const SOCKET_PORT = (ENV === 'test') ? 8011 : 8010
const DATABASE = `playground_${ENV}`
const DEFAULT_LABEL = 'All'

module.exports = {
    SOCKET_HOST: SOCKET_HOST,
    SOCKET_PORT: SOCKET_PORT,
    DATABASE: DATABASE,
    DEFAULT_LABEL: DEFAULT_LABEL
};
