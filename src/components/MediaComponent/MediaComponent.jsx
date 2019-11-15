import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './MediaComponent.scss';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Heading} from '../';

export default class MediaComponent extends Component  {
    render() {
        const {image, title, paragraph, column, textAlign } = this.props;

        return (
            <div className={ classy('media', column ? 'media--column' : '', textAlign ? ['textAlign--' + textAlign] : '') }>
                <div className={classy(style.media__figure, style.media__figureCentered)}>
                    <img src={image} />
                </div>
                <div className={style.media__content}>
                    {title ? <Heading tag="h3" className={style.media__title}>{title}</Heading> : ''}
                    {paragraph ? <p className={style.media__body}>{paragraph}</p> : ''}
                </div>
            </div>
        );
    }
}
