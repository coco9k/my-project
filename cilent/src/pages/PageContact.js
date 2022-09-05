import React, { useState, useEffect, useRef } from 'react';
import { Container } from "react-bootstrap";
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";
import PageContactCover from '../assets/img/pagecontact.png';
import './css/PageContact.css';

export const PageContact = () => {

  const form = useRef(null);

  const sendEmail = () => {
    emailjs.sendForm('service_wea2491', 'template_2tnx809', form.current, 'KKFaxKiKqSu1PZICL')
      .then((result) => {
        if (result.status === 200) {
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been successfully sent.',
            icon: 'success'
          }).then(function () {
            window.location.reload(false);
          });
        }
      }, (error) => {
        if (error.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      });
  }

  const initialValues = { name: "", email: "", phone: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendEmail()
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regexName = /^[a-z ,.'-]+$/i;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!values.name) {
      errors.name = "*Name is required!";
    } else if (!regexName.test(values.name)) {
      errors.name = "*This is not a valid name format!";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "*Phone number is required!";
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = "*This is not a valid Phone number format!";
    }
    if (!values.subject) {
      errors.subject = "*Subject is required!";
    }
    if (!values.message) {
      errors.message = "*Message is required!";
    }
    return errors;
  };

  return (
    <>
      <div className="banner" id="banner">
        <div style={{ maxWidth: '100%' }}>
          <img className="page-contact-cover" src={PageContactCover} alt="aricat-contact-cover" />
        </div>
      </div>
      <Container>
        <div className="contact">
          <h2 className="contact_text">INQUIRY
            <span>ติดต่อเรา</span>
          </h2>
          <Form className="row pt-3 mx-auto" ref={form} onSubmit={handleSubmit}>
            <Form.Group className="col-8 form-group pt-2 mx-auto form-input">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" name="name" value={formValues.name} onChange={handleChange} />
              <p className='formErrors'>{formErrors.name}</p>
            </Form.Group>
            <Form.Group className="col-8 form-group pt-2 mx-auto form-input">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" name="email" value={formValues.email} onChange={handleChange} />
              <p className='formErrors'>{formErrors.email}</p>
            </Form.Group>
            <Form.Group className="col-8 form-group pt-2 mx-auto form-input">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" name="phone" value={formValues.phone} onChange={handleChange} />
              <p className='formErrors'>{formErrors.phone}</p>
            </Form.Group>
            <Form.Group className="col-8 form-group pt-2 mx-auto form-input">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" name="subject" value={formValues.subject} onChange={handleChange} />
              <p className='formErrors'>{formErrors.subject}</p>
            </Form.Group>
            <Form.Group className="col-8 form-group pt-2 mx-auto form-input">
              <Form.Label>Contents of inquiry</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Please enter the content of your inquiry" name="message" value={formValues.message} onChange={handleChange} />
              <p className='formErrors'>{formErrors.message}</p>
            </Form.Group>
            <div className="col-8 pt-3 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className="summit summit_btn" value="Send Message">Send Message</button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};