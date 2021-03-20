import React,{Component} from "react";
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
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
      <div >
        {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" /> */}
        {/*---- Include the above in your HEAD tag --------*/}
        <div id="login">
         <div className="badan">
          <h3 className="text-center text-black pt-5"></h3>
          <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action method="post">
                    <h3 className="text-center text-white">Login</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">Username:</label><br />
                      <input type="text" name="username" id="username" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">Password:</label><br />
                      <input type="text" name="password" id="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-white"><span>Remember me</span>&nbsp;<span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                      {/* Submit */}
                      <input type="submit" name="submit" className="btn btn-light btn-md" defaultValue="submit" />
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="/Register" className="text-white">Register here</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

            

    );
  }
}
export default Login;
