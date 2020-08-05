import React, {useState} from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'
     
import './styles.css';



function TeacherForm(){

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: '0', from: '', to: ''},
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: '0',
                from: '8:00 AM', 
                to: '4:00 PM'
            }
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição."
            />
            
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação Fisica', label: 'Educação Fisica'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Portugues', label: 'Portugues'},
                            {value: 'Química', label: 'Química'},
                        ]}
                    />
                    <Input name="cont" label="Custo da sua Aula por hora"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponívies
                        <button type="button">+ Novo horário</button>
                        
                    </legend>

                   {scheduleItems.map(scheduleItem =>(
                        <div className="schedule-item">
                        <Select 
                            name="subject" 
                            label="Matéria"
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado'},
                            ]}
                        />
                        <Input name="from" label="Das" type="time"></Input>
                        <Input name="to" label="Até" type="time"></Input>
                    </div>
                   ))}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>

        
    )
}

export default TeacherForm;