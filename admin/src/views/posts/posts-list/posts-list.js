import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import { Row, Col, Table, Card } from "react-bootstrap";
import { cilDelete, cilNotes } from '@coreui/icons'
import {
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import '../../css/table.css'

export const postsList = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setNews(result);
        }
      )
  }, [])

  return (
    <Row>
      <Col>
        <Card className="mb-12 card-body-table">
              <Table striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Detail</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Creat By</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {news.map(news => (
                    <CTableRow key={news.id}>
                    <CTableHeaderCell scope="row">{news.id}</CTableHeaderCell>
                    <CTableDataCell className='title'><p>{news.title}</p></CTableDataCell>
                    <CTableDataCell className='detail'><p>{news.detail}</p></CTableDataCell>
                    <CTableDataCell>{news.category}</CTableDataCell>
                    <CTableDataCell>{news.creat_by}</CTableDataCell>
                    <CTableDataCell>{news.date.slice(0, 10)}</CTableDataCell>
                    <CTableDataCell><CIcon customClassName='icon-custom-size' icon={cilNotes} /></CTableDataCell>
                    <CTableDataCell><CIcon customClassName='icon-custom-size' icon={cilDelete} /></CTableDataCell>
                  </CTableRow>
                  ))}
                </CTableBody>
              </Table>
        </Card>
      </Col>
    </Row> 
  )
}