import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Modal } from 'react-bootstrap'
import './style.css'

function CertificationAdd(props) {
  const [certAdd, setcertAdd] = useState({
    id: '',
    name: '',
    certified: '',
    year: ''
  })

  let validationSchema = yup.object().shape({
    // name: yup.string().min(3).max(10).required(" Certification Name is required"),
    // certified: yup.string().required("Enter Certified From .."),
    // year: yup.string().required("Year is required"),
  })

  // let onSubmit = (values, props) => {
  //   console.log('formik', values);

  // }

  let handleClose = () => {
    props.hideShowAddModal();
    props.showCert();
  };
  let handleChange = (event) => {
    setcertAdd({
      ...certAdd,
      [event.target.name]: event.target.value,
    });
  };

  let addCertification = (event) => {

    //NormalValidation
    validateName();
    validateCertified();
    validateYear();

    if (validateName() && validateCertified() && validateYear()) {
    props.hideShowAddModal();
    props.showCert(certAdd);
    console.log('certifi', certAdd);
    setcertAdd({
      id: '',
      name: '',
      certified: '',
      year: ''
    })
  }
  }

  //Normal Validation
  
  const [nameError, setnameError] = useState("")
    const validateName = () => {
        if (certAdd.name) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certAdd.name)) {
                setnameError("");
                return true;
            }
            else {
                setnameError("Enter valid Name");
            }
        }
        else {
            setnameError("Name is Required");
        }
        return false;
    };

    const [certifiedError, setcertifiedError] = useState("")
    const validateCertified = () => {
        if (certAdd.certified) {
            let regex = /^[a-zA-Z ]{4,30}$/;
            if (regex.test(certAdd.certified)) {
                setcertifiedError("");
                return true;
            }
            else {
                setcertifiedError("enter valid Certfied Name");
            }
        }
        else {
            setcertifiedError("Certified Name is Required");
        }
        return false;
    };

    const [yearError, setyearError] = useState("")
    const validateYear = () => {
        if (certAdd.year) {
            let regex = /^(197\d|19[89]\d|20[01]\d|202[0-2])$/;
            if (regex.test(certAdd.year)) {
                setyearError("");
                return true;
            }
            else {
                setyearError("Enter Year between 1970 to 2022");
            }
        }
        else {
            setyearError("Year is Required");
        }
        return false;
    };
  
  return (
    <>
      <Modal show={props.showAddModal} onHide={handleClose}>
        {/* <Formik
          initialValues={certAdd}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          > */}

          {/* {(props) => (
            <Form> */}

              <Modal.Header closeButton>
                <Modal.Title>Add Certification</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form>

                <div>
                  <label>Certification Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={certAdd.name}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="name" /></p> */}
                  {nameError && <div className="errMsg">{nameError}</div>}

                </div>
                <div>
                  <label>Certified From</label>
                  <input
                    type="text"
                    className="form-control"
                    name="certified"
                    value={certAdd.certified}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="certified" /></p> */}
                  {certifiedError && <div className="errMsg">{certifiedError}</div>}


                </div>
                <div>
                  <label>Year of Completion</label>
                  <input
                    type="number"
                    className="form-control"
                    name="year"
                    value={certAdd.year}
                    onChange={handleChange}
                  />
                  {/* <p className='error'><ErrorMessage name="year" /></p> */}
                  {yearError && <div className="errMsg">{yearError}</div>}


                </div>

                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary" onClick={addCertification}>
                  Add Certificate
                </Button>
              </Modal.Footer>
            {/* </Form>

          )}
        </Formik> */}
      </Modal>
    </>
  )
}

export default CertificationAdd
