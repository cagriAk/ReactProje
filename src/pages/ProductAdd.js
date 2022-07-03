import { Formik,Form,Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup"
import{Button, FormField, Label} from "semantic-ui-react"
import KodIoTextInput from '../utilities/customFormControls/KodIoTextInput'

export default function ProductAdd() {
  
    const  initialValues ={productName:"",unitPrice:""}
    const schema=Yup.object({
        productName:Yup.string().required("Ürün Adı Zorunlu"),
        unitPrice:Yup.number().required("Ürün Fiyatı Zorunludur")
    })
  
    return (
   
                <Formik 
                    initialValues={initialValues} 
                    validationSchema={schema}
                    onSubmit = {(values)=>{
                        console.log(values)
                    }}
                >  
                <Form className='ui form'>
                    <KodIoTextInput name="productName" placeholder="Ürün Adı"/>
                        <FormField>  
                            <Field name="productName" placeholder="Ürün Adı"></Field>
                            <ErrorMessage name='productName' render={error=>
                                   <Label pointing basic color='red' content={error}></Label> 
                            }></ErrorMessage>
                        </FormField>
                        <FormField>
                            <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                            <ErrorMessage name='unitPrice' render={error=>
                                   <Label pointing basic color='red' content={error}></Label> 
                            }></ErrorMessage>
                        </FormField>
                        <Button color="green" type="submit">Ekle</Button>
                 </Form>
                </Formik>

  )
}
