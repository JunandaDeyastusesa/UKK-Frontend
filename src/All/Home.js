import React,{Component} from "react";
import {Link} from "react-router-dom";

import bg from '../Img/bg-ikon.png';
import './Home.css';


class Home extends Component {




    render(){
      return(
        <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Selamat Datang di Website Pengaduan Masyarakat</h1>
              <h2>Silahkan curahkan semua keluhan anda dengan puas hanya di website kami:)</h2>
              <div>
                <a href="/Pengaduan" className="btn-get-started scrollto">Pengaduan</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={bg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      );
    }
}
export default Home;