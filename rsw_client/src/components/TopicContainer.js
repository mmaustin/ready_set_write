import React from 'react'

const TopicContainer = ({topic, topicFunction}) => {
    return(
        <>
            <p>Your topic is: {topic}</p><button onClick={topicFunction}>Choose Another Topic</button>
        </>
    )
}

export default TopicContainer