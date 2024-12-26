import React, { useContext } from 'react';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { MyContext } from '../App';
const File = (props) => {
    
    const { prod } = useContext(MyContext); 
    console.log("File: ", prod);
    const handleList = {
        display: "flex",
        backgroundColor: "#a5d6a7",
        width: "70%",
        position: "fixed",
        left: "15%",
        top: "35%",
        padding: "10px",
    };

    const handleCustomer = {
        width: "71%",
        position: "fixed",
        left: "15%",
        top: "43%",
        padding: "10px",

    };

    const handleNo = {
        position: "fixed",
        left: "16%"
    }
    const handleName = {
        position: "fixed",
        left: "33%"
    }
    const handleEmail = {
        position: "fixed",
        left: "52%"
    }
    const handleActions = {
        position: "relative",
        left: "80%"
    }
    const handleCustomerbox = {
        marginTop: "10px",
        backgroundColor: "white",
        padding: "10px"
    }
    const handleEditbtn = {
        fontSize: "small",
        marginRight: "10px",
        backgroundColor: "#2196f3",
        color: "white",
    };

    const handleDeletebtn = {
        fontSize: "small",
        backgroundColor: "#d50000",
        color: "white",
        marginLeft: "10px",
    };

    return (
        <>
            <Grid>
                <Grid style={handleList}>
                    <Typography variant="h6" style={handleNo}>Customer ID</Typography>
                    <Typography variant="h6" style={handleName}>Customer Name</Typography>
                    <Typography variant="h6" style={handleEmail}>Email</Typography>
                    <Typography variant="h6" style={handleActions}>Actions</Typography>
                </Grid>
                <Grid style={handleCustomer}>
                    {prod?.map((item, index) => (
                        <Grid key={index} container alignItems="center" style={handleCustomerbox}>
                            <Grid item xs={2} style={{ display: "flex" }}>
                                <Grid >
                                        <Avatar alt="Avatar" src={item.selectedImage} style={{ cursor: 'pointer' }} />
                                </Grid>
                                <Typography style={{ marginTop: "6%", marginLeft: "8%" }}>{index + 1}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.name}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.email}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" style={handleEditbtn} onClick={() => props.handleEdit(index)}>Edit</Button>
                                <Button variant="outlined" style={handleDeletebtn} onClick={() => props.handleDelete(index)}>Delete</Button>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid >
        </>
    );
};

export default File;
