import React from "react";

export default function Dashboard() {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Equipo</th>
              <th scope="col">Puntos</th>
              <th scope="col">Diferencia de Goles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Real Tapitas</td>
              <td>32</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Real Sociedad Minas</td>
              <td>24</td>
              <td>12</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Deportivo Sipirra</td>
              <td>24</td>
              <td>-1</td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="btn btn-primary"

        >SALIR</button>
      </div>
    </>
  );
}
