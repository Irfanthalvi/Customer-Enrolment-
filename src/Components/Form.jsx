import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import Model from './Model';
import { db } from '../Firebase';
import { MyContext } from '../App';


const Form = () => {
    const { prod, setProd } = useContext(MyContext); 

    const paperstyle = {
        backgroundColor: "#00796b",
        height: "95vh",
        width: "15%",
        display: "flex",
        justifyContant: "center",
        alignItems: "center",
        padding: "5px"
    };

    const papercustomer = {
        fontSize: "4vh",
        width: "100%",
        height: "20vh",
        display: "flex",
        alignItems: "center",
    };

    const handlebtn = {
        position: "fixed",
        top: "25%",
        left: "15%",
        backgroundColor: "#00796b",
        color: "white"
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.once('value');
                const data = snapshot.val();
                if (data) {
                    const customers = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    console.log("Data fetch : ", customers)
                    setProd(customers);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Grid backgroundColor="#e3f2fd">
                <Grid display="flex">
                    <Paper style={paperstyle}>
                    </Paper>
                    <Button style={handlebtn}>
                        <b>+ ADD CUSTOMER</b>
                    </Button>
                    <Paper style={papercustomer}>
                        <b style={{ marginLeft: "5%" }}>CUSTOMERS</b>
                    </Paper>
                        <Model />
                </Grid>
            </Grid>
        </>
    )
}

export default Form;
