require('dotenv').config();

const Hapi = require('@hapi/hapi');
const notes = require('./api/musics');
const NotesService = require('./services/postgres/MusicsService');
const NotesValidator = require('./validator/musics');

const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Selamat! Server berjalan pada ${server.info.uri}`);
};

init();
