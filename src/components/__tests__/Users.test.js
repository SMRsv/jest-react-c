import {render, screen, cleanup} from "@testing-library/react";
import Users from "../Users";

afterEach(()=>{
    cleanup();
});

test("Should render Users component", () => {
    render(<Users />);
    const userElement = screen.getByTestId("user-1");
    expect(userElement).toBeInTheDocument();
    //expect(userElement).toHaveTextContent("Hello");
    expect(userElement).toHaveTextContent("Users");
});