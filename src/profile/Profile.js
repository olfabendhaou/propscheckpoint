import React from 'react'
import {Card,Button} from 'react-Bootstrap'
import PropTypes from 'prop-types'
function Profile(props) {
    const handleName=(fullname) => alert('My name is $ {props.fullname}');
  return (
    <div>
    <Card style={{ width: '18rem' }}>
        {props.children}
    <Card.Body>
      <Card.Title>{props.Fullnameme}</Card.Title>
      <Card.Text>{props.Age}
      </Card.Text>
      <Card.Text>{props.Profession}</Card.Text>
      <Button variant="primary" onClick={handleName}>Click Me</Button>
    </Card.Body>
  </Card>
    </div>
  )
}
Profile.propTypes = {Age: 
  PropTypes.number,
  Fullname: PropTypes.string,
  Profession: PropTypes.string}
Profile.defaultProps = {Title: "this is a title"}

export default Profile
