import {useForm} from 'react-hook-form'
export function PagRegistro(){
    const {register,handleSubmit}=useForm()
    return (
        <div className="bg-gray-900 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit((values) => {
                console.log(values)
            }) }>
                <input type="text" {...register("nombre",{required:true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
                placeholder='Nombre'
                />
                <input type="email" {...register("email",{required:true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
                placeholder='Email'
                />
                <input type="password" {...register("password",{required:true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
                placeholder='Password'
                />
                <button type='submit' className='text-white bg-red-800 rounded-md my-2'>
                    Registrar
                </button>
            </form>
        </div>
    )
}