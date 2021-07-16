import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const entredTitle = titleInputRef.current.value;
        const entredImage = imageInputRef.current.value;
        const entredAddress = addressInputRef.current.value;
        const entredDescription = descriptionInputRef.current.value;

        const MeetupData = {
            title: entredTitle,
            image: entredImage,
            address: entredAddress,
            description: entredDescription
        }

        props.onAddMeetup(MeetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>);
}

export default NewMeetupForm;
