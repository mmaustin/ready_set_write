import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findSentence} from '../actions/sentenceActions'

class SingleSentence extends Component {
    

    render(){
        return(
            <>
                <button onClick={() => this.props.findSentence(this.props.findId)}>Get Sentence</button>
            </>
        )
    }
    
}

function mapStateToProps(state){
    return state;
  };

export default connect(mapStateToProps, {findSentence})(SingleSentence)