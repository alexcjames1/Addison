import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.scss';
import {Heading} from '../';



export default class Card extends Component {
    render() {
        const {image, title, paragraph, column, textAlign, button } = this.props;

        return(
            <div className={ classy('media', 'card') }>
                <div className="card__figure">
                    <img src={image}/>
                </div>
                <div className="card__content">
                    {title ? <Heading tag="h4" className='card__heading'>{title}</Heading> : ''}
                    {paragraph ? <p className='card__body'>{paragraph}</p> : ''}
                    {button ? <a className="card__button">{button}</a> : ''}
                </div>
            </div>

        );
    }
}
