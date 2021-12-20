import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './header.module.scss';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>React Poker</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/profile">
                    Me
                </Link>
                <Link activeClassName={style.active} href="/profile/john">
                    John
                </Link>
    <Link activeClassName={style.active} href="/registation">
                    Registation
                </Link>
            </nav>
        </header>
    );
};

export default Header;
