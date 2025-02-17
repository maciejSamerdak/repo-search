import { useState } from "react"
import SearchBar from "@/components/SearchBar"
import RepositoryList from "@/components/RepositoryList"
import { Spinner, Container } from "react-bootstrap"
import axios from "axios"
import "@/assets/styles/App.css"

function App() {
    const [isSearching, setIsSearching] = useState(false)
    const [isError, setIsError] = useState(false)
    const [repositoryList, setRepositoryList] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const env = import.meta.env

    const getRequestParams = username => {
        const url = `${env.VITE_GITHUB_API_URL}/users/${username}/repos`
        let headers = {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": env.VITE_GITHUB_API_VERSION
        }
        if (env.VITE_GITHUB_API_KEY) {
            headers["Authorization"] = `Bearer ${env.VITE_GITHUB_API_KEY}`
        }
        return [url, { headers }]
    }

    const handleSubmit = username => {
        setIsError(false)
        setIsSearching(true)

        const [url, requestBody] = getRequestParams(username)
        axios.get(url, requestBody).then(response => {
            setRepositoryList(response.data)
        }).catch(error => {
            if (error.status === 404) {
                setErrorMessage(`No matches found for "${username}"`)
            } else if (error.status === 403) {
                setErrorMessage("API rate limit has been exceeded")
            } else {
                setErrorMessage("An error has occured while processing your request")
            }
            setIsError(true)
        }).finally(() => (
            setIsSearching(false)
        ))
    }

    let content
    if (isError) {
        content = <div className="content-placeholder"><h6>{errorMessage}</h6></div>
    } else if (isSearching) {
        content = <div className="content-placeholder"><Spinner /></div>
    } else if (repositoryList !== null) {
        content = <RepositoryList repositories={repositoryList} />
    }

    return (
        <Container>
            <div id="page-header">
            <h1>GitHub Repository Browser</h1>
            <h3>{"Type in a GitHub user's name and see all repositories they own!"}</h3>
            </div>
            <div id="page-content">
            <div id="search-bar-wrapper">
                <SearchBar busy={isSearching} onSubmit={handleSubmit}/>
            </div>
            { content }
            </div>
        </Container>
    )
}

export default App
