import { ADD_TO_FAVOURİTES,REMOVE_FROM_FAVOURİTES } from "../actions/favouritesActions";
import { favItems } from "../initialValues/favItems";

const initialState={
    favItems
}
export default function favReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_FAVOURİTES:
            let advert2 = state.favItems.find((a) => a.advert.id === payload.id);
              if (advert2) {
                return {
                  //spread operatörü
                  ...state, // = cartItems
                };
              } else {
                return {
                    //spread operatörü
                    ...state, 
                    favItems: [...state.favItems, { id: 1, advert: payload }],
                  }
              }
        
          
        case REMOVE_FROM_FAVOURİTES:
          let advert1 = state.favItems.find((a) => a.advert.id === payload.id);
          if(advert1){
            return {...state}
          }else {
            state.favItems.splice(advert1,1)
            return {
              ...state,
            };
          } 
        default:
            return state
    }
}