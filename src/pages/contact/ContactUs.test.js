import React from 'react'
import ContactUs from './ContactUs';
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react"


it("should render product", () => {
    act(() => {
        render(<ContactUs />);
    });
    expect(screen.queryByText("Want Our Assistance ?")).toBeTruthy();
    expect(screen.queryByText("Varanasi")).toBeTruthy();
    expect(screen.queryByText("9125146256")).toBeTruthy();

});