import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { getDataAPI } from './service/allApi';
import { addResponseContext, deleteResponseContext, editResponseContext } from './context/ContextShare';

function Home() {
    const { addResponse } = useContext(addResponseContext)
    const { deleteResponse } = useContext(deleteResponseContext)
    const { editResponse } = useContext(editResponseContext)
    const [allData, setAllData] = useState([])
    console.log(allData);

    const getAllData = async () => {
        const result = await getDataAPI()
        setAllData(result.data)
    }

    useEffect(() => {
        getAllData()
    }, [addResponse, deleteResponse, editResponse])

    return (
        <>
            {/* header */}
            <Navbar className="bg-body-tertiary">
                <Container className='my-2'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://tse2.mm.bing.net/th/id/OIP.wYxEl-hivUWS1wt9YkO7EQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <h2 className='text-dark' style={{ float: "right" }}>Mern Demo</h2>
                </Container>
            </Navbar>

            <div id='maindiv' className='container-fluid d-flex justify-content-center align-items-center' style={{ minHeight: "80vh" }}>
                <div className='bg-dark'>
                    <Add />
                </div>
            </div>

            {/* Images section */}
            <div className='container-fluid pt-4 pb-4'>
                <h1 className='text-center text-info'>Images</h1>
                {allData?.map((item) => (<div className="row mt-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row border border-3 border-info ">
                            <div className="col-md-4"> <img src={item?.imgurl} alt="" className='w-100 py-1' /></div>
                            <div className="col-md-8  text-center d-flex flex-column justify-content-center align-items-center">
                                <h3 className=''>{item?.title}</h3>
                                <p>{item?.description}</p>
                            </div>
                            <div>
                                <div className="row ">
                                    <div className="col-6 p-0"><Edit item={item} /> </div>
                                    <div className="col-6 p-0"><Delete item={item} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>))}
            </div>
            {/* Footer */}
            <div className='my-2 bg-dark text-info py-3'>

                <marquee behavior="" direction="">
                    <h3>
                        Capturing timeless moments, one frame at a time
                    </h3>
                </marquee>
            </div>
        </>
    )
}

export default Home