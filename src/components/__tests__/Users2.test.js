import {render, screen, cleanup} from "@testing-library/react";
import Users2 from "../Users2";

afterEach(()=>{
    cleanup();
});

test("Should render illegal user", () => {
    const user = {id: 1, name: "John", age: 15};
    render(<Users2 user={user} />);
    const userElement = screen.getByTestId("user-1");
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent("John");
    expect(userElement).toContainHTML("red");
});

test("Should render legal user", () => {
    const user = {id: 2, name: "Kelly", age: 20};
    render(<Users2 user={user} />);
    const userElement = screen.getByTestId("user-2");
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent("Kelly");
    expect(userElement).toContainHTML("green");
});