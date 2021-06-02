import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class UpdateForm extends Component {
    render() {
        return (
            <Modal show={this.props.showUpdateForm} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>update book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e)=>this.props.updateBook(e)}>

                    <Form.Control
                     type="text" 
                     value={this.props.title} 
                     onChange={(event)=>this.props.setBookName(event)}/>
                    <Form.Control
                     type="text"
                     value={this.props.description}
                     onChange={(event)=>this.props.setDescription(event)}/>
                    <Form.Control 
                     type="text" 
                     value={this.props.img} 
                     onChange={(event)=>this.props.setImg(event)}/>
                    <Button variant="primary" type="submit">
                       Update book
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        )
    }
}

export default UpdateForm
