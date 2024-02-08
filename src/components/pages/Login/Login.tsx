import Footer from '../Footer/Footer';
import LoginForm from '../../App/Forms/LoginForm';
import { logo } from '../../../assets';

import './Login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="login-content">
        <h1 className="login-content__title">Mont Blanc réparation</h1>
        <img src={logo} alt="logo" className="login-content__logo" />
      </div>

      <LoginForm />

      <Footer />
    </div>
  );
}
