import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useState} from 'react'
import NewEvent from './createNewEvent';

export default function Event(props) {
    
    const [show, setshow] = useState(true)
    function More_info(){
        setshow(!show)
    }
    return(
        <div class="container mt-3">
            <div class="card shadow-sm p-3bg-white rounded">
            <img class="card-img-top" src={props.item.img} alt="Card image" style={{width:"100%" , objectFit: "cover", height:"250px"}}/>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title">{props.item.title}</h4>
                    <div><span class="text-secondary">Thoi gian: </span>{props.item.startTime}<span class="text-secondary"> den </span>{props.item.endTime}</div>
                </div>
                
                {!show ? 
                    <div>
                        <div class="d-flex justify-content-between">
                            <div><span class="text-secondary">So luong: </span>     <span class="text-danger">{props.item.number}</span>     <span class="text-secondary"> nguoi</span></div>
                            <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    :

                    <div>
                        <div><span class="text-secondary">So luong: </span>     <span class="text-danger">{props.item.listJoin.length}</span>     <span class="text-secondary"> nguoi</span></div>
                        <div><span class="text-secondary">Address: </span> props.item.address </div>
                        <p class="card-text mt-2">{props.item.description}</p>
                        <div><span class="text-secondary">Nguoi dang: </span> props.item.userID.name </div>
                        <div class="d-flex justify-content-between">
                            <button button type="button" class="btn btn-primary">Dang ky</button>
                            <p class="text-end mb-0">
                                <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                </svg>
                            </p>
                        </div>
                    </div>
                }
            </div>
            </div>
            {/* <NewEvent/> */}
        </div>
    )
}