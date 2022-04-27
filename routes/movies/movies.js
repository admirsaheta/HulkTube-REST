import { movies} from '../../data/index.js';




export default async function(fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.send(movies);
    })
}