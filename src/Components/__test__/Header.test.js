import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
    //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header)

  //check if logo loads

  const logo = header.getAllByTestId("logo")

    console.log(logo)

    expect(logo[0].src).toBe("http://localhost/dummy.png")
});

test("Online status should be green on rendering header", () => {
    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    //check if status is green
    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("Online✅")
})

test("Cart should have 0-items on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");

    // console.log(cart);

    expect(cart.innerHTML).toBe("Cart (0)")
})
