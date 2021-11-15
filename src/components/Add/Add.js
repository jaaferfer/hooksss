import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from 'react-bootstrap'
const Add = ({addMovie}) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [posterUrl, setPosterUrl] = useState('');
const [rating, setRating] = useState(0);


const handleSubmit =()=> {
    addMovie ( {title, description, posterUrl, rating});
    setRating(0);
    setTitle('')
    setDescription('')
    setPosterUrl('')
    handleClose()
}




    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




    return (
        <div>
      <Button variant="primary" onClick={handleShow}>
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type ='text' name ='' placeholder='set the title of your movie' onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <input type ='text' name ='' placeholder='set the discription of your movie' onChange={(e)=>setDescription(e.target.value)}/>
            <br/>
            <input type ='url' name ='' placeholder='set the source image of your movie' onChange={(e)=>setPosterUrl(e.target.value)}/>
            <br/>
            <input type ='number' name ='' placeholder='set the rating of your movie' min='0' max ='5' onChange={(e)=>setRating(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Add
