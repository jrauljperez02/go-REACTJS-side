import { createContext, useState, useContext, useEffect } from "react";
import { DOMAIN } from "../utils/domain";
import AuthContext from "./AuthContext";

const UserContext = createContext();
export default UserContext;


export const UserProvider = ({children}) => {

    const {authTokens} = useContext(AuthContext);
    let [me, setMe] = useState('');

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

    let contextData = {
        me: me,
    }

    useEffect(() => {

        if(authTokens){
            fetchProfile();
        }

    },[authTokens]);

    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )

}