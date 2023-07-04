import { fireEvent, render, waitFor } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/data";
import { StaticRouter } from "react-router-dom/server";
import store from "../utils/store";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA)
        }
    })
})

test("Add items to cart", async() => {
    const resMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(resMenu.getByTestId("menu")))

    const addBtn = resMenu.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);

    const cart = resMenu.getByTestId("cart")
    
    expect(cart.innerHTML).toBe("Cart (2)");
    
})