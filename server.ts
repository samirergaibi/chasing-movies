import 'dotenv/config';
import Fastify from 'fastify';
import proxy from '@fastify/http-proxy';
import cors from '@fastify/cors';

if (!process.env.TMDB_API_KEY) {
  throw new Error('Missing required environment variable: TMDB_API_KEY');
}

const config = {
  tmdb: 'https://api.themoviedb.org/3/',
};

const server = Fastify({
  logger: true,
});

server.register(cors, {
  origin: ['https://chasingmovies.com'],
});

server.register(proxy, {
  upstream: config.tmdb,
  prefix: '/tmdb',
  replyOptions: {
    rewriteRequestHeaders: (_, headers) => ({
      ...headers,
      authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      accept: 'application/json',
    }),
  },
});

try {
  await server.listen({ port: 3011 });
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
