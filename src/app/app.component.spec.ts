import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './shared/services/auth.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {

   // mock the service
  class authServiceStub {      
    isLoggedIn()
    {
      return true;
    }
  };

    TestBed.configureTestingModule({
       imports: [ RouterTestingModule ],
      declarations: [
        AppComponent
      ],
      providers:    [ {provide: AuthService, useClass: authServiceStub } ]
      
    }).compileComponents();
  })); 

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'My Angular 2 App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Angular 2 App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);    
    const authService = fixture.debugElement.injector.get(AuthService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Angular 2 App');
  }));
});
