'use strict';

const hapi = require('hapi');
const inert = require('inert');
const path = require('path');
const agent = require('superagent');
const boom = require('boom');

const failure = (e) => {
  console.log('server failed to start: =>', e);
};

const success = (server) => {
  console.log(`server booted up successfully at: ${server.info.uri}`);
};

const mailChimpBaseUri = 'https://us19.api.mailchimp.com/3.0/';

const bootup = async () => {
  const server = hapi.Server({
    port: process.env.PORT || 8000,
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public'),
      }
    }
  });

  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/list/{email}',
    handler(request) {
      const { email } = request.params;

      return agent
        .post(`${mailChimpBaseUri}lists/c160b732bf/members`)
        .auth('REAPbeta', '3ed138164272d0e0821e325443c2549c-us19')
        .send({ email_address: email, status: 'subscribed' })
        .then((res) => {
          switch (res.status) {
            case 200:
              return res.body;
              break;
            case 400:
              return boom.badRequest(res.body);
              break;
            case 401:
              return boom.unauthorized(res.body);
              break;
            default:
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      }
    }
  });

  try {
    await server.start();

    success(server);
  } catch (e) {
    failure(e);
  }
};

bootup();
