import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useStoreon } from 'storeon/preact';
import { CounterIncrementEvent } from '../../store/slices/counter.module';
import style from './profile.module.scss';

interface Props {
    user: string;
}

const Profile: FunctionalComponent = () => {

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

        </div>
    );
};

export default Profile;
