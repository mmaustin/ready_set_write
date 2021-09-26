import React, { Component } from 'react';
import { connect } from "react-redux";

class DisplayComponent extends Component{
    render(){
        return (
            <div>
                {this.props.stated}
            </div>
        )
    }
}

const mapStateToProps = state => ({ stated: state.words })

export default connect(mapStateToProps)(DisplayComponent);