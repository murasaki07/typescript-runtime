import { App } from '../src/index';

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App('Test App');
  });

  test('should create an instance', () => {
    expect(app).toBeDefined();
  });

  test('should return correct name', () => {
    expect(app.getName()).toBe('Test App');
  });

  test('should use default name when not provided', () => {
    const defaultApp = new App();
    expect(defaultApp.getName()).toBe('TypeScript Runtime');
  });
}); 