import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites=[],
    totalFavorites: 0,
    addFavorites: (meetup) => { },
    removeFavorites: (meetupId) => { },
    itemIsFavorite: (meetupId) => { },
});


export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler

    };

    function addFavoritesHandler(meetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(meetup);
        });
    }
    function removeFavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.i !== meetupId);
        });
    }
    function itemIsFavoritesHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>);
}
export default FavoritesContext;