import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { UserContext } from '../../../utils/context/userContext';

import { eyeOffIcon, eyeEmptyIcon, emailIcon } from '../../../assets';

import users from '../../../data/users';

import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.scss';

export default function LoginForm() {
  // Context
  const { setUserConnect } = useContext(UserContext);

  const navigate = useNavigate();
  // Refs
  const focusRef = useRef<HTMLInputElement>(null);

  // States
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // == Boutton toggle pour le développement == \\
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (isToggle) {
      setEmail('MontBlancReparation@gmail.com');
      setPassword('123456789');
    } else {
      setEmail('JohnDoe@gmail.com');
      setPassword('123456789');
    }
  };

  // == =================================== == \\

  // Effects
  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  const handleMailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!email) {
      toast.error("Votre mail n'est pas valide");
    }
    if (!password) {
      toast.error('Veuillez entrer un mot de passe ');
    } else {
      const currentUser = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      const matchingUser = users.find(
        (user) =>
          user.mail === currentUser.email &&
          user.password === currentUser.password
      );

      if (!matchingUser) {
        toast.error('E-mail ou mot de passe invalide');
        return;
      }
      // Reset Email Input State
      setEmail('');
      // Reset Password Input State
      setPassword('');
      setUserConnect(matchingUser);

      if (matchingUser.role !== 'Admin') {
        navigate('/app/planning');
      } else {
        navigate('/admin/home');
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-element">
        <div className="contener">
          <input
            ref={focusRef}
            className="contener-input"
            type="email"
            name="email"
            value={email}
            placeholder="Email de connexion"
            onChange={handleMailInputChange}
            // required
          />
          <img
            className="contener-input__logo"
            src={emailIcon}
            alt="email logo"
          />
        </div>
        <div className="contener">
          <input
            className="contener-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="off"
            value={password}
            placeholder="Mot de passe"
            onChange={handlePasswordInputChange}
            // required
          />
          <button
            className="contener-input__button"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              className="contener-input__logo-password"
              src={showPassword ? eyeEmptyIcon : eyeOffIcon}
              alt="show password"
            />
          </button>
        </div>

        <button type="submit" className="form-button">
          Se connecter
        </button>
        <button type="button" className="form-button" onClick={handleToggle}>
          {isToggle ? 'Technicien' : 'Admin'}
        </button>
        <ToastContainer position="bottom-center" />
      </form>
    </div>
  );
}
