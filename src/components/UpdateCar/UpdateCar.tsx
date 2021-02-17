import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css'

type Inputs = {
    color: string,
    make: string,
    model: string,
    price: number
}

export const UpdateCar = () => {

    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.car_id,data)
    }
    return (
        <Container>
            <h1>Update your Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="color">Car Color</label>
                <input type="text" name="color" id="color" placeholder="Add Car Color" ref={register}/>
                
                <label htmlFor="make">Car Make</label>
                <input type="text" name="make" id="make" placeholder="Add Car Make" ref={register}/>
                
                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Add Car Model" ref={register}/>
                
                <label htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Add Car Price" ref={register}/>

                <button type="submit" className="button-styles">Submit</button>
            </form>
        </Container>
    )
}