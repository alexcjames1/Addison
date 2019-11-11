import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header.module.scss';
import { Logo, Navigation } from '../../components';

export default class Header extends Component {
    render() {
        return(
            <header className={classy(style.header, style.transparent)}>
                <div className={style.container}>
                    <div className={style.header__container}>
                        <div className={style.header__logo}>
                            <div className={style.logo}>
                                <a href="google.com">
                                    <Logo />
                                </a>
                            </div>
                        </div>

                        <div className={style.header__navigation}>
                            <Navigation />
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}
