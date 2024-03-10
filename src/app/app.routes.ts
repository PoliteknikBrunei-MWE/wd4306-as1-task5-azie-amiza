import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'places',
    loadComponent: () => import('./places/places.page').then( m => m.PlacesPage)
  },
  {
    path: 'place-detail',
    loadComponent: () => import('./places/place-detail/place-detail.page').then( m => m.PlaceDetailPage)
  },
  {
    path: 'offers',
    loadComponent: () => import('./offers/offers.page').then( m => m.OffersPage)
  },
  {
    path: 'offer-details',
    loadComponent: () => import('./offers/offer-details/offer-details.page').then( m => m.OfferDetailsPage)
  },
  {
    path: 'offer-bookings',
    loadComponent: () => import('./offers/offer-bookings/offer-bookings.page').then( m => m.OfferBookingsPage)
  },
  {
    path: 'new-offers',
    loadComponent: () => import('./offers/new-offers/new-offers.page').then( m => m.NewOffersPage)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./bookings/bookings.page').then( m => m.BookingsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
];
