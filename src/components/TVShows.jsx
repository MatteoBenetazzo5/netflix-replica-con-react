import { Container, Row, Col } from "react-bootstrap"

export default function TVShows() {
  return (
    <Container className="text-white mt-4">
      <title>TV Shows</title>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="mb-3 text-center">TV Shows</h2>

          <p className="text-secondary text-center">
            Questa è la pagina dedicata alle serie TV.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
