<img src="media/logo.png" width="150" />

> Yet another simple Promises/A+ compliant async flow control using ES6 generators.

![Travis](http://img.shields.io/travis/Wildhoney/Async.svg?style=flat-square)
&nbsp;
![Bower](http://img.shields.io/bower/v/lib-async.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/lib-async.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

 * **npm:** `npm i lib-async`

## Example

```javascript
new Async(function* () {

    try {

        const users  = yield getUsers();
        const places = yield getPlaces(users);
        return { users, places };
        
    } catch (error) {
    
        // Any errors in `getUsers` and/or `getPlaces` can be caught.
        showError(error);
    
    }

}).then(collections => {

    // `collections` is now an object of users and places.
    console.log(collections);

);
```