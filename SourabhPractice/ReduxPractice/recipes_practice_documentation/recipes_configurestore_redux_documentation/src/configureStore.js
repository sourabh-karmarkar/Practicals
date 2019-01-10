import {applyMiddleware,createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers'

export default function configureStore(preloadedState){
    const middlewares=[loggerMiddleware,thunkMiddleware];
    const middlewareEnhancer=applyMiddleware(...middlewares);

    const enhancers=[middlewareEnhancer,monitorReducerEnhancer];
    const composedEnhancers=composeWithDevTools(...enhancers);
    const store=createStore(rootReducer,preloadedState,composedEnhancers);

    //hot reloading
    if(process.env.NODE_ENV !== 'production' && module.hot)
    {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    }
    return store;
}