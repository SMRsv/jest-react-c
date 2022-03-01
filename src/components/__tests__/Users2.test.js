import {render, screen, cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
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
    expect(userElement).toContainHTML("orange");
});

test("Should render legal user", () => {
    const user = {id: 2, name: "Kelly", age: 20};
    render(<Users2 user={user} />);
    const userElement = screen.getByTestId("user-2");
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent("Kelly");
    expect(userElement).toContainHTML("green");
});

test("Matches Snapshot", () => {
    const user = {id: 1, name: "John", age: 15};
    const tree = renderer.create(<Users2 user={user} />).toJSON();
    expect(tree).toMatchSnapshot();
});