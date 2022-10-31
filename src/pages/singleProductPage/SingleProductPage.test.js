import React from 'react'
import SingleProductPage from './SingleProductPage';
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react"
import { BrowserRouter, useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";



jest.mock('../../context/cart-context', () => ({
    useCart: () => { return { cartProduct: [], setCartProduct: jest.fn } }
}));

jest.mock('../../context/wishlist-context', () => ({
    useWishlist: () => { return { wishListProduct: [], setWishListProduct: jest.fn } }
}));
describe('SingleProductPage', () => {

    it("should render product", () => {
        const { container } = render(
            <BrowserRouter>
                <SingleProductPage />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot()
    });
    it("should render product 1", () => {
        act(() => {
            render(
                <BrowserRouter>
                    <SingleProductPage />
                </BrowserRouter>
            );
        });
        expect(screen.queryByText("Women's Collection")).toBeTruthy();

        // expect(screen.queryByText("Want Our Assistance ?")).toBeTruthy();

    });

});