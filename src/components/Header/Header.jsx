import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header.module.scss';
import { Logo, Header__nav } from '../../components';

export default class Header extends Component {
    render() {
        return(
            <header className={classy(style.header, style.transparent)}>
                <div className={style.container}>
                    <div className={style.header__container}>
                        <div className={style.header__logo}>
                            <div className={style.logo}>
                                <a href="#">
                                    <Logo />
                                </a>
                            </div>
                        </div>

                        <div className={style.header__navigation}>
                            <Header__nav />
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}
