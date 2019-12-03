import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { app } from './redux/reducer/appReducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const state = { 
  listing: {
    listingError: '',
    items: [],
    isLoading: false
  }
};

const stateOther = { 
  listing: {
    listingError: '',
    items: [{
      id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec",
      name:"Jassi",
      phoneNumber:"+91-888-555-4561",
      emaiId:"jassi@prowareness.nl",
      gender:"Male",
      locations:"Bangalore,Mumbai"
    }],
    isLoading: false
  }
};

describe('Reducer', () => {
  it('should see item request call', () => {    
    const newState = app(state, {
      type: 'ITEMS_REQUESTED'
    });
    expect(newState).toEqual({
      listing: {
        listingError: '',
        items: [],
        isLoading: true
      }
    });
  });

  it('should see item success call', () => {    
    const newState = app(state, {
      type: 'ITEMS_REQUEST_SUCCESS',
      result: [{
        id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec",
        name:"Jassi",
        phoneNumber:"+91-888-555-4561",
        emaiId:"jassi@prowareness.nl",
        gender:"Male",
        locations:"Bangalore,Mumbai"
      }]
    });
    expect(newState).toEqual({
      listing: {
        listingError: '',
        items: [
          {
            id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec",
            name:"Jassi",
            phoneNumber:"+91-888-555-4561",
            emaiId:"jassi@prowareness.nl",
            gender:"Male",
            locations:"Bangalore,Mumbai"
          }       
        ],
        isLoading: false
      }
    });
  });

  it('should see item delete call', () => {    
    const newState = app(stateOther, {
      type: 'ON_ITEM_DELETE_REQUEST',
      id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec"
    });
    expect(newState).toEqual({
      listing: {
        listingError: '',
        items: [],
        isLoading: false
      }
    });
  });

  it('should see item add call', () => {    
    const newState = app(state, {
      type: 'ON_ITEM_UPDATE_REQUEST',
      item: [{
        id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec",
        name:"Jassi",
        phoneNumber:"+91-888-555-4561",
        emaiId:"jassi@prowareness.nl",
        gender:"Male",
        locations:"Bangalore,Mumbai"
      }]
    });
    expect(newState).toEqual({
      listing: {
        listingError: '',
        items: [{
          id:"2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec",
          name:"Jassi",
          phoneNumber:"+91-888-555-4561",
          emaiId:"jassi@prowareness.nl",
          gender:"Male",
          locations:"Bangalore,Mumbai"
        }],
        isLoading: false
      }
    });
  });

});