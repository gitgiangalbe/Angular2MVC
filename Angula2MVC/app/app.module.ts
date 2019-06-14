import 'hammerjs';
import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service';
import { UserFilterPipe } from './Filter/user.pipe';
import { SearchComponent } from './Shared/search.component';
import AppErrorHandler from './Shared/errorhandler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatNativeDateModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatAutocompleteModule } from '@angular/material';
import { MatSelectModule, MatDialogModule, MatMenuModule, MatProgressBarModule  } from '@angular/material';
import { ManageUser } from './components/manageuser.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatNativeDateModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule, MatFormFieldModule,
        MatInputModule, MatRadioModule,
        MatDatepickerModule, MatAutocompleteModule,
        MatSelectModule, MatDialogModule, MatMenuModule, MatProgressBarModule],
    declarations: [AppComponent, UserComponent, HomeComponent, UserFilterPipe, SearchComponent, ManageUser],
    providers: [{provide: ErrorHandler, useClass: AppErrorHandler }, { provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent],
    entryComponents: [ManageUser]
})

export class AppModule { }