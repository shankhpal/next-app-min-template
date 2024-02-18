'use client'
import React, { useState } from "react";
import User from "./User";
import { Container, Grid } from "@mantine/core";
import { UserObj } from "../interfaces";
import classes from './Users.module.css'
interface Props{
    data:{
        data:UserObj[] | undefined,
        error?:string| undefined
    }
}
const Users = (props: Props) => {
    const [users, setUsers] = useState(props.data)
    const deleteUser=(id:number)=>{
        const index = users?.data?.findIndex((obj:UserObj) => obj.id === id);
        if ( (!!index || index == 0) && index !== -1) {
            let data = users.data;
            data?.splice(index, 1);
            setUsers({data:data,error:undefined}); 
        }
    }
    return (
        <Container m={'lg'} p={0} maw={'100%'}>
            <Grid >
                {
                     users?.data && users.data.map((item: UserObj) => (
                       <Grid.Col span={{ base: 12, lg:3, sm:6 }} key={item.id}>
                        <User classes={classes} user={item} deleteUser={deleteUser}/>
                       </Grid.Col>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Users;

