import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styles.css'

const FormComp = ({ confirmPurchase, setFormVisibility, formVisibility }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        confirmPurchase(data);
    };

    const handleClose = () => {
        setFormVisibility(false);
    }

    return (
        <Modal show={formVisibility} onHide={handleClose} className="modal show"
        style={{ display: 'block', position: 'absolute' }}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar orden de compra</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <form onSubmit={handleSubmit(onSubmit)} className='formStyles'>

                    <label for="name">Nombre y Apellido:</label>
                    <input type="name" {...register("name", {
                        required: true,
                        minLength: 3
                    })} />
                    {errors?.name?.type === "required" && <p>Este campo es requerido</p>}
                    {errors?.name?.type === "minLength" && <p>El nombre debe superar los 3 caracteres.</p>}

                    <label for="email">Email:</label>
                    <input type="email" {...register("email", {
                        required: true,
                        minLength: 3
                    })} />
                    {errors?.email?.type === "required" && <p>Este campo es requerido.</p>}
                    {errors?.email?.type === "minLength" && <p>El email debe superar los 3 caracteres.</p>}

                    <label for="phonenumber">Número de télefono:</label>
                    <input type="number" {...register("phonenumber", {
                        required: true,
                        minLength: 10,
                        maxLength: 10
                    })} />
                    {errors?.phonenumber?.type === "minLength" && <p>El telefono debe tener 10 digitos.</p>}
                    {errors?.phonenumber?.type === "required" && <p>Este campo es requerido.</p>}
                    
                    <Button variant="success" type='submit'>Confirmar compra</Button>
                </form>
            </Modal.Body>
        </Modal >
    )
}

export default FormComp;