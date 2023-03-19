import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import FrutaForm from './FrutaForm';

const FrutasList = () => {
  const [frutas, setFrutas] = useState([]);
  const [frutaSelecionada, setFrutaSelecionada] = useState(null);

  useEffect(() => {
    const fetchFrutas = async () => {
      const response = await axios.get('http://localhost:5296/api/Fruta');
      setFrutas(response.data);
    };
    fetchFrutas();
  }, []);

  const handleShowForm = (fruta) => {
    setFrutaSelecionada(fruta);
  };

  const handleCloseForm = () => {
    setFrutaSelecionada(null);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descricao</th>
            <th>Valor A</th>
            <th>Valor B</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {frutas.map((fruta) => (
            <tr key={fruta.id}>
              <td>{fruta.descricao}</td>
              <td>{fruta.valorA}</td>
              <td>{fruta.valorB}</td>
              <td>
                <Button onClick={() => handleShowForm(fruta)}>Selecionar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
       <FrutaForm fruta={frutaSelecionada} show={frutaSelecionada !== null} onHide={handleCloseForm} />
    </>
  );
};

export default FrutasList;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 
// import Table from 'react-bootstrap/Table';


// const FrutaLista = () => {
//     const [frutas, setFrutas] = useState([]);

//     useEffect(() => {
//         axios.get('https://localhost:7107/api/Fruta').then(result => {
//             setFrutas(result.data);
//         })
//     }, []);

//     return (
                 
//         <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th className="text-center" scope="col">Descrição</th>
//             <th className="text-center" scope="col">A</th>
//             <th className="text-center" scope="col">B</th>
//             <th className="text-center" scope="col">Ação</th>
//           </tr>
//         </thead>
//         <tbody> 
//                 {
                    
//                     frutas.map(fruta => (
//                         <tr key={fruta.id}>
//                             <td className="text-center">{fruta.descricao}</td>
//                             <td className="text-center">{fruta.valorA}</td>
//                             <td className="text-center">{fruta.valorB}</td>
//                             <td><button class="btn btn-outline-dark">Selecionar</button></td>
//                         </tr>
                        
//                     ))
//                 }
//             </tbody>
//       </Table>
//     );
// }

// export default FrutaLista;




{/* <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Post</th>
                    <th className="text-center">Data criacao</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    frutas.map(fruta => (
                        <tr key={fruta.id}>
                            <td>{fruta.descricao}</td>
                            <td className="text-center">{fruta.valorA}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}