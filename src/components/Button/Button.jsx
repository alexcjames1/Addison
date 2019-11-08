import React, {Component} from 'react';
import style from './Button.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { kind, children, className, state } = this.props;
        // kind types: primary, link, CTA, large
        // size: big, small, xsmall, normal

        return(
            <div className={classy('button', className, (kind && 'button--' + kind), (state && 'button--' + state ) )}>
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}
