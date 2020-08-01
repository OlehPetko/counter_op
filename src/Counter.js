import React from 'react'

const Counter = (props) => {
    return(
        <div className='counter'>
            Counter {props.index+1}
            <button className='button' onClick={()=>props.minus(props.index)}>-</button>
            <button className='button'>{props.count}</button>
            <button className='button' onClick={()=>props.plus(props.index)}>+</button>
            <button className='button' onClick={()=>props.reseteCounter(props.index)}>RESET COUNTER</button>
            <button className='button' onClick={() =>props.deleteCounter(props.index)}>DELETE COUNTER</button>

        </div>
    )

}
export default Counter