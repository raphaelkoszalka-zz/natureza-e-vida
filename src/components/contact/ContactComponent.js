import './ContactComponent.css';
import React, { Component } from 'react';
import MapComponent from '../map/MapComponent';

class ContactComponent extends Component {

    render() {
        return (
          <div id="contact-component">
            <div className="col-md-6">
              <MapComponent />
            </div>
            <div className="col-md-6">
              <h1 className="padding-top">
                Entre em <strong>contato</strong>:
              </h1>
              <form className="padding-top">
                <div className="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Assunto" />
                </div>
                <div className="form-group">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Nome" />
                </div>
                <div className="form-group">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="WhatsApp" />
                </div>
                <div className="form-group">
                  <input type="text" class="form-control" id="exampleInputPassword2" placeholder="Mensagem" />
                </div>
              </form>
              <div className="clearfix"></div>
              <br />
              <br />
              <br />
              <button type="submit" class="btn btn-default contact-button">Enviar</button>
            </div>
          </div>
        );
    }

}

export default ContactComponent;
