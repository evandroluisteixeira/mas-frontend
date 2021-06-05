import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {FiX} from 'react-icons/fi';
import { useForm } from 'react-hook-form'
import { Container, Error } from './styles'
import api from '../../services/api';

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseUnitId: string;
    name: string;
    grade: number;
    activy_date: Date
}

interface CourseUnit {
    id: string;
    name: string;
    description: string;
}


export function NewActivyModal({isOpen, onRequestClose}:NewActivyModalProps) {

    const [courseUnits, setCourseUnits] = useState<CourseUnit[]>([]);

    useEffect(() => {
        api.get('/courseunit')
            .then(response => setCourseUnits(response.data))
    },[])

    const { register, handleSubmit, formState: {errors} } = useForm<NewActivyModalData>();
    
    const onSubmit = handleSubmit(data => api.post('/activy', data)
        .then(onRequestClose));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20}/>
                </button>
                <form onSubmit={onSubmit}>
                    <select {...register("courseUnitId")}>
                        <option selected value="">Selecione a Unidade Curricular</option>
                        {courseUnits.map(courseUnit => {
                            return (
                                <option value={courseUnit.id}>{courseUnit.name}</option>
                            )
                        })}
                    </select>
                    {errors.courseUnitId && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input 
                        type="text"
                        placeholder="Atividade"
                        {...register("name")}
                    />
                    {errors.name && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input 
                        type="number"
                        step=".01"
                        placeholder="Nota da avaliação"
                        {...register("grade")}
                    />
                    {errors.grade && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input 
                        type="date"
                        placeholder="Data da atividade"
                        {...register("activy_date")}
                    />
                    {errors.activy_date && <Error>O prenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
        
    )
}