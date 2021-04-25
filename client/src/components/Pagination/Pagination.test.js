import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {Pagination} from "./Pagination";

const props = {
  currentPage: 2,
  perPage: 5,
  total: 10,
  paginate: jest.fn()
}

describe("<Pagination /> Component", () => {
  it("should render calculated based upon no. of items per page and total items paginated list.", async() => {
    render(<Pagination {...props} />);
    const items = await screen.findAllByTestId('paginate-item');
    expect(items).toHaveLength(2);
  });

  it("should have active class on current page button.", async() => {
    render(<Pagination {...props} />);
    const button = await screen.findAllByRole('button');
    expect(button[1]).toHaveClass('active') 
  });

  it("should dispatch paginate function.", () => {
    render(<Pagination {...props} />);
    fireEvent.click(screen.getByText('2')); 
    expect(props.paginate).toHaveBeenCalled();
  });
});
