import { createContext, useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { DOMAIN } from "../utils/domain";

const PostContext = createContext();
export default PostContext;

export const PostProvider = ({children}) => {

    const {authTokens} = useContext(AuthContext);
    const [allPosts, setAllPosts] = useState([]);
    const [authPosts, setAuthPosts] = useState([]);

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

    const fetchAuthPosts = async() => {
        try {
            const response = await fetch(`${DOMAIN}/api/post/posts/`, {
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
            setAuthPosts(result);
          } catch (err) {
            console.log(err.message);
          }
    }



    let contextData = {
        allPosts,
        authPosts,
    }

    useEffect(() => {
        if(authTokens){
            fetchAllPosts();
            fetchAuthPosts();
        }
    },[authTokens])

    return (
        <PostContext.Provider value = {contextData}>
            {children}
        </PostContext.Provider>
    )
}