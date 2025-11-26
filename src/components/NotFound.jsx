import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Container className="text-white mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2 className="mb-2">404 - Page Not Found</h2>
          <p className="text-secondary">
            La pagina che cerchi non esiste o è stata rimossa.
          </p>

          <Button variant="light" onClick={() => navigate("/")}>
            Torna alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
