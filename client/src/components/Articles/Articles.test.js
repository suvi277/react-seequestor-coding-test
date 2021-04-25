import { render, fireEvent, screen } from '@testing-library/react';
import { Articles } from './Articles';

const mockData = [{
  "topic_id": 1,
  "time_uploaded": 1332660267,
  "title": "Title 1",
  "file_name": "file 1",
  "thumbnail_url": "path-1",
  "comments": [
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
  ]
},{
  "topic_id": 2,
  "time_uploaded": 1619372734311,
  "title": "Title 2",
  "file_name": "file 2",
  "thumbnail_url": "path-2",
  "comments": [
    {
      "timestamp": 1337827472,
      "topic_id": 2,
      "user_id": "u2",
      "comment": "Comment 2!",
      "company": "Company 2",
      "position": "Position 2",
      "first_name": "First Name 2",
      "last_name": "Last Name 2"
    }
  ]
}];

describe('Articles component', () => {
  it("should show list of articles", async () => {
    render(<Articles articles={mockData} />);
    const items = await screen.findAllByTestId('article-item');
 
    expect(items).toHaveLength(2);
  });

  it("should show title, image and time uploaded of each articles", async () => {
    render(<Articles articles={mockData} />);
 
    mockData.forEach((d) => {
      expect(screen.getByText(d.title)).toBeInTheDocument();
      expect(screen.getByText(new Date(d.time_uploaded).toDateString())).toBeInTheDocument();
      expect(screen.getByAltText(d.file_name)).toBeInTheDocument();
    });
  });

  it("should show `Show Comments` action link for each article", async () => {
    render(<Articles articles={mockData} />);

    mockData.forEach((d) => {
      const commentText = `Show Comments (${d.comments.length})`
      expect(screen.getByText(commentText)).toBeInTheDocument();
    });
  });

  it("should show first three comments on click of action link for each article", () => {
    render(<Articles articles={mockData} />);
    fireEvent.click(screen.getByText('Show Comments (2)')); 

    mockData[0].comments.slice(0, 3).forEach((d) => {
      expect(screen.getByText(d.comment)).toBeInTheDocument();
    });
  });
});