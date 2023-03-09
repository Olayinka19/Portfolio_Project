import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Education_office() {
  return (
    <div>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81f3KKTGx-L._AC_SL1500_.jpg"/>
        <Card.Body>
          <Card.Title>Office Star DC Series Adjustable</Card.Title>
          <Card.Text>
          Drafting Chair with Foot Ring and Sculptured Foam Seat, Black Vinyl
          </Card.Text>
          <Button variant="success"><a href="https://amzn.to/3YBfgEG"><b>$58.99 </b><del>$129.53</del></a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Education_office