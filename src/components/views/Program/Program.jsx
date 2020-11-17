import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";
import ProgramLogin from "./ProgramLogin";

function Program() {
    const [apiResponse, setPage] = useState( "" )
    const [apiName, setName] = useState( "" )
    const [apiUsers, setUsers] = useState([]); 
    const [hasError, setErrors] = useState(false);

    async function fetchUsers(){
        const res = await fetch("https://webdev.talos.net.nz/~max-adams/api/users");
        res
          .json() 
          .then(res => setUsers(res))
          .catch(err => setErrors(err));
      }
      useEffect(() => {
       fetchUsers();
      },[] ); // This is the dependency array without it re-renders in a knock on loop
              // https://maxrozen.com/learn-useeffect-dependency-array-react-hooks/
  
      if(apiUsers)
        return (
            <>
                <ProgramLogin />
            </>
        )
        else return null;
}

export default Program
