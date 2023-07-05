/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserControllerService } from './services/user-controller.service';
import { TvaControllerService } from './services/tva-controller.service';
import { TimbreFiscaleControllerService } from './services/timbre-fiscale-controller.service';
import { ProduitControllerService } from './services/produit-controller.service';
import { NumFactureControllerService } from './services/num-facture-controller.service';
import { FactureControllerService } from './services/facture-controller.service';
import { ClientControllerService } from './services/client-controller.service';
import { CategorieControllerService } from './services/categorie-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UserControllerService,
    TvaControllerService,
    TimbreFiscaleControllerService,
    ProduitControllerService,
    NumFactureControllerService,
    FactureControllerService,
    ClientControllerService,
    CategorieControllerService,
    AuthenticationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
