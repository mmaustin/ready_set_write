import React from 'react'

const TopicContainer = ({topic, topicFunction}) => {
    return(
        <>
            <p>Your Topic: <span id="topic">{topic}</span></p><button onClick={topicFunction}>Choose Another Topic</button>
        </>
    )
}

export default TopicContainer