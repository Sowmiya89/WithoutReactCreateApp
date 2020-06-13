import { createStore} from 'redux';
import ReduxReducer from '../reducers/ReduxReducer';

export let store = createStore(ReduxReducer, {
    productList: [
      { productId : 1 , productName :'React' },
      { productId : 2 , productName :'Redux' },
      { productId : 3 , productName :'Profit' }
    ]
    
  });

