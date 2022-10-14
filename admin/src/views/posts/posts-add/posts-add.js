import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form, FormLabel } from 'react-bootstrap'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  CCard,
  CFormLabel,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import '../../css/table.css'
const moment = require ('moment/moment')

export const postsAdd = () => {

  const [title, setTitle] = useState('')
  const [game, setGame] = useState('')
  const [category, setCategory] = useState('')
  const [detail, setDetail] = useState('')
  const [file, setFile] = useState()
  const uuidv4 = Math.random().toString(36).slice(6)

  const saveFile = (e) => {
    setFile(e.target.files[0])
  }

  const onCreatePost = (req, res) => {
    var formdata = new FormData();
    formdata.append("id", uuidv4);
    formdata.append("title", title);
    formdata.append("game", game);
    formdata.append("category", category);
    formdata.append("detail", detail);
    formdata.append("uploads", file);
    formdata.append("date", `${moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")}`);
    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    fetch("http://localhost:3333/uploads", requestOptions)
    .then(result => {
      if (result.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Create post successfully.',
          icon: 'success'
        }).then(function () {
          window.location.reload(false)
        })
      }
    })
    .catch(error => console.log('error', error))
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Post Add</strong>
          </CCardHeader>
          <CCardBody>
            <Form>
              <div className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title input" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <FormLabel>Thumbnail</FormLabel>
                <Form.Control type="file" name="thumbnail" onChange={saveFile} />
              </div>
              <div className="mb-3">
                <FormLabel>Games</FormLabel>
                <Form.Control type="text" placeholder="Games input" name="game" value={game} onChange={(e) => setGame(e.target.value)} />
              </div>
              <div className="mb-3">
                <FormLabel>Category</FormLabel>
                <Form.Select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Select Category</option>
                  <option value="Games">Games</option>
                  <option value="Official">Official</option>
                </Form.Select>
              </div>
              <div className="mb-3">
                <CFormLabel>Detail</CFormLabel>
                <CKEditor
                  editor={Editor}
                  data={detail}   
                  onChange={(e, editor) => {
                    const data = editor.getData()
                    setDetail(data)
                  }}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton className='btn-save' color="primary" onClick={onCreatePost}>Save</CButton>
              </div>
            </Form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}