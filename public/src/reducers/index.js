import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import invoicesReducer from './invoices';
import customersReducer from './customers';
import productsReducer from './products';
import selectedCustomerReducer from './selected_customer';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  customers: customersReducer,
  products: productsReducer,
  selectedCustomer: selectedCustomerReducer,
  form
});

export default rootReducer;