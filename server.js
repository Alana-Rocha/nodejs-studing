//NodeJS

// import { createServer } from "node:http";

// const server = createServer((request, response) => {
//   response.write("Teste");

//   return response.end();
// });

// server.listen(3333);

//Fastify

import { fastify } from "fastify";

const server = fastify();

server.post("/api/:id", (req) => {
  return { teste: req.params.id };
});

server.listen({ port: 3333 });
