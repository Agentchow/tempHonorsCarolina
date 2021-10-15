import { AppBar, Toolbar, Typography, Modal, Box, TextField, List, Button, IconButton } from "@mui/material";
// import { Document } from "react-pdf";
import { Home } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

export default function Main() {

    const [auth, setAuth] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const [resumeView, setResumeView] =  React.useState(false);
    
    let url = null;
    let showResume = (uri) => {setResumeView(true); url = uri};
    let closeResume = () => {setResumeView(false); url = null};

    const loginOpen = () =>  setOpenModal(true);
    const loginClose = () => setOpenModal(false);

    const logIn = () => {setAuth(true)};
    const logOut = () => {
        setAuth(false);
    };

    const [approved, setApproved] = React.useState(null);
    const [pending, setPending] = React.useState(null);

    const getData = () => {
        let res = [{
            "id":1,
            "name" : "Rahul Narvekar",
            "major": "CS and Econ",
            // "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "pending"
        },{
            "id":2,
            "name" : "Charles Chow",
            "major": "CS and Business",
            // "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "pending"
        },{
            "id":3,
            "name" : "Saurav Bahali",
            "major": "CS and Econ",
            // "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "approved",
            "tags": "Swfit, NodeJS, Express, Java, OOP"
        },{
            "id":4,
            "name" : "Habib Khadri",
            "major": "CS and Business",
            // "resume" : "https://drive.google.com/file/d/1hezwS7qfRwCvbGV8wNhLqvqXQxQp7-dH/view?usp=sharing",
            "status": "approved",
            "tags": "Trello, Product Management, Java, OOP"
        }];
        let rowsApproved = [];
        let rowsPending = [];
        res.forEach(element => {
            if(element.status === "approved") {
                rowsApproved.push({
                    id: element.id,
                    name: element.name,
                    major: element.major,
                    resume: element.resume,
                    tags: element.tags
                })
            } else {
                rowsPending.push({
                    id: element.id,
                    name: element.name,
                    major: element.major,
                    resume: element.resume
                })
            }
        });
        setApproved(rowsApproved);
        setPending(rowsPending);
    }
    
    const modalSubmit = () => { 
        getData();
        loginClose(); 
        logIn();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        '& > :not(style)': { m: 1, width: '25ch' }
    };

    const columnsPending = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'major', headerName: 'Major', width: 200 },
        {
            field: 'resume', headerName: 'Resume', width: 275,
            renderCell: (col) => (
                <strong>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}
                        href={col.value}>View</Button>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}
                        href={col.value}>Accept</Button>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}
                        href={col.value}>Reject</Button>
                </strong>
            )
        },
    ];

    const columnsApproved = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'major', headerName: 'Major', width: 200 },
        { field: 'resume', headerName: 'Resume', width: 195,
            renderCell: (col) => (
                <strong>
                    <Button
                        onClick={showResume}
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}>View</Button>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}
                        href={col.value}>Delete</Button>
                </strong>
            )
        },
        { field: 'tags', headerName: 'Tags', width: 400 }
    ];
    console.log("reached return")

    return (
        <div>

            maintest
        </div>

    )
}
