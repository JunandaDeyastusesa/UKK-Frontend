import React,{Component} from "react";
import {Link} from "react-router-dom";


class Tanggapan extends Component {

    render(){
      return(
        <div className="admin-pengaduan">
            <div className="container Admin">
                <h2 className="h2-admin">Data Tanggapan</h2>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID Pengaduan</th>
                        <th scope="col">Tanggapan</th>
                        <th scope="col">Tgl Tanggapan</th>
                        <th scope="col">Petugas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>001</td>
                        <td>Segera Diperbaiki</td>
                        <td>04/08/2020</td>
                        <td>Adi Cahyo</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
      );
    }
}
export default Tanggapan;