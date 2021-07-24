export const ADD_TO_FAVOURİTES="ADD_TO_FAVOURİTES"
export const REMOVE_FROM_FAVOURİTES="REMOVE_FROM_FAVOURİTES"

export function addToFavourites(advert){
    return{
        //bu işlem reducerların içerisinden ADD_TO_FAVOURİTES ın hangi state leri etkilediğini bulur
        //payload : state i etkileyecek olan veri - state e göndermek istediğin değer
        type : ADD_TO_FAVOURİTES,
        payload : advert

    }

}
export function removeFromFavourites(advert){
    return{
        type : REMOVE_FROM_FAVOURİTES,
        payload : advert
    }
}