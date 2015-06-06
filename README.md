# Efflux

> Yet another simple Promises/A+ compliant async flow control using ES6 generators.

![Travis](http://img.shields.io/travis/Wildhoney/Efflux.svg?style=flat-square)
&nbsp;
![Bower](https://img.shields.io/bower/v/efflux.svg?style=flat-square)
&nbsp;
![npm](http://img.shields.io/npm/v/efflux.svg?style=flat-square)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)

## Example

```javascript
const getModels = () => {

    return efflux(function*() {

        const users  = yield getUsers(),
              places = yield getPlaces(users);

        return { users, places };

    });

};

getModels().then((models) => {
    console.log(models);
});
```