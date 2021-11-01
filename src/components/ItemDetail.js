import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ItemCount from "./ItemCount"

const ItemDetail = ({ productos, initial, stock }) => {

    return (
        <div className="centrar">
            <Container fluid className="contenedorItemD">
                <Row>
                    <Col xs={12} xxl={6}>
                        <img key={productos.id} src={productos.imagen} alt={productos.nombre} width="400x300" className="cardImagen" />
                    </Col>
                    <Col xs={12} xxl={6} className="alignCenter">
                        <p className="nombreProducto">{productos.nombre}</p>
                        <p><span className="boldFont">Precio: </span>${productos.precio}</p>
                        <ItemCount initial={initial} stock={stock} productos={productos} />
                        <div>
                            <h4 className="boldFont">Detalles del Producto</h4>
                            {productos.descripcion}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemDetail
