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





