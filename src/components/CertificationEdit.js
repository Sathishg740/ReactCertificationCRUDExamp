import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './style.css'


function CertificationEdit(props) {
    const [certAdd, setcertAdd] = useState({
        id: '',
        name: '',
        certified: '',
        year: ''
    })

    useEffect(() => {
        setcertAdd({ ...props.selectedCert });
    }, [props.selectedCert])

    let handleClose = () => {
        props.hideShowEditModal();
    }

    let handleChange = (event) => {
        setcertAdd({
            ...certAdd,
            [event.target.name]: event.target.value,
        });
    };
    let editCertification = (event) => {
        validateName();
        validateCertified();
        validateYear();
        if (validateName() && validateCertified() && validateYear()) {
            props.showCert1(certAdd)
            console.log('certadd', certAdd);
            props.hideShowEditModal();
        }
        // else{
        //     alert("error")
        // }
    }

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
            <Modal show={props.showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Certificate</Modal.Title>
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
                            {yearError && <div className="errMsg">{yearError}</div>}

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editCertification}>
                        Save Certificate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CertificationEdit
