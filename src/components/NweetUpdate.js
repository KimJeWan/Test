import React from "react";
import { dbService } from "../Config/Firebase";
import { deleteDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const NweetUpdata = ({nweetObj, keyId, IsOwner}) => { 

    const [nweetModify, setNweetModify] = useState(false)
    const [newNweet, setNewNweet] = useState(nweetObj.text)

    console.log(newNweet)

    const onDeleteClick = ( ) => {
        const ok = window.confirm('정말로 삭제하시겠습니까?')
        if(ok) {
             deleteDoc(doc(dbService, 'nweets', keyId))
        } else {
            // not delete nweets
            console.log('안삭제')
        }
    }

    const toggleModify = () => {
        setNweetModify((prev) => !prev)
    }
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            { IsOwner &&(
            <>
                {nweetModify ? (
                    <>
                    <form onSubmit={(e)=> {
                        e.preventDefault()
                        updateDoc(doc(dbService, 'nweets', keyId),{
                            text : newNweet
                        })
                        setNweetModify(false)
                    }}>
                        <input 
                            value={newNweet} 
                            required 
                            type='text'    
                            placeholder="Modify you`r nweet"
                            onChange={(e)=> setNewNweet(e.target.value)}
                        />
                        <input type='submit' value='Modify Nweet'  />
                    </form>
                    <button onClick={()=> setNweetModify(false)}>cancle</button>
                    </>
                ) : (
                    <>
                        <button onClick={onDeleteClick}>Delete nweet</button>
                        <button onClick={toggleModify}>Edit nweet</button>  
                    </>
                )}
            </>
            )}
        </div>
    )
}

export default NweetUpdata;