import React from "react";
import { useState } from "react";
import NweetUpdata from "../../components/NweetUpdate";

import {authService, dbService} from "../../Config/Firebase";
import { addDoc, collection, getDocs, query, doc, onSnapshot,getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const Nwitter = ( {userObj}) => {

    const [nweet, setNweet] = useState('')
    const [nweets, setNweets] = useState([])
    
    const unsub = () => {
        onSnapshot(collection(dbService, "nweets"), (doc) => {
            const nweetsArray = doc.docs.map((item)=> ({
              id : item.id,
              ...item.data()
            }));
            setNweets(nweetsArray)
        });
    }

    // const getNweets = async () => {
    //     const q = query(collection(dbService, "nweets"));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //     const nweetObj = {
    //     ...doc.data(),
    //     id: doc.id, 
    //     }
    //     setNweets(prev => [nweetObj, ...prev]);
    //     });
    //     }; 기존의 firebase 데이터 받아오던 함수 
        
    useEffect(() => {
        // getNweets();
        unsub()
    }, []);

    return (
        <div>
          <form onSubmit={async (e)=> {
            e.preventDefault();
            try {
                const docRef = await addDoc(collection(dbService, "nweets"), {
                text : nweet,
                createdAt: Date.now(),
                creatporID : userObj.uid
                });
                console.log("Document written with ID: ", docRef.id);
                } catch (error) {
                console.error("Error adding document: ", error);
                }
            setNweet('')
          }}>
            <input type='text' placeholder="what`s on your mind ? " maxLength={120} onChange={(e)=> setNweet(e.target.value)} value={nweet} />
            <input type='submit' value='Nweet'/>  
          </form>
          <div>
                {nweets.map((item)=> {
                    return(
                        <div key={item.id}>
                            <NweetUpdata keyId={item.id} nweetObj={item} IsOwner={item.creatporID === userObj.uid}/>
                        </div >
                    )
            })}
          </div>
        </div>
    )
}

export default Nwitter;