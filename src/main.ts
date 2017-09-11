import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationModule } from './app/applicationComponent/application.module';
import { ProductsModule } from './app/productComponent/product.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(ApplicationModule);
//platformBrowserDynamic().bootstrapModule(NameModule);
platformBrowserDynamic().bootstrapModule(ProductsModule);
