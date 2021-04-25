import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { ActionLink, Flex } from "../../styles/commonStyles";


/** TODO: Moved styles to separate style files */

const CommentBox = styled.div`
  border-left: 5px solid #ccc;
  padding-left: 20px;
  margin: 20px 0;
`
const Profile = styled.div`
  margin-bottom: 10px;
`
const ProfileDetailsUsername = styled.h5`
  padding-bottom: 5px;
`
const Text = styled.p`
  font-size: 14px;
  color: rgb(154, 154, 154);

`
const ProfilePosition = styled.h6`
  font-size: 12px;
  color: #8BDBFF;
`

export const Timestamp = styled.p`
  color: rgb(136, 136, 136);
  font-size: 12px;
  padding-top: 12px;
`;

/**
 * Component for showing list of comments.
 *
 * @component
 * @example
 * const data = []
 * return (
 *   <Comments comments={data}  />
 * )
 */

const Comments = ({ comments }) => {
  const [currentSize, setCurrentSize] = useState(3);
  const currentList = comments.slice(0, currentSize)
  const moreComments = () => setCurrentSize(currentSize+3)
  const lessComments = () => setCurrentSize(currentSize-3)

  /**
   * return time since comments are created from today
   * @param {Number} timestamp  timestamp of comments created
   * @return {string}           {x} years/months/days/hours/minutes
   */
  const timeSince = (timestamp) => {

    var seconds = Math.floor((new Date() - timestamp) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }


	return (
    <>
      {
        currentList.map(({user_id, comment, first_name, last_name, position, timestamp}) => (
          <CommentBox data-testid="comment-item" key={user_id}>
            <Profile>
              <ProfileDetailsUsername>{`${first_name} ${last_name}`}</ProfileDetailsUsername>
              <ProfilePosition>{position}</ProfilePosition>
            </Profile>
            <Text>{comment}</Text>
            <Timestamp>{ `${timeSince(timestamp)} ago`}</Timestamp>
          </CommentBox>
        ))
      }
      <Flex>
        {
          currentList.length < comments.length &&
          <ActionLink className="down" onClick={() => moreComments()}>Show More</ActionLink> 
          
        }
        {
          currentList.length > 3 &&
          <ActionLink className="up" onClick={() => lessComments()}>Show Less</ActionLink> 
        }
      </Flex>
    </>
	);
};

Comments.propTypes = {
  comments: PropTypes.array
}

export { Comments };
