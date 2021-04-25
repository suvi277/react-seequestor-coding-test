import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ArticleTitle, ArticleImage, ArticleDate, ListBox } from "./ArticlesStyles";
import { Card, CardHeader, ActionLink, Container } from "../../styles/commonStyles";
import { Pagination } from '../../components/Pagination';
import { Comments } from '../../components/Comments';


/**
 * Component for showing list of articles.
 *
 * @component
 * @example
 * const data = []
 * return (
 *   <Articles articles={data}  />
 * )
 */

const Articles = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [active, setActive] = useState(null);

  //Paginate
  const paginate = page => setCurrentPage(page)

  const lastIndex = currentPage * itemsPerPage
  const firstindex = lastIndex - itemsPerPage
  const currentList = articles.slice(firstindex, lastIndex)

  const toggleComments = index => {
    active === index ? setActive(null) : setActive(index)
  }

	return (
    <Container>
      {
        currentList &&
          <Fragment>
            <ListBox>
              {
                currentList.map((article, index) => (
                  /** TODO: Create anothe component for Card */
                  <Card data-testid="article-item" key={article.topic_id} delay={index}>
                    <CardHeader>
                      <ArticleImage src={article.thumbnail_url} alt={article.file_name}/>
                      <ArticleTitle>{article.title}</ArticleTitle>
                      <ArticleDate>{ new Date(article.time_uploaded).toDateString()}</ArticleDate>
                    </CardHeader>
                    <ActionLink data-testid="action-link" className={active === index ? 'active up' : 'down'} onClick={() => toggleComments(index)}>Show Comments ({article.comments.length})</ActionLink>
                    { active === index && (
                      article.comments.length ? <Comments comments={article.comments}></Comments> : <p>No comments added</p>
                    )
                    }
                  </Card>
                ))
              }
            </ListBox>
            <Pagination currentPage={currentPage} total={articles.length} perPage={itemsPerPage} paginate={paginate} />
          </Fragment>
      }
    </Container>
	);
};

Articles.propTypes = {
  /**
   *  articles
   */
  articles: PropTypes.array.isRequired
}

export { Articles };
