import React, {Component} from 'react'
import {connect} from 'react-redux'
import {findSentence} from '../actions/sentenceActions'

class SingleSentence extends Component {
    

    render(){
        return(
            <>

            </>
        )
    }
    
}

function mapStateToProps(state){
    return state;
  };

export default connect(mapStateToProps, {findSentence})(SingleSentence)