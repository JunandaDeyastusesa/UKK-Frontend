import React,{Component} from "react";
import { Link } from 'react-router-dom';

class Nav_Admin extends Component {
//   constructor() {
//         super();
//         this.state = {
//         username: "",
//         password: "",
//         message: ""
//         }
//     }

//   bind = (event) => 
//     {
//         this.setState({[event.target.name]: event.target.value});
//     }

//   Login = (event) => 
//     {
//         event.preventDefault();
//         let url = "http://localhost/lapangan/public/login";
//         let form = new FormData();
//         form.append("username", this.state.username);
//         form.append("password", this.state.password);
//         axios.post(url, form)
//         .then(response => {
//         let logged = response.data.status;
//         let role = response.data.role;
//         if (logged) {

//             if(role === "admin"){
//             window.location = "/Member";
//             }else{
//             window.location = "/";

//             }

//             this.setState({message: "Login Berhasil"});
//             //menyimpan data token pada local storage
//             localStorage.setItem("Token", response.data.token);
//             //menyimpan data login user ke local storage
//             localStorage.setItem("id", JSON.stringify(response.data.users.id));
//             //direct ke halaman data siswa
//             localStorage.setItem("role", response.data.role);
                    
//         } else {
//             this.setState({message: "Login Gagal"});
//         }
//         $("#message").toast("show");
//         })
//         .catch(error => {
//         console.log(error);
//         })
//     }

  render(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin/Petugas">Petugas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin/Masyarakat">Masyarakat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin/Pengaduan">Pangaduan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Admin/Tanggapan">Tanggapan</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

    );
  }
}
export default Nav_Admin;
