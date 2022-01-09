import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import CertificationAdd from './CertificationAdd';
import CertificationEdit from './CertificationEdit';

function CertificationList(props) {
  const [showAddModal, setshowAddModal] = useState(false)
  const [certName, setcertName] = useState([])
  
  //Edit Modal

  const [showEditModal, setshowEditModal] = useState(false)
  const [selectedCert, setselectedCert] = useState([])
  const [selectedCertIndex, setselectedCertIndex] = useState('')


  console.log('select', selectedCert);

  //Add Cert
  let updateShowAddModal = () => {
    setshowAddModal(true);
  }
  let hideShowAddModal = () => {
    setshowAddModal(false);
  }
  let showCert = (certAdd) => {
    console.log('show', certAdd);
    let certCopy = [...certName]
    certCopy.push(certAdd)
    setcertName(certCopy)
  }

  //Delete Cert
  let deleteCert = (index) => {
    let certCopy = [...certName]
    certCopy.splice(index, 1)
    setcertName(certCopy)
  }

  //Edit Cert
  let updateSelectedCert = (cert, index) => {
    setshowEditModal(true);
    setselectedCert(cert);
    setselectedCertIndex(index)
  }

  let hideShowEditModal = () => {
    setshowEditModal(false);
  }
  let showCert1=(certAdd)=>{
    let certCopy = [...certName]
    certCopy.splice(setselectedCertIndex,1,certAdd)
    setcertName(certCopy)
  }

  return (
    <div>
      <p className='head'>The Secret of getting ahead is getting started</p>
      <Table striped bordered hover>
      
        <thead>
          <tr>
            <th>Certification Name</th>
            <th>Certified From</th>
            <th>Year of Completion  </th>
            <th>
              <button className="btn btn-warning" onClick={updateShowAddModal}>
                ADD
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {certName.length > 0 &&
            certName.map((cert, index) => {
              return (
                <tr key={index}>
                  {/* <td>{cert.id}</td> */}
                  <td>{cert.name}</td>
                  <td>{cert.certified}</td>
                  <td>{cert.year}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        updateSelectedCert(cert, index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteCert(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <CertificationAdd
        showAddModal={showAddModal}
        hideShowAddModal={hideShowAddModal}
        showCert={showCert}
      />
      <CertificationEdit
        showEditModal={showEditModal}
        hideShowEditModal={hideShowEditModal}
        showCert1={showCert1}
        selectedCert={selectedCert}
      />
    </div>
  )
}

export default CertificationList
