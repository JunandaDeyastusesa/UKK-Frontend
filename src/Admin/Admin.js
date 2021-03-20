import React,{Component} from "react";
import {Link} from "react-router-dom";

import './Admin.css';

import ikon1 from '../Img/Ikon-05.png'
import ikon2 from '../Img/Ikon-06.png'
import ikon3 from '../Img/Ikon-07.png'
import ikon4 from '../Img/Ikon-08.png'
import ikon5 from '../Img/Ikon-09.png'

import contoh from '../Img/contoh.jpg'

class Admin extends Component {

    render(){
      return(
          <div className="lp-badan">
            <div className="container">
                <div className="lp-header">
                    <h2>Verifikasi dan Validasi</h2>
                </div>
                <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">NIK</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Tgl</th>
                    <th scope="col">Isi Pengaduan</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>001</td>
                    <td>Juna</td>
                    <td>20/03/2020</td>
                    <td>Lampu jalan Rt.01 Rw.02 (Tiang 3) Mati</td>
                    <td><img className="img-lp" src={contoh} /></td>
                    <td>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-warning active ">
                                <input type="radio" name="options" id="option1" defaultChecked /> <img className="img-laporan pad-1" src={ikon3}/>
                            </label>&nbsp;
                            <label className="btn btn-warning active"  data-target="#exampleModal" data-toggle="modal">
                                <input type="radio" name="options" id="option1"/><img className="img-laporan pad-2" src={ikon1}/>
                            </label>&nbsp;
                            <label className="btn btn-warning active">
                                <input type="radio" name="options" id="option1"/><img className="img-laporan pad-3" src={ikon2}/>
                            </label>&nbsp;
                            <label className="btn btn-warning active">
                                <input type="radio" name="options" id="option1"/><img className="img-laporan pad-4" src={ikon4}/>
                            </label>&nbsp;
                            <label className="btn btn-warning active">
                                <input type="radio" name="options" id="option1"/><img className="img-laporan pad-5" src={ikon5}/>
                            </label>&nbsp;

                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header head-laporan">
                                            <h5 className="modal-title" id="exampleModalLabel">Beri Tanggapan</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span className="head-x-laporan" aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-floating">
                                                <label htmlFor="formFileSm" className="form-label">Tanggapan</label>
                                                <textarea className="form-control" placeholder="Berikan Tanggapan disini" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                                            </div>
                                            <div className="date-penanggapan">
                                                <label htmlFor="formFileSm" className="form-label mt-3">Tanggal Penanggapan</label>
                                                <input className="form-control" type="date" placeholder="Default input" aria-label="default input example" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn-save-laporan">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className="btn-group btn-group-toggle mt-2" data-toggle="buttons">
                            <label className="btn active">
                                <p className="pe-button-laporan">Proses</p>
                            </label>&nbsp;
                            <label className="btn active">
                                <p className="pe-button-laporan">Beri <br /> Tanggapan</p>
                            </label>&nbsp;
                            <label className="btn active">
                                <p className="pe-button-laporan">Tindak <br /> Lanjut</p>
                            </label>&nbsp;
                            <label className="btn active">
                                <p className="pe-button-laporan">Selesai</p>
                            </label>&nbsp;
                            <label className="btn active">
                                <p className="pe-button-laporan">Cetak</p>
                            </label>&nbsp;
                        </div>
                   </td>
                </tr>
                </tbody>
            </table>    
        </div>
      </div>
      
      );
    }
}
export default Admin;