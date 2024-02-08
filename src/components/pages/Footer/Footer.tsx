import { copyrightIcon } from '../../../assets';

import './Footer.scss';

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      {/* DIVIDER */}
      <div className="footer-divider" role="separator" />

      <p className="footer-content">
        <img
          src={copyrightIcon}
          alt="Copyright"
          className="footer-content__image"
        />
        {date.getFullYear()} Mont Blanc réparation
      </p>
      <p className="footer-p">Tous droits réservés</p>
    </footer>
  );
}
