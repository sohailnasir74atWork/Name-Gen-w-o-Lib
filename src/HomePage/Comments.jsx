import React, { useEffect, useState } from 'react'
import CircularColor from '../Common/Loader'
import "./Comment.css"

const Comments = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState("");
    const [receivedData, setReceivedData] = useState([]);
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    const displayedComponents = receivedData.slice(startIndex, endIndex);
    const [loading, setLoading] = useState(true)
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const { swal } = window


    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL_SERVER}/comments`);
            const data = await response.json();
            setReceivedData(data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    useEffect(() => {
        getData()
    }, [])

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            swal({
                icon: "error",
                title: "Ops! please insert name",
            });
            return;
        }
        if (!message) {
            swal({
                icon: "error",
                title: "Ops! please insert comment",
            });
            return;
        }
        setLoading(true);
        fetch(`${process.env.REACT_APP_URL_SERVER}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message })
        })
            .then((response) => {
                setLoading(false);
                swal({
                    icon: "success",
                    title: "Submitted Successfully",
                });
                setName('');
                setMessage('');
                getData();
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                swal({
                    icon: "error",
                    title: "Ops! some thing went wrong",
                });
            });
    };


    return (
        <div className='wrapper-comments'>
            <div><h3>How was your Experience? Leave a Comment</h3></div>
            <div className="forms">
                <input required className='spacer' value={name}
                    onChange={handleNameChange} placeholder='Name'/>
                <input className='spacer' value={email}
                    onChange={handleEmailChange} placeholder='Email (Optional)'/>
                <textarea
                    placeholder='Write here'
                    className='spacer-3 text-area'
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
            <button className="primary-button submit-button" variant="outlined" onClick={handleSubmit}>
                Submit
            </button>
            <div className="spacer-2"><h3>Comments</h3></div>
            {loading && <div style={{ display: "flex", justifyContent: "center", padding: "6rem 1rem" }}><CircularColor /></div>}
            {!loading && displayedComponents.map(data => {
                return (
                    <div key={data.id}>
                        <div className='comments-card'>
                            <h5>{data.name}</h5>
                            <p>{data.message}</p>
                        </div>
                    </div>
                );
            })}
            {/* <div className='pagination-cont'>
                <Pagination count={Math.ceil(receivedData.length / 4)} color="secondary" onChange={handlePageChange} /></div> */}
        </div>
    )
}

export default Comments