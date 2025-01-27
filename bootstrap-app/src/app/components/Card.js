export default function Card() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src="/roca.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Título de la tarjeta</h5>
          <p className="card-description">
            Este es una decripcion
          </p>
          <a href="#" className="btn btn-primary">¡Clic aquí!</a>
        </div>
      </div>
    );
  }