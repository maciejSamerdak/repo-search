import { Form, Button, Stack } from "react-bootstrap"
import PropTypes from "prop-types"
import "@/assets/styles/SearchBar.css"

function SearchBar({onSubmit}) {
    const handleSubmit = event => {
        event.preventDefault()
      const form = event.currentTarget
        onSubmit(form.username.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
                <Form.Group controlId="searchBar">
                    <Form.Control type="text" name="username" placeholder="Owner's username" required/>
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
            </Stack>
      </Form>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}

export default SearchBar
