import React from "react";
import Users from "./Users/Users"
import { Notification } from "@mantine/core";
const HomePage = async () => {
  const data = await getData();
  return (data.error ?
    <Notification color="red" style={{width:"50%", top:150, margin:'auto'}} title="Something went Wrong">
      {data.error}
    </Notification> :
    <Users data={data}></Users>);
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    return { data: undefined, error: 'Failed to fetch data' }
  }
  return { data: await res.json() };
}

export default HomePage;