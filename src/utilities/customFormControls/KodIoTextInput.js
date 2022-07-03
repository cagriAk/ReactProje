import { useField } from 'formik'
import React from 'react'

export default function KodIoTextInput({...props}) {
    
  //  console.log(props)
    const [field,meta] = useField(props)
    
    return (
    
    <div>KodIoTextInput</div>
  )
}
