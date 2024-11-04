import { Link } from 'react-router-dom';
import '../style/404.scss'; 

function Page404() {
  return (
    <div className="page-404 container text-center">
      <h1>404</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <div className="image-container">
        <img src="404.png" alt="Image représentant une prise débranchée" className="img-fluid" />
      </div>
      <Link to="/" className="btn btn-primary mt-4">Retour à l&apos;accueil</Link>
    </div>
  );
}

export default Page404;
