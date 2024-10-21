import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, selectUsers, setCurrentUser } from "../features/users/userSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const currentUser = useSelector((state) => state.users.currentUser); 

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/users/allusers"
          );
          dispatch(setUsers(response.data.data));
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
      const fetchCurrentUser = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/users/current-user"
          );
          console.log(response)
          if (response.data.success) {
            dispatch(setCurrentUser(response.data.data)); 
            console.log(response.data)
          }
        } catch (error) {
          console.error(
            "Error fetching current user:",
            error.response ? error.response.data : error.message
          );
        }
      };

      fetchUsers();
      fetchCurrentUser()
    }, [dispatch]);

     


  return (
    <div>
      <h1>User List</h1>
      {currentUser && (
        <div>
          <h2>Welcome, {currentUser.fullName}!</h2>
          <p>Email: {currentUser.email}</p>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
