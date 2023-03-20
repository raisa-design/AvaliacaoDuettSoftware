import { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const FrutaForm = ({ fruta = { valorA: 0, valorB: 0 }, show, onHide }) => {
  const [resultado, setResultado] = useState(0);

  const handleCalcular = (event) => {
    event.preventDefault();
    let valorA = 0;
    let valorB = 0;
    if (fruta != null) {
      valorA = fruta.valorA;
      valorB = fruta.valorB;
    }

    const operacao  = event.target.value;
    if (operacao === 'divisao' && valorB !== 0) { 
      const fetchFrutas = async () => {
        const response = await axios.get(`http://localhost:5296/api/Fruta/dividir/${fruta.id}`);
        setResultado(response.data);
       
      }; fetchFrutas();
      
    } else if (operacao === 'multiplicacao') {
      const fetchFrutas = async () => {
        const response = await axios.get(`http://localhost:5296/api/Fruta/multiplicar/${fruta.id}`);
        setResultado(response.data);
       
      }; fetchFrutas();
    } else {
      setResultado(0);
    }
  };


  console.log(fruta)

  function customHide(){
    setResultado(0);
    onHide();
  }

  return (
    <Modal show={show} onHide={customHide}>
      <Modal.Header closeButton>
        <Modal.Title>Teste modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="valorA">
            <Form.Label>Valor A</Form.Label>
            <Form.Control type="number" defaultValue={fruta?.valorA} disabled />
          </Form.Group>
          <Form.Group controlId="valorB">
            <Form.Label>Valor B</Form.Label>
            <Form.Control type="number" defaultValue={fruta?.valorB} disabled />
          </Form.Group>
          <Form.Group controlId="resultado">
            <Form.Label>Resultado</Form.Label>
            <Form.Control type="number" value={resultado} readOnly />
          </Form.Group>
          <Button value="multiplicacao" onClick={handleCalcular} className="me-2">
            Multiplicar
          </Button>
          <Button value="divisao"  onClick={handleCalcular} disabled={!fruta || fruta.valorB === 0}>
            Dividir
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FrutaForm;