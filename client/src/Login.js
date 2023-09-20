import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
  handleLogin = () => {
    // Xử lý đăng nhập
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Đăng nhập</h2>

          {/* Form đăng nhập */}
          <form>
            <input type="text" placeholder="Tên đăng nhập" />
            <input type="password" placeholder="Mật khẩu hehe" />
            <button onClick={this.handleLogin}>Đăng nhập</button>
          </form>

          {/* Đăng kí */}
          <p>
            Bạn chưa có tài khoản?{' '}
            <Link to="/register" className="link">
              Đăng kí ngay
            </Link>
          </p>

          {/* Đăng nhập với Facebook */}
          <button className="facebook-login">
            <i className="fab fa-facebook"></i> Đăng nhập với Facebook
          </button>

          {/* Đăng nhập với Gmail */}
          <button className="gmail-login">
            <i className="fab fa-google"></i> Đăng nhập với Gmail
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
