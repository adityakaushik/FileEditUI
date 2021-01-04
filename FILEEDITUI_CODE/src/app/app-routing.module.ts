import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FileDetailsComponent } from './file-list/file-details/file-details.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'Files', component: FileListComponent },
  { path: 'BrandingFolders', component: FolderListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
