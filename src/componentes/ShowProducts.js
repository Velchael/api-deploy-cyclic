import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';
import '../Apprutas.css';
const ShowProducts = () => {
    const url='http://apialunonu.run/index.php';
    const [aluno,setAluno]= useState([]);
    const [id,setId]= useState('');
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [curso,setCurso]= useState('');
    const [telefono,setTelefono]= useState('');
    const [operation,setOperation]= useState(1);
    const [title,setTitle]= useState('');

    useEffect( ()=>{
        getAluno();
    },[]);

    const getAluno = async () => {
        const respuesta = await axios.get(url);
        setAluno(respuesta.data);
    }
    const openModal = (op,id, name, email, curso, telefono) =>{
        setId('');
        setName('');
        setEmail('');
        setCurso('');
        setTelefono('');
        setOperation(op);
        if(op === 1){
            setTitle('Registrar Aluno');
        }
        else if(op === 2){
            setTitle('Editar Aluno');
            setId(id);
            setName(name);
            setEmail(email);
            setCurso(curso);
            setTelefono(telefono)
        }
        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }
    const validar = () => {
        var parametros;
        var metodo;
        if(name.trim() === ''){
            show_alerta('Escribe el nombre do aluno','warning');
        }
        else if(email.trim() === ''){
            show_alerta('Escribe o email do aluno','warning');
        }
        else if(curso === ''){
            show_alerta('Escribe o curso do aluno','warning');
        }
        else if(telefono === ''){
            show_alerta('Escribe o telefone do aluno','warning');
        }
        else{
            if(operation === 1){
                parametros= {name:name.trim(),email:email.trim(),curso:curso,telefono:telefono};
                metodo= 'POST';
            }
            else{
                parametros={id:id,name:name.trim(),email:email.trim(),curso:curso,telefono:telefono};
                metodo= 'PUT';
            }
            envarSolicitud(metodo,parametros);
        }
    }
    const envarSolicitud = async(metodo,parametros) => {
        await axios({ method:metodo, url: url, data:parametros}).then(function(respuesta){
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj,tipo);
            if(tipo === 'success'){
                document.getElementById('btnCerrar').click();
                getAluno();
            }
        })
        .catch(function(error){
            show_alerta('Error en la solicitud','error');
            console.log(error);
        });
    }
    const deleteAluno= (id,name) =>{
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title:'¿Seguro de eliminar el aluno '+name+' ?',
            icon: 'question',text:'No se podrá dar marcha atrás',
            showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
        }).then((result) =>{
            if(result.isConfirmed){
                setId(id);
                envarSolicitud('DELETE',{id:id});
            }
            else{
                show_alerta('O aluno NO fue eliminado','info');
            }
        });
    }

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                        <button onClick={()=> openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead className="fondocrud">
                                <tr><th>#</th><th>ALUNO</th><th>EMAIL</th><th>CURSO</th><th>TELEFONE</th><th></th></tr>
                            </thead>
                            
                            <tbody className="fondocrud">
                                
                                {aluno.map( (aluno,i)=>(
                                    <tr key={aluno.id}>
                                        <td>{(i+1)}</td>
                                        <td>{aluno.name}</td>
                                        <td>{aluno.email}</td>
                                        <td>{aluno.curso}</td>
                                        <td>{aluno.telefono}</td>
                                        <td>
                                            <button onClick={() => openModal(2,aluno.id,aluno.name,aluno.email,aluno.curso,aluno.telefono)}
                                                 className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                <i className='fa-solid fa-edit'></i>
                                            </button>
                                            &nbsp; 
                                            <button onClick={()=>deleteAluno(aluno.id,aluno.name)} className='btn btn-danger'>
                                                <i className='fa-solid fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                
                                ))
                                }
                                 
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id='modalProducts' className='modal fade' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{title}</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <input type='hidden' id='id'></input>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                            <input type='text' id='nombre' className='form-control' placeholder='Nombre' value={name}
                            onChange={(e)=> setName(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                            <input type='text' id='email' className='form-control' placeholder='Email' value={email}
                            onChange={(e)=> setEmail(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                            <input type='text' id='curso' className='form-control' placeholder='Curso' value={curso}
                            onChange={(e)=> setCurso(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                            <input type='text' id='telefono' className='form-control' placeholder='Telefono' value={telefono}
                            onChange={(e)=> setTelefono(e.target.value)}></input>
                        </div>
                        <div className='d-grid col-6 mx-auto'>
                            <button onClick={() => validar()} className='btn btn-success'>
                                <i className='fa-solid fa-floppy-disk'></i> Guardar
                            </button>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProducts