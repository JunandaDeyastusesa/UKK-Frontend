import React,{Component} from "react";
import { Link } from 'react-router-dom';
import './Register.css';

// var sectionStyle = {
//   backgroundImage: "url (" + {h1} + ")"
// };

class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//         users: [],
//         id: "",
//         username: "",
//         email: "",
//         password: "",
//         created_at: "",
//         updated_at: "",
//         find: "",
//         message: ""
//         }
//     }

//     bind = (event) => {
//       this.setState({[event.target.name] : event.target.value});
//     }

//     Save = (event) => {
//         const { password, confirmpassword } = this.state;
//         if (password !== confirmpassword) {
//             alert("password don't match");
//         } else {
//         event.preventDefault();
//         $("#modal_user").modal("hide");
//         let url = "http://localhost/lapangan/public/register";
//         let form = new FormData();
//         form.append("action", this.state.action);
//         form.append("id", this.state.id);
//         form.append("username", this.state.username);
//         form.append("email", this.state.email);
//         form.append("password", this.state.password);
//         form.append("role", this.state.role);
//         axios.post(url, form)

//         .then(response => {
//             // $("#loading").toast("hide");
//             this.setState({message: response.data.message});
//             $("#message").toast("show");
//             window.location="/register"
//         })
//         .catch(error => {
//             console.log(error);
//         });
//         }
//     }

render(){
    return(
      <div >
        <div id="register">
         <div className="up">
          <h3 className="text-center text-white pt-5"></h3>
          <div className="container">
            <div id="register-row" className="row justify-content-center align-items-center">
              <div id="register-column" className="col-md-6">
                <div id="register-box" className="col-md-12">
                  <form id="register-form" className="form" action method="post">
                    <h3 className="text-center text-white">Register</h3>
                    <div className="form-group">
                      <label htmlFor="name" className="text-white">Name:</label><br />
                      <input type="text" name="name" id="name" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="text-white">Email:</label><br />
                      <input type="text" name="email" id="email" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="username" className="text-white">Username:</label><br />
                      <input type="text" name="username" id="username" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="text-white">Password:</label><br />
                      <input type="text" name="password" id="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-white"><span></span>&nbsp;<span></span></label><br />
                      {/* Submit */}
                      <input type="submit" name="submit" className="btn btn-light btn-md" defaultValue="submit" />
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="/Login" className="text-white">Login here</a>
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
export default Register;