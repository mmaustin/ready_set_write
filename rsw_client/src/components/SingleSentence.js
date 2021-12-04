import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findSentence} from '../actions/sentenceActions'

class SingleSentence extends Component {
    

    render(){
        let a = this.props.state.sentences.text
        return(
            <>
                <button>Get Sentence</button>
                <p>
                    {a}
                </p>
            </>
        )
    }
    
}

function mapStateToProps(state){
    return state;
  };

export default connect(mapStateToProps, {findSentence})(SingleSentence)