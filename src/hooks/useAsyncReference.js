import {useState, useRef} from 'react'


function useAsyncReference(value) 
{   
   const ref = useRef(value);   
   const [, forceRender] = useState(false);    
   const updateState = (newState) => 
   {     
      ref.current = newState;     
      forceRender(s => !s);   
   }    
return [ref, updateState]; 
}

export default useAsyncReference
