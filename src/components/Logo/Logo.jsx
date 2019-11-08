import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.scss';
import SnowminerLogo from './images/snowminer-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className="logo">
                <img src={SnowminerLogo} alt="" />
            </div>
        );
    }
}
