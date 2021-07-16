import { useContext } from "react";
import FavoritesContext from "../components/store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <h5>You got no favorites yet, start adding some!!</h5>;
    }
    else {
        content = <MeetupList meetups={favoritesCtx.favorites} />;
    }
    return (
        <div>
            <h1>My Favorite Meetups</h1>
            {content}
        </div>
    );
}

export default FavoritesPage;