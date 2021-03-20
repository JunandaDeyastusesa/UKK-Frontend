import React,{Component} from "react";
import {Link} from "react-router-dom";

// import './Admin-Pengaduan.css';

class Masyarakat extends Component {

    render(){
      return(
        <div className="admin-pengaduan">
            <div className="container Admin">
                <h2 className="h2-admin">Data Masyarakat</h2>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Telp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>1001</td>
                        <td>Toni Setiawan</td>
                        <td>Toni</td>
                        <td>12345678</td>
                        <td>0851xxxxxxx</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
      );
    }
}
export default Masyarakat;