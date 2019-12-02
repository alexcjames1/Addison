import React, {Component} from 'react';
import style from './Logo.module.scss';
import AddisonLogo from './images/addison-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>
                <img src={AddisonLogo} alt="" />
            </div>
        );
    }
}
