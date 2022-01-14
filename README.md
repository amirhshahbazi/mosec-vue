<h1 align="center">
  <div> <img src="https://mosec.jsdev.best/mosec_small.png" /> </div>
  Mofid Securities technical assignment with Vue.js.
</h1>

<p align="center">
 This is a project to fetch and show the issues of a Github repository. Instead of typical pagination, the app uses an infinite scroll behavior to load more issues. 
 </p>
<div align="center">  <a href="https://mosec.jsdev.best"> Demo </a> </div>

### ⭕ Notes
- The app doesn't use any UI frameworks
- The styling is mainly done with scoped SCSS blocks
- It uses BEM to organize styling
- Unit tests are written to ensure the core functionality of some custom UI elements
- E2E tests are also included
- The app uses the Composition API instead of the Options API for better separation of logic and reusability
- No external library/package is used for infinite scrolling. It's implemented in the application using the Intersection Observer API (and a Polyfill, of course!)

---------------

### ⚙️ How to run
``` 
npm install
npm run serve
```

---------------

### ✅ Unit tests

#### Unit tests include:
- SwitchButton renders properly and is initiated with a false value.
- The button's state is changed with each click.
- The internal toggle method works properly.
- After each state change, the result is emitted to the parent component.
- Toast component renders properly.
- The modifier class for error state renders properly.

#### Run the tests with the command below:
```
npm run test:unit
```

---------------

### ✅ E2E tests
#### E2E tests include:
- Sanity test to check if the app renders and the list of issues is visible.
- Filtering open and closed issues works.
- Infinite scroll works both on desktop and mobile devices.
#### Run the tests with the command below:
```
npm run test:e2e
```
