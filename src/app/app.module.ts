import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms'
import { MatTree } from '@angular/material/tree'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule} from '@angular/material/card';

import { DemoMaterialModule } from './material-module';
import { ButtongroupComponent } from './buttongroup/buttongroup.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {LearnSegmentService} from './learnSegments/learn-segment.service'

@NgModule({
  declarations: [
    AppComponent,
    ButtongroupComponent,
    TestComponentComponent,
    ContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatTree,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],

  providers: [LearnSegmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
