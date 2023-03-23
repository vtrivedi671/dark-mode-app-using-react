import React ,{useState,useMemo} from 'react';

const Memo=()=>{
    const [count,setCount]=useState(0)
    
    const double=useMemo(()=>{
        for(let i=0;i<1000000;i++){
            return 2*count;
        }
    })
    
    return(
        <>
        <h1>Using Memo hooks</h1>
        <p>
            this is use Memo Counter botton
            <input type="number"value={count}onChange={(event)=>
                setCount(event.target.value)}/><br/>

        
        </p>
        </>
    )
}
export default Memo;