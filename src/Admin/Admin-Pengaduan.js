import React,{Component} from "react";
import {Link} from "react-router-dom";
import Masyarakat from "./Admin-Masyarakat";

import './Admin-Pengaduan.css';

class Pengaduan extends Component {

    render(){
      return(
        <div className="admin-pengaduan">
            <div className="container Admin">
                <h2 className="h2-admin">Data Pengaduan</h2>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">NIK</th>
                    <th scope="col">Isi Pengaduan</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Tgl Pengaduan</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1001</th>
                        <td>Lampu Mati</td>
                        <td>lamp.png</td>
                        <td>03/09/2020</td>
                        <td>Proses</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
      );
    }
}
export default Pengaduan;