import { render, fireEvent, screen } from '@testing-library/react';
import { Comments } from './Comments';

const mockComments = [
  {
    "timestamp": 1337827472,
    "topic_id": 1,
    "user_id": "u1",
    "comment": "Comment 1!",
    "company": "Company 1",
    "position": "Position 1",
    "first_name": "First Name 1",
    "last_name": "Last Name 1"
  },{
    "timestamp": 1337827472,
    "topic_id": 1,
    "user_id": "u12",
    "comment": "Comment 12!",
    "company": "Company 12",
    "position": "Position 12",
    "first_name": "First Name 12",
    "last_name": "Last Name 12"
  }
];

describe('Comments component', () => {
  it("should show list of comments", async () => {
    render(<Comments comments={mockComments} />);
    const items = await screen.findAllByTestId('comment-item');
 
    expect(items).toHaveLength(2);
  });

  it("should show user details with each comment", async () => {
    render(<Comments comments={mockComments} />);
 
    mockComments.forEach((d) => {
      expect(screen.getByText(d.comment)).toBeInTheDocument();
      expect(screen.getByText(`${d.first_name} ${d.last_name}`)).toBeInTheDocument();
      expect(screen.getByText(d.position)).toBeInTheDocument();
    });
  });

  describe('when total comments are more than 3', () => {
    it("should show `Show More` action link for each articles when total comments are more than 3", async () => {
      const randomData = [...Array(5)].map((arr, index)=> ({user_id: index}))
      render(<Comments comments={randomData} />);
      const items = await screen.findAllByTestId('comment-item');
      expect(items).toHaveLength(3);
      expect(screen.getByText(`Show More`)).toBeInTheDocument();
    });
  });

  describe('when `Show More` is clicked', () => {
    it("should render next 3 comments and `Show Less` action link for each articles", async () => {
      const randomData = [...Array(8)].map((arr, index)=> ({user_id: index}))
      render(<Comments comments={randomData} />);
  
      fireEvent.click(screen.getByText('Show More')); 
      const items = await screen.findAllByTestId('comment-item');
      expect(items).toHaveLength(6);
      expect(screen.getByText(`Show Less`)).toBeInTheDocument();
    });
  });

  describe('when `Show Less` is clicked', () => {
    it("should removes last 3 comments", async () => {
      const randomData = [...Array(6)].map((arr, index)=> ({user_id: index}))
      render(<Comments comments={randomData} />);
  
      fireEvent.click(screen.getByText('Show More')); 
      fireEvent.click(screen.getByText('Show Less')); 
      const items = await screen.findAllByTestId('comment-item');
      expect(items).toHaveLength(3);
    });
  });
});