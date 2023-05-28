
import { Links } from './Links'

export const Contact = () => {
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

                        <div className="mt-4 w-full flex items-center justify-center gap-2">
                            <p className='text-center'>Ó a través de nuestro formulario de contacto</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Nombre</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                    placeholder="Nombre"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                        placeholder="Teléfono"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Mensaje</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-secondary-100"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-secondary-100 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Enviar!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
