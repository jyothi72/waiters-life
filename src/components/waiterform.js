import React, { useState } from 'react'
import classes from './waiterform.module.css'
const Waiterform=(props)=>{
    const [idi,setid]=useState('')
    const [amount,setamount]=useState('')
    const [dish,setdish]=useState('')
    const [table,settable]=useState('')
  

    const idhandler=(event)=>{
        setid(event.target.value)
    }
    const amounthandler=(event)=>{
        setamount(event.target.value)
    }
    const dishhandler=(event)=>{
        setdish(event.target.value)
    }
    const tablehandler=(event)=>{
        settable(event.target.value)
    }
    const submithandler=(event)=>{
        event.preventDefault()
        let ordered={
            idi:idi,
            amount:amount,
            dish:dish,
            table:table
        }
        props.onorder(ordered)
    }


    
  return (
    <div className={classes.login}>
        <form onSubmit={submithandler}>
        <label htmlFor='unique'>Unique order no</label>
        <input id='unique' type='number' onChange={idhandler} value={idi}/>
        <label htmlFor='amount'>Enter amount</label>
        <input id='amount' type='number' onChange={amounthandler} value={amount}/>
        <label htmlFor='dish'>Select dish</label>
        <input id='dish' type='text' onChange={dishhandler} value={dish}/>
        <select name='select table' onChange={tablehandler} value={table}>
            <option>Table1</option>
            <option>Table2</option>
            <option>Table3</option>
            </select>
            <div className={classes.actions}>
            <button>Add to bill</button>
            </div>
            </form>
        </div>
        
  )
}
export default Waiterform