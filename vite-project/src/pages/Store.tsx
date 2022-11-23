import React from 'react'
import "./Store.sccs"
import storeitems from "../data/items.json"
import { Col, Container,Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
const Store = () => {
  return (
    <Container>
      <h1>Store</h1>
      <Row>
        {storeitems.map(item=>(
          <Col key={item.id}>
          <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Store