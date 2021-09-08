import React , {useState, useEffect} from 'react'

const useFetch =(url)=>{
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getdata() {
          const reponse = await fetch(url, {
            method: "GET",
            headers: { "X-Auth-Token": "c4a193f2be0948b8b3e1fdb775252d4a" },
          });
          const APIData = await reponse.json();
          setData(APIData.scorers);
    
          return reponse;
        }
        getdata();
      }, [url]);
return data
}

export default useFetch


