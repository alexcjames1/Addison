import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './PurchaseForm.module.scss';
import team from './images/team.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class PurchaseForm extends Component {
    render() {
        return(
            <Section className={style.section} kind="primary" size="small">
                <div className={style.line}></div>
            <h2 className={style.sectionTitle}>Place Your Order Today!</h2>
            <div className={style.contactForm}>
                <form action="https://formspree.io/moqqdpnr" method="POST" className={style.form}>
                    <div className={style.contact}>
                        <h3 className={style.formTitle}>Contact Information</h3>
                        <input type="text" name="name" placeholder="Name" className={classy(style.input, style.name)}/>
                        <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                        <input type="phone" name="phoneNumber" placeholder="Phone Number" className={classy(style.input, style.phone)}/>
                        <textarea name="comments" placeholder="What can we help you with?"className={classy(style.input, style.comment)}/>
                    </div>
                    <div className={style.productInfo}>
                        <h3 className={style.formTitle}>Product Information</h3>
                        <input type="text" name="product" placeholder="Product" className={classy(style.input, style.product)}/>
                        <div className={style.specifications}>
                            <input type="text" name="size" placeholder="Size" className={classy(style.input, style.size)}/>
                            <input type="text" name="length" placeholder="Length" className={classy(style.input, style.length)}/>
                        </div>
                        <textarea name="requirements" placeholder="Additional Requirements"className={classy(style.input, style.comment)}/>
                        <input type="submit" value="Submit" className={style.submit}/>
                    </div>
                </form>
            </div>
        </Section>
        );
    }
}
