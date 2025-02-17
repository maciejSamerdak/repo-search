import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import SearchBar from "@/components/SearchBar";


describe("SearchBar", () => {
    it("uses callback with name input from user on submit", async () => {
        const username = "Username"
        const user = userEvent.setup()
        const callbackMock = jest.fn()
        
        const {container} = render(
            <SearchBar onSubmit={callbackMock}/>,
        );

        const input = container.querySelector("input")
        const button = container.querySelector("button")

        await user.click(input)
        await user.keyboard(username)
        await user.click(button)

        expect(callbackMock).toHaveBeenCalledTimes(1)
        expect(callbackMock).toHaveBeenCalledWith(username)
    });
})
