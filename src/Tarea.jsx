import './tarea.css'
export function Tarea({tar}){

    return <div className='estilo'>
        <h1>Primera Tarea</h1>
        <nav style={tar ? {background:'green',color:'beige'}:{background:'red',color:'white'}} >{tar ? 'Tarea Realizada':'Tarea Pendiente'}</nav>
        {/* para sushi crear componente */}
    </div>
}