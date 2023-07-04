import { Provider } from "react-redux";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom"
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/data";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Shimmer should load on Homepage before the data loads", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
            <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(15);
    // expect(shimmer).toBeInTheDocument();
    // console.log(shimmer);
})

test("Restaurants should load on Homepage", async() => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-btn")))
    const resList = body.getByTestId("res-list")
    
    expect(resList.children.length).toBe(15);

})

test("Search for string(pizza) on Homepage" , async() => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");

    fireEvent.change(input,{
        target:{
            value: "pizza",
        }
    });
    
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(1);
})