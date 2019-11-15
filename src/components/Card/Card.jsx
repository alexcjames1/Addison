import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.module.scss';
import {Heading} from '../';



export default class Card extends Component {
    render() {
        const {image, title, paragraph, column, textAlign, button } = this.props;

        return(
            <div className={ classy(style.media, style.card) }>
                <div className={style.card__figure}>
                    <img src={image}/>
                </div>
                <div className={style.card__content}>
                    {title ? <Heading tag="h4" className={style.card__heading}>{title}</Heading> : ''}
                    {paragraph ? <p className={style.card__body}>{paragraph}</p> : ''}
                    {button ? <a className={style.card__button}>{button}</a> : ''}
                </div>
            </div>

        );
    }
}
