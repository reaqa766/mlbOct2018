import { FantasyModule } from './fantasy.module';

describe('FantasyModule', () => {
  let fantasyModule: FantasyModule;

  beforeEach(() => {
    fantasyModule = new FantasyModule();
  });

  it('should create an instance', () => {
    expect(fantasyModule).toBeTruthy();
  });
});
