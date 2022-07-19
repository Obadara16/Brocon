import React from 'react';
import '../styles.css';
import { useState } from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {  useFormik } from "formik";
import axios from "axios"
import * as yup from "yup";
import {Row, Col, Form, InputGroup, Button} from 'react-bootstrap';


const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Email is required!"),
});

const Footer = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const {  ...data } = values;

    const response = await axios
      .post("https://estate-chain-api.herokuapp.com/api/v1/awaitingUser/createAwaitingUser", data, {
        headers: {"Access-Control-Allow-Origin": "*"}
      })
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);

      });

      console.log(response)

    if (response && response.data) {
      setSuccess(response.data.message);
      
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <footer>
      <div className='footer__container'>
        <div className='footer__items'>
          <a href="#" className="footer__logo">Brocon</a>


          <div className="footer__socials">
            <a href="facebook.com"><FaFacebookF/></a>
            <a href="instagram.com"><FiInstagram/></a>
            <a href="twitter.com"><IoLogoTwitter/></a>
          </div>
        </div>

        <div className='footer__sub'>
          {!error && <span className='form-success'>{success ? success : ""}</span>}
          {!success && <span className='form-error'>{error ? error : ""}</span>}
          <Form onSubmit={formik.handleSubmit}>
          <p><i>Get notified when we start our next recruiting cycle! </i></p>   
          <Row className="mb-6 form__container">
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <InputGroup className='input__container'>
                  <Form.Control
                  type="text"
                  name="email"
                  placeholder='Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
              </InputGroup>
              <span className="field-error">
                  {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </span>
              </Form.Group>
              <Button type="submit" size="lg" className="btn" value="submit" disabled={!formik.isValid}>
                  Submit
              </Button>
          </Row>
          
          </Form>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brocky. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer