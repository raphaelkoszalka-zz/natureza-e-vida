import './ContactComponent.css';
import React, { Component } from 'react';
import MapComponent from '../map/MapComponent';

class ContactComponent extends Component {

    render() {
        return (
            <div id="contact-component">
                <div className="col-md-6 App">
                    <MapComponent />
                </div>
                <div className="col-md-6">
                    <h1 className="padding-top">
                        Entre em <strong>contato</strong>:
                    </h1>
                    <div className="clearfix"></div>
                    <br />
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="subject" placeholder="Assunto" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Nome" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="whatsapp" placeholder="WhatsApp" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="message" placeholder="Mensagem" />
                        </div>
                    </form>
                    <div className="clearfix"></div>
                    <br />
                    <div className="text-right">
                        <button type="submit" className="btn btn-lg btn-default btn-about">Enviar</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactComponent;
