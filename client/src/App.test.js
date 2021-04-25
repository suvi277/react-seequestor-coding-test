import axios from 'axios';
import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';

jest.mock('axios');

const fakeArticles = [{
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
    }
  ]
},{
  "topic_id": 2,
  "time_uploaded": 1332660267,
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


describe('App component', () => {
  test('it renders', async () => {
    const promise = Promise.resolve({ data: fakeArticles });
    axios.get.mockResolvedValue(promise);
    render(<App />);
    await act(() => promise);
    expect(screen.getByText('Articles')).toBeInTheDocument();
  });

  test('it displays a list of articles', async () => {
    const promise = Promise.resolve({ data: fakeArticles });
    axios.get.mockResolvedValue(promise);
    const { getByTestId } = render(<App />);
    await act(() => promise);
    const articleList = await waitFor(() => getByTestId('article-list'));
    expect(articleList).toBeInTheDocument();
  });
});