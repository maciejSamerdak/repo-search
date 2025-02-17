import {render} from "@testing-library/react";
import RepositoryItem from "@/components/RepositoryItem";


describe("RepositoryItem", () => {
    it("renders repository details", async () => {
        const repositoryData = {
            html_url: "www.url.com",
            name: "Repository name",
            description: "Repository description",
            language: "Javascript",
            license: { name: "MIT" },
            created_at: "2021-01-01T17:00:00Z",
            updated_at: "2021-01-01T17:00:01Z",
            stargazers_count: 6,
            watchers_count: 7,
            open_issues_count: 8,
            forks_count: 5,
            size: 1234
        }

        const expectedContents = [
            "Repository name",
            "Repository description",
            "Javascript",
            "MIT",
            "2021-01-01T17:00:00Z",
            "2021-01-01T17:00:01Z",
            "Starred: 6",
            "Watchers: 7",
            "8",
            "5",
            "1234 KB"
        ]
        
        const {queryByText} = render(
            <RepositoryItem data={repositoryData}/>,
        );

        expectedContents.forEach(value => expect(queryByText(value)).not.toBeNull())
    });
})
