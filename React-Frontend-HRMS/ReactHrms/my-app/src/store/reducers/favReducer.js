import {
  ADD_TO_FAVOURİTES,
  REMOVE_FROM_FAVOURİTES,
} from "../actions/favouritesActions";
import { favItems } from "../initialValues/favItems";
import { toast } from "react-toastify";

const initialState = {
  favItems,
};
export default function favReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVOURİTES:
      let advert = state.favItems.find((c) => c.advert.id === payload.id);
      if (advert) {
        toast.error("Bu ilani daha önce eklemiştiniz.");

        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favItems: [...state.favItems, { id: 1, advert: payload }],
        };
      }

    case REMOVE_FROM_FAVOURİTES:
      let advert1 = state.favItems.find((c) => c.advert.id === payload.id);
     
      if (advert1) {
        console.log("silindi");
        
        return { ...state };
      } else {
        state.favItems.splice(advert1, 1);
        return {
          ...state,
        };
      }
    default:
      return state;
  }
}
