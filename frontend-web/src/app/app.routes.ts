import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout.component/main-layout.component';

export const routes: Routes = [
{
    path:'',
    component:MainLayoutComponent
}

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes,{
            scrollPositionRestoration:'enabled',
        }),
    ],
    exports:[RouterModule],
})
export class AppRoutingModule{}
