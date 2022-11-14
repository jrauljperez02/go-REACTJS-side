import { createContext, useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { DOMAIN } from "../utils/domain";

const PostContext = createContext();
export default PostContext;

export const PostProvider = ({children}) => {

    const {authTokens} = useContext(AuthContext);
    const [allPosts, setAllPosts] = useState([])

    const fetchAllPosts = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/post/all/`, {
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
            setAllPosts(result);
          } catch (err) {
            console.log(err.message);
          }
    }

    let contextData = {
        allPosts,
    }

    useEffect(() => {
        if(authTokens){
            fetchAllPosts();
        }
    },[authTokens])

    return (
        <PostContext.Provider value = {contextData}>
            {children}
        </PostContext.Provider>
    )
}