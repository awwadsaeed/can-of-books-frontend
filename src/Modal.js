import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class ModalForm extends Component {
    render() {
        return (
            <>

                <Modal show={this.props.display} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.addBooks}>

                            <Form.Control type="text" placeholder="Books title" onChange={(event)=>this.props.setBookName(event)}/>
                            <Form.Control type="text" placeholder="Description" onChange={(event)=>this.props.setDescription(event)}/>
                            <Form.Control type="text" placeholder="image Url" onChange={(event)=>this.props.setImg(event)}/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalForm
