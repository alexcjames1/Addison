import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './EasyBeautifulInterface.scss';
import phoneInterface from './images/interface-graphic.png';
import { Section } from '../../components';

export default class EasyBeautifulInterface extends Component {
    render() {
        return(
            <div className="easyBeautifulInterface">
                <Section className="section section__easyBeautifulinterface" kind="primary" size="xsmall">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6">
                                <div className="media">
                                    <div className="media__figure">
                                        <img src={phoneInterface} alt="#" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="media__content">
                                    <div className="media__header">
                                        <h4 className="media__subTitle">
                                            Easy and fun to use
                                        </h4>
                                        <div className="media__title">
                                            <h2 className="h2 heading">
                                                Beautiful Interface
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="media__body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus sed condimentum interdum. Donec placerat ornare sapien dictum iaculis. Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu ad litora
                                        </p>
                                    </div>
                                    <div className="media__footer">
                                        <a href="#" className="button button--lg button--primary">
                                            <i className="mdi mdi-arrow-right-drop-circle-outline button--watchArrow"></i> Watch Video
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Section>
                </div>
        );
    }
}
