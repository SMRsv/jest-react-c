import React from 'react';

const Users2 = (props) => {
  const {user} = props;
  const legal = user.age >= 18 ? (
    <h2 style={{color: "green"}}>{user.name}</h2>
  ) : (
    <h2 style={{color: "red"}}>{user.name}</h2> 
  );
  return (
    <div data-testid={`user-${user.id}`}>{legal}</div>
  )
};

export default Users2;