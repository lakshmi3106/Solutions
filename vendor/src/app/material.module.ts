import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';

import {CdkTableModule} from '@angular/cdk/table';

import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  exports: [
    A11yModule,
   
    CdkTableModule,
   
    MatButtonModule,
   
    MatMenuModule,
    
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule
    
    
  ]
})
export class MaterialModule {}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */