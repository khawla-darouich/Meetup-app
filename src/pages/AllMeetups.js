import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetupsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [LoadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://meetup-ebda0-default-rtdb.firebaseio.com/meetups.json'
        ).then(reponse => {
            return reponse.json();
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (<div>
        <h1>All Meetups</h1>
        <MeetupList meetups={LoadedMeetups} />
    </div>);
}

export default AllMeetupsPage;