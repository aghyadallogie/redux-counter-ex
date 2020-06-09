import React from 'react';
import { connect } from 'react-redux';
import {increaseX} from '../actions';

const Xcounter = (props) => {
    return (
        <div>
            x = {props.clicksX}
            <button onClick={props.increaseX}>increaseX</button>
        </div>
    )
}

const mapsStateToProps = state => state;
export default connect(mapsStateToProps, {increaseX})(Xcounter);