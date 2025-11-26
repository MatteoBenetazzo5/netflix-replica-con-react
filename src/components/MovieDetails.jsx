import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Spinner, ListGroup, Button,} 
from "react-bootstrap"

export default function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  const { movieId } = useParams()
  const navigate = useNavigate()

  // COMMENTI MOCK (simulazione dei commenti richiesti nella consegna)
  const fakeFetchComments = () => {
    return new Promise((resolve) => {
      // finta attesa di un server
      setTimeout(() => {
        resolve([
          { id: 1, author: "Giorgio", comment: "Amazing movie!" },
          { id: 2, author: "Marta", comment: "Great direction!" },
          { id: 3, author: "Luca", comment: "The soundtrack is incredible." },
        ])
      }, 300)
    })
  }

  // FETCH REALI (OMDb)
  const fetchMovieDetails = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=e5235493&i=${movieId}`
      )
      const data = await res.json()
      setMovie(data)
    } catch (err) {
      console.log("Errore dettagli film:", err)
    }
  }

  // COMPONENT DID MOUNT
  useEffect(() => {
    const loadData = async () => {
      await fetchMovieDetails() 
      const fetchedComments = await fakeFetchComments() 
      setComments(fetchedComments)
      setLoading(false)
    }
    loadData()
  })

  return (
    <Container className="text-white mt-4">
      <title>Movie Details</title>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4">Movie Details</h2>

          {/* LOADING */}
          {loading && (
            <div className="text-center mt-5">
              <Spinner animation="border" variant="light" />
            </div>
          )}

          {/* CONTENUTO */}
          {!loading && movie && (
            <>
              {/* CARD FILM */}
              <Card className="bg-dark text-white mb-4">
                <Card.Img variant="top" src={movie.Poster} />

                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Plot}</Card.Text>

                  <Card.Text>
                    <strong>Year:</strong> {movie.Year} <br />
                    <strong>Genre:</strong> {movie.Genre}
                  </Card.Text>

                  <Button variant="light" onClick={() => navigate(-1)}>
                    Torna indietro
                  </Button>
                </Card.Body>
              </Card>

              {/* COMMENTI */}
              <h4 className="mb-3">Comments</h4>

              <ListGroup className="mb-5">
                {comments.map((c) => (
                  <ListGroup.Item
                    key={c.id}
                    className="bg-dark text-white border-secondary"
                  >
                    <strong>{c.author}:</strong> {c.comment}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}
