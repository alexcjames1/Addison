import React, {Component} from 'react';
import style from './Logo.module.scss';
import SnowminerLogo from './images/snowminer-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>
                <img src={SnowminerLogo} alt="" />
            </div>
        );
    }
}
