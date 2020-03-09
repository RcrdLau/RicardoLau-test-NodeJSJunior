import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const CheckBox = ({msgg}) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    const [check1, setCheck1] = useState(false)
    const checkChange1 = (e) => {
        if (check1 === true) {
            setCheck1(false)
        } else {
            setCheck1(true)
        }
    }

    return (
        <div className="cb" >
            <label className="container-checkbox">{msgg}
                <input 
                    type="checkbox" 
                    checked={check1} 
                    name="checkbox" 
                    ref={register}
                    onClick={checkChange1}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}


export default CheckBox
