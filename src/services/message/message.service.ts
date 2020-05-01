// Initializes the `Message` service on path `/message`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Message } from './message.class';
import hooks from './message.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'message': Message & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/message', new Message(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('message');

  service.hooks(hooks);
}
