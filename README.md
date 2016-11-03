# Tripple R
A tool for integrating React Router and Redux. Controlling navigation vie state!

## React Router
Is a library that allows you to match React Components to URL and build powerful full-scale applications.

## Redux
Is a state management system that allows you to keep all your data in a central location, passing down to props.

## Tripple R
Bridges the gap between React Router and Redux. It allows you to replay state over time over navigation.

# Howto
Import the required modules

```
import { TrippleR, rrrMiddleware, rrrReducer} from "trippler";
```

Add rrrMiddleware and rrrReducer to your Redux store.
Note: that "otherReducer" will be your reducers, it's just an example, not real.
NOTE: Currently you MUST use compineReducers with a name of "rrr". It will NOT work if you use any other name. 
NOTE: Thunk middleware is just an example, it's not required.

```
let reducers = combineReducers({ rrr: rrrReducer, other: otherReducer });
const store = createStore(
  reducers, 
  applyMiddleware(rrrMiddleware, thunk)
);
```

Include the TrippleR Component to your application.
```
ReactDOM.render(<Router><Provider store={store}>
<div>
  <TrippleR />
  <App />
</div>
</Provider></Router>, document.getElementById('root'));
```

The final step is to use Redux dispatch action "navigateTo".  
This will navigate you to the URL passed, for example, the "aboutUs" page.

```
import { navigateTo } from "trippler";
dispatch(navigateTo("/aboutUs"));
```

The rest is up to you. You can use any Redux implementation and React Router V4 you require.

## Feedback
We are on  the lookup for any feedback. Please file any issue on Github, or hit me up on twitter @gpltaylor

# What does it all do?
TrippleR is the simplest Redux implementation, it gives you the power to control navigation using 
simple dispatch actions that are tracked over time.

## TrippleR
A component that implements React Routers "Redirect". It's this that wires up navigating away. 
Because TrippleR using React Routers implementation, we will always work, even when React Router updates.
The code base is VERY simple and is less than 50 lines of code in total!
When you dispatch an action to navigate somewhere, the TrippleR Component will render a "Redirect" component 
and off the browser goes!

## rrrReducer
A reducer that stores some required information needed for TrippleR to do it's thing. 
There's really nothing interesting going on here, but we need to make sure the Redirect Component is only 
visible when we want the user to redirect away.

## rrrMiddleware
This resets the values within the store to "happy Defaults", allowing the navigation to work, the next time it's clicked.

## navigateTo
This is an action that you passed to dispatch. This will allow you to hook into onClick events and navigate to any page of your choice.

```
import { navigateTo } from "trippler";
dispatch(navigateTo("/aboutUs"));
```

# Coming Soon
* Allow configuration to be passed into TrippleR
* Allow throttle and debounce
* Get feedback from the community