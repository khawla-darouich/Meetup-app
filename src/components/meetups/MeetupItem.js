import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import { useContext, useeContext } from 'react';
import FavoritesContext from '../store/Favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            console.log("yeas");

            favoritesCtx.removeFavorites(props.id);
        } else {
            favoritesCtx.addFavorites({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
                image: props.image
            });
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}> {!itemIsFavorite ? 'To Favorites' : 'remove from Favorites'}</button>
                </div>
            </Card>
        </li>);
}

export default MeetupItem;