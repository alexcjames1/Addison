import React, {Component} from 'react';
import style from './Section.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Section extends Component {
    render() {
        const { kind, children, className, size } = this.props;
        // kind types: primary, secondary, dark
        // size: big, small, xsmall, normal

        return(
            <div className={classy('section', className, (kind && 'section--' + kind), (size && 'section--' + size ) )}>
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}
