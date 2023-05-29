import { useForm} from 'react-hook-form'
import { Links } from './Links'
import { AlertDanger, SuccessAlert } from '../';
import axios from 'axios'
import { useState } from 'react';

export const Contact = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    interface IForm {
        Nombre?: string;
        Email?: string;
        Mensaje?: string;
        Telefono?: string;
    }

    const onSubmit = async (data: IForm) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('Nombre', String(data.Nombre));
        formData.append('Email', String(data.Email));
        formData.append('Mensaje', String(data.Mensaje));
        formData.append('Telefono', String(data.Telefono));

        try {
            const response = await axios.post(import.meta.env.VITE_API_FORM, formData)

            if(response.status === 200){
                setSuccessMessage(response.data)
            }

            reset()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }
    return (

        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <h4 className="max-w-xl text-lg text-center">
                            Contactanos a través de:
                        </h4>

                        <div className="mt-4 w-full flex items-center justify-center gap-2">
                            <Links/>
                        </div>

                        <div className="mt-4 w-full flex flex-col items-center justify-center gap-2">
                            <h4 className='text-center mb-2'>Estamos en Rodriguez Peña 1044 7<sup>o</sup> A, San Miguel, Buenos Aires!</h4>
                            <div className='w-full h-96'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.5918133852988!2d-58.707322671501416!3d-34.544255693651216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0ee88cfc77%3A0xa09df876db315413!2sRodr%C3%ADguez%20Pena%201044%2C%20B1663%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685321569346!5m2!1ses!2sar" className='w-full h-full' style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 font-patrick">
                        <h3 className='text-2xl text-center mb-4'>Dejanos tu mensaje!</h3>
                        {successMessage && <SuccessAlert message={successMessage}/>}
                        <form
                        onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nombre</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                    placeholder="Nombre"
                                    type="text"
                                    {...register('Nombre',{
                                        required: 'Este campo es obligatorio',
                                        pattern: {
                                            value: /^[A-Za-záéíñöáéíñöáéíñöáéíñöáéíñöáéíñö�]+$/i,
                                            message: 'Solo se permiten letras'
                                        }
                                    })}
                                />
                                {
                                    errors.Nombre && <AlertDanger message={String(errors.Nombre.message)}/>
                                }
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                        placeholder="Email"
                                        type="email"
                                        {...register('Email',{
                                            required: 'Este campo es obligatorio',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email invalido',
                                            }
                                        }
                                        )}
                                    />
                                    {
                                        errors.Email && <AlertDanger message={String(errors.Email.message)}/>
                                    }
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                        placeholder="Teléfono"
                                        type="tel"
                                        {...register('Telefono',{
                                            required: 'Este campo es obligatorio',
                                            pattern: {
                                                value: /^((\+|00)54|0)?(9)?(\d{2})?\d{8}$/,
                                                message: 'Solo se permiten números',
                                            }
                                        })}
                                    />
                                    {
                                        errors.Telefono && <AlertDanger message={String(errors.Telefono.message)}/>
                                    }
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Mensaje</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                    placeholder="Mensaje"
                                    rows={8}
                                    {...register('Mensaje',{
                                        required: 'Este campo es obligatorio',
                                        minLength: {
                                            value: 10,
                                            message: 'Ingresa al menos 10 caracteres'
                                        }
                                    })}
                                ></textarea>
                                {
                                    errors.Mensaje && <AlertDanger message={String(errors.Mensaje.message)}/>
                                }
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg 
                                    bg-secondary-100 px-5 py-3 font-medium 
                                    text-white sm:w-auto"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Enviando...' : 'Enviar!'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
