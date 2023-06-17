import { Route } from "@angular/router";
// import { HelloComponent } from "./components/hello/hello.component";

export const appRoutes: Route[] = [
{
    path: '',
    // component: HelloComponent,
    loadComponent:() => import('./components/hello/hello.component').then((c) => c.HelloComponent),
    pathMatch: 'full'
}
];