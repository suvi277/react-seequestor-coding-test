
const articleRoutes = (app, fs) => {

  // variables
  const path = './data/sample.json';

  // READ
  app.get('/articles', (req, res) => {
      fs.readFile(path, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
          const parsedData = JSON.parse(data)
          const {comments,  users, topics} = parsedData;

          const getCommentsById = (id) => comments.filter( comment =>  comment.topic_id === id)

          const articles = topics.map(topic => {
            return {
              ...topic,
              comments: getCommentsById(topic.topic_id).map(comment => {
                return {
                  ...comment,
                  ...users.find(user => user.user_id === comment.user_id)
                }
              })
            }
          });

          res.send(articles);
      });
  });
};

module.exports = articleRoutes;
