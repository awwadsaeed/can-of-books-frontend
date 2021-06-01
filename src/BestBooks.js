// 'use strict';
import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import ModalForm from './Modal'


// const serverRoute = process.env.REACT_APP_ROUTE;


class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksInfo: [],
            showModal: false,
            bookName: '',
            description: '',
            img_url: '',
        }
        // console.log(this.props.auth0.user);
    }
    setBookName = (e) => {
        this.setState({
            bookName: e.target.value
        })
        console.log(this.state.bookName);
    }
    setDescription = (e) => {
        this.setState({
            description: e.target.value
        })
        console.log(this.state.description);
    }
    setImage = (e) => {
        this.setState({
            img_url: e.target.value
        })
        console.log(this.state.img_url);
    }


    handleShowModal = () => {
        this.setState({
            showModal: true,
        })
        console.log(this.state.showModal);
    }
    hideModal = () => {
        this.setState({
            showModal: false,
        })
    }
    componentDidMount = async () => {
        let result = await axios.get(`http://localhost:3001/books?email=${this.props.auth0.user.email}`);
        this.setState({
            booksInfo: result.data,
            rend: true,
        })
        // console.log(this.state.booksInfo);
    }


    addBooks = async (e) => {
        e.preventDefault();
        const books = {
            bookName: this.state.bookName,
            description: this.state.description,
            imageUrl: this.state.img_url,
            email:this.props.auth0.user.email,
        }
        let result = await axios.post('http://localhost:3001/addBooks', books);
        this.setState({
            booksInfo: result.data,
        })
    }
    deleteBook = async (index) => {
        const email = {
            email: this.props.auth0.user.email
        }
        let newBooks = await axios.delete(`http://localhost:3001/deleteBook/${index}`, { params: email })

        this.setState({
            booksInfo: newBooks.data
        })
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShowModal}>Add Book</Button>
                {this.state.showModal && <ModalForm closeModal={this.hideModal} display={this.state.showModal} setImg={this.setImage} setDescription={this.setDescription} setBookName={this.setBookName} addBooks={this.addBooks}/>}
                {this.state.booksInfo.length !== 0 && <>
                    <CardColumns>

                        {this.state.booksInfo.map((element, i) => {
                            return (<Card style={{ width: '18rem' }} key={i}>
                                <Card.Img variant="top" src={element.image} alt={element.name} style={{ width: '15rem', height: '16rem', margin: 'auto' }} />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text style={{ overflow: 'auto', height: '5rem' }}>
                                        {element.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>this.deleteBook(i)}>Delete</Button>
                                </Card.Body>
                            </Card>)
                        })}

                    </CardColumns></>
                }
            </>
        )
    }
}

export default withAuth0(BestBooks);