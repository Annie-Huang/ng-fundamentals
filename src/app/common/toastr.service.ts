// import {Injectable} from '@angular/core';

// what this statement is, this is just a little statement using TypeScript to say that there's already a global Toastr object,
// so that I can use it inside of my TypeScript and I don't get any errors.
// declare let toastr: any;

// This is our Toastr Service right now, and there's a problem with this Toastr Service.
// This is important to understand, right now the Toastr Service is just a global, in our index file we've got a reference to the Toastr js file right here.
// The way that this js file works, it's just creates a global variable and puts it on the window object.
// That's how we access it, is through the global variable reference.
// The Toastr Service that we created is actually a service that's available for Angular 2 dependency injection.
// What we've done is we created a class that wraps the Toastr's API, it re-exposes the same methods.
// There's four of them, success, info, warning and error. Which is fine, because Toastr has a small API,
// but imagine a big third party component like say jQuery, which had an extremely large API.
// We wouldn't want to reimplement that, besides the fact that the Toastr object by itself is just fine, it doesn't need a wrapper class.
// We've had to create this wrapper class, so that we can use it with Angular 2, but it doesn't actually need a wrapper class.
// If we just add a handle to the global Toastr object, we'd be fine.
// Unfortunately, just referencing the global Toastr object inside of our code, would be problematic.
// There is a lot of problems that come from using global objects, one of which is that we lose the ability of ES6 modules to do things
// like tree shaking and other features that comes with ES6 modules, and it's just a bad practice.
// Using globals is not a good idea, we want a new way to access this Toastr Service that doesn't involve creating a whole class just to wrap it.
// Now to make that change, we're going to have to understand some very specific features of dependency injection.

// @Injectable()
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
//   info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
//   warning(message: string, title?: string) {
//     toastr.warning(message, title);
//   }
//   error(message: string, title?: string) {
//     toastr.error(message, title);
//   }
// }

import {InjectionToken} from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken()<Toastr>('toastr');

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warining(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
