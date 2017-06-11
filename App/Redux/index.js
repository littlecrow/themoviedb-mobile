import configureStore from './ConfigureStore';
import RootLogic from './RootLogic';
import rootReducer from './RootReducer';

export default () => configureStore(rootReducer, RootLogic);
