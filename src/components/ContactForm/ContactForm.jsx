import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './ContactForm.module.scss';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class ContactForm extends Component {
    render() {
        return(
            <div className={style.contactForm}>
                <h3 className={style.formTitle}>Contact Us</h3>
                <form action="https://formspree.io/moqqdpnr" method="POST" className={style.form}>
                  <input type="text" name="name" placeholder="Name" className={classy(style.input, style.name)}/>
                  <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                  <input type="phone" name="phoneNumber" placeholder="Phone Number" className={classy(style.input, style.phone)}/>
                  <textarea name="comments" placeholder="What can we help you with?"className={classy(style.input, style.comment)}/>
                  <input type="submit" value="Send" className={style.submit}/>
                </form>
            </div>
        );
    }
}
