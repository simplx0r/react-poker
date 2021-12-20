import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useStoreon } from 'storeon/react';
import { CounterIncrementEvent } from '../../store/slices/counter.module';
import style from './style.scss';

interface Props {
    user: string;
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
    const { user } = props;
    const [time, setTime] = useState<number>(Date.now());
    const {dispatch, number} = useStoreon('number')
    console.log(number)

    // gets called when this route is navigated to
    useEffect(() => {
        const timer = window.setInterval(() => setTime(Date.now()), 1000);

        // gets called just before navigating away from the route
        return (): void => {
            clearInterval(timer);
        };
    }, []);

    // update the current time
    const increment = (): void => {
        dispatch(CounterIncrementEvent)
    };

    return (
        <div class={style.profile}>
            <h1>Profile: {user}</h1>
            <p>This is the user profile for a user named {user}.</p>

            <div>Current time: {new Date(time).toLocaleString()}</div>

            <p>
                <button onClick={increment}>Click Me</button> Clicked {number} times.
            </p>
        </div>
    );
};

export default Profile;
