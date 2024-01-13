import React , {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <>
    <h2>List of users</h2>
    
    {users.loading && <div>Loading data...</div>}
    {!users.loading && users.error ? <div>ERROR : {users.error}</div> : null}
    {!users.loading && users.users.length > 0 ? (
      <ul>
        {
          users.users.map((user)=>(
            <p key={user.id}>{user.username}</p>
          ))
        }
      </ul>
    ) : null }
    </>
  )
}
