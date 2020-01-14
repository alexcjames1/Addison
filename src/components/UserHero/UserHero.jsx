import React, {Component} from 'react';
import style from './UserHero.module.scss';

export default class UserHero extends Component {
    render() {
        return(
            <div className={style.userHero}>
                <h1 className={style.header}>We are <br></br> Addison Stl</h1>
            </div>
        );
    }
}
