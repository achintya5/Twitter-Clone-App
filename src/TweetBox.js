import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from './firebase'

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Achintya Jha',
            username: 'achintyajha',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        })

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"/>
                <input 
                onChange={e => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"/>
                </div>

                <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}  
                className="tweetBox__imageInput" 
                placeholder="Optional: Enter image URL" 
                type="text"/>

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
