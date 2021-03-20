import React,{Component} from "react";
import {Link} from "react-router-dom";

import laporan from '../Img/laporan-ikon.png';
import './Pengaduan.css';


class Pengaduan extends Component {

    render(){
      return(
        <section className="d-flex align-items-center body-pangaduan">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={laporan} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Hii Juna selamat datang di Website Pengaduan Masyarakat</h1>
              <h2 className="h2-title">Silahkan curahkan semua keluhan anda dengan puas hanya di website kami:)</h2>
              <div>
                <div>
                  {/* Button trigger modal */}
                  <button type="button" className="btn-get-started scrollto" data-toggle="modal" data-target="#exampleModal">
                    Pengaduan
                  </button>
                  {/* Modal */}
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header head-form-pengaduan">
                          <h5 className="modal-title" id="exampleModalLabel">Form Pengaduan</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="head-x-pengaduan" aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="form-floating">
                            <label htmlFor="formFileSm" className="form-label">Pengaduan</label>
                            <textarea className="form-control" placeholder="Silahkan isi pengaduan disini" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="formFileSm" className="form-label mt-3">Bukti Foto</label>
                            <input className="form-control form-control pb-4" id="formFileSm" type="file" />
                          </div>
                          <div className="date-pengaduan">
                            <label htmlFor="formFileSm" className="form-label mt-3">Tanggal Pengaduan</label>
                            <input className="form-control" type="date" placeholder="Default input" aria-label="default input example" />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn-send-pengaduan">Kirim</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="h2-riwayat-pengaduan">Riwayat Pengaduan</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Pengaduan</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Tanggapan</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lampu Mati</td>
                  <td>lamp.png</td>
                  <td>Segera mungkin kami perbaiki</td>
                  <td>Proses</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Lampu Mati</td>
                  <td>lamp.png</td>
                  <td>Sudah kami perbaiki</td>
                  <td>Selesai</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Lampu Mati</td>
                  <td>lamp.png</td>
                  <td>Segera mungkin kami perbaiki</td>
                  <td>Proses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    

      );
    }
}
export default Pengaduan;