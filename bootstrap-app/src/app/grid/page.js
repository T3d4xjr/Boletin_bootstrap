"use client";
export default function Grid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">Columna 1</div>
        <div className="col-md-4">Columna 2</div>
        <div className="col-md-4">Columna 3</div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div>Columna 8.1</div>
          <div>Columna 8.2</div>
          <div>Columna 8.3</div>
          <div>Columna 8.4</div>
          <div>Columna 8.5</div>
          <div>Columna 8.6</div>
          <div>Columna 8.7</div>
          <div>Columna 8.8</div>
        </div>
        <div className="col-md-4">
          <div>Columna 4.1</div>
          <div>Columna 4.2</div>
          <div>Columna 4.3</div>
          <div>Columna 4.4</div>
        </div>
      </div>
    </div>
  );
}
