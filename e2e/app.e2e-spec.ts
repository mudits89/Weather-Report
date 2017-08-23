import { WeatherAppCAPage } from './app.po';

describe('weather-app-ca App', () => {
  let page: WeatherAppCAPage;

  beforeEach(() => {
    page = new WeatherAppCAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
