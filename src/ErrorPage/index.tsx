import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <div className="error-page__card">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__desc">Página no encontrada</p>
        <Link to="/" className="error-page__link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
