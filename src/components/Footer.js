import React from 'react'
import { useForm } from 'react-hook-form';

function Footer() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <footer>
            <section className="container-footer">
                <form className="button-submit" onSubmit={handleSubmit(onSubmit)}>
                    <button name="button" type="submit" >Order Now</button>
                </form>
            </section>
        </footer>
    )

}

export default Footer