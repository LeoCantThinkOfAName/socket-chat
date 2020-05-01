import app from '../../src/app';

describe('\'Message\' service', () => {
  it('registered the service', () => {
    const service = app.service('message');
    expect(service).toBeTruthy();
  });
});
