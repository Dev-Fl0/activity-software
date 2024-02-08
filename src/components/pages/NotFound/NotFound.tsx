import Footer from '../Footer/Footer';

import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="NotFound-content">
      <div className="NotFound">
        <h1 className="NotFound-error">Erreur - 404</h1>
        <h1 className="NotFound-title">PAGE INTROUVABLE</h1>
      </div>
      <Footer />
    </div>
  );
}
