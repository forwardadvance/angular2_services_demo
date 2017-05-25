import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatComponent } from './cat.component';
import { CatListComponent } from './cat.list.component';
import { CatService } from './cat.service';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CatComponent, CatListComponent ],
  bootstrap: [ AppComponent ],
  providers: [ CatService ]
})
export class AppModule { }
