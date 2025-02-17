import { Container, Row, Col } from "react-bootstrap"
import RepositoryItem from "@/components/RepositoryItem"
import PropTypes from "prop-types"
import "@/assets/styles/RepositoryList.css"

function RepositoryList({ repositories }) {
    const listElements = repositories.map(repository => (
        <Row className="repo-list-row" key={repository.id}>
            <Col>
                <RepositoryItem data={repository}/>
            </Col>
        </Row>
    ))
    
    return (
        <div>
            {repositories.length === 0 ? (
                <h3>There are no repositories to display</h3>
            ) : (
                <Container>
                    { listElements }
                </Container>
            )}
        </div>
    )
}

RepositoryList.propTypes = {
    repositories: PropTypes.array
}

export default  RepositoryList
