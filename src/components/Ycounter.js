import React from 'react'
import { connect } from 'react-redux'
import {increaseY} from '../actions';

const Ycounter = (props) => {
    return (
        <div>
            y = {props.clicksY}
            <button onClick={props.increaseY}>increaseY</button>
        </div>
    )
}

const mapsStateToProps = state => state;
export default connect(mapsStateToProps, {increaseY})(Ycounter);