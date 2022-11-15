import { createContext, useState, useContext, useEffect } from "react";
import { DOMAIN } from "../utils/domain";
import AuthContext from "./AuthContext";
import { convertArrayToObject } from "../utils/convertArrayInObject";

const UserContext = createContext();
export default UserContext;


export const UserProvider = ({children}) => {

    const {authTokens} = useContext(AuthContext);
    let [me, setMe] = useState('');
    const [allUsers, setAllUsers] = useState([])
    const [allUsersAsArray,setAllUsersAsArray] = useState([])

    let fetchProfile = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/profile/me/`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Authorization' : `Bearer ${authTokens.access}`,
              },
            });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setMe(result);
          } catch (err) {
            console.log(err.message);
          }
    }

    const fetchAllUsers = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/user/users/`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Authorization' : `Bearer ${authTokens.access}`,
              },
            });
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            setAllUsersAsArray(result)
            const resultInObject = convertArrayToObject(result, 'id')
            setAllUsers(resultInObject);
          } catch (err) {
            console.log(err.message);
          }
    }


    let contextData = {
        me,
        allUsers,
        allUsersAsArray,
    }

    useEffect(() => {

        if(authTokens){
            fetchProfile();
            fetchAllUsers();
        }

    },[authTokens]);

    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )

}