import { Card, Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import "@/assets/styles/RepositoryItem.css"

function RepositoryItem({ data }) {
    return (
        <Card>
            <Container>
                <Row>
                    <Col className="left-col">
                        <div>
                            <h4><a href={data.html_url} target="_blank">{data.name}</a></h4>
                            <p>{data.description}</p>
                        </div>
                        <div className="repo-bottom-section">
                            <span><b>{data.language}</b></span>
                            <span>{data.license && data.license.name}</span>
                            <div className="repo-date-container">
                                <span>Created at: <b>{data.created_at}</b></span>
                                <span>Updated at: <b>{data.updated_at}</b></span>
                            </div>
                        </div>
                    </Col>
                    <Col className="right-col">
                        <h6>
                            <span>Starred: {data.stargazers_count}</span>
                            <span>Watchers: {data.watchers_count}</span>
                        </h6>
                        <div>
                            <span>Open issues: <b>{data.open_issues_count}</b></span>
                            <span>Forks: <b>{data.forks_count}</b></span>
                        </div>
                        <div>
                            <span>Size: <b>{data.size} KB</b></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

RepositoryItem.propTypes = {
    data: PropTypes.shape(
        {
            html_url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            language: PropTypes.string,
            license: PropTypes.shape({ name: PropTypes.string}),
            created_at: PropTypes.string.isRequired,
            updated_at: PropTypes.string,
            stargazers_count: PropTypes.number.isRequired,
            watchers_count: PropTypes.number.isRequired,
            open_issues_count: PropTypes.number.isRequired,
            forks_count: PropTypes.number.isRequired,
            size: PropTypes.number.isRequired
        }
    ).isRequired
}

export default RepositoryItem
