import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {

        fetch(
            'https://meetup-ebda0-default-rtdb.firebaseio.com/meetups.json'
            , {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (<div>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>);
}

export default NewMeetupPage;