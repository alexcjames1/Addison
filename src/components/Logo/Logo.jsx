import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.scss';
import addisonLogo from './images/addison-logo-white.png';

export default class Logo extends Component {
    render() {
        return(
            <div className="logo">
                <img src={addisonLogo} alt="" />
            </div>
        );
    }
}
