import {render} from "@testing-library/react";
import RepositoryList from "@/components/RepositoryList";


describe("RepositoryList", () => {
    it("displays message when list is empty", async () => {
        const expectedMessage = "There are no repositories to display"
        const {queryByText} = render(
            <RepositoryList repositories={[]}/>,
        );
        expect(queryByText(expectedMessage)).not.toBeNull()
    });
})
