import React, { useEffect, useState } from 'react'
import styles from './CardList.module.css'
import Card from '../card/Card.jsx'
import { data } from 'react-router-dom';

//const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVhYWNhZWZhLTJjMzEtNGI0OC1hZTc3LThmZWY1NTNlODZmMiIsImlhdCI6MTc3Nzk5NjM3OSwic3ViIjoiZGV2ZWxvcGVyLzk3YjYwOTIwLTM4MzAtN2IwYi02M2QxLTA4MjQ5NTM0YzRhZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNjMuMTM0LjQyIiwiMTc3LjEzOS4yNDUuMTE2Il0sInR5cGUiOiJjbGllbnQifV19.3Ppf314m57pbNSXISQGVVPqBgjKOFF2DQD2nJxmlXCeNlrtpmGbcKMJwvxEmSTQyiLfb_9s6kB9S4mhYlRbeCg";


export default function CardList({ selectedFilter }) {
    const renderCount = 6
    const [content, setContent] = useState([]);
    const [render, setRender] = useState(renderCount)
    const [loading, setLoading] = useState(true)

    const renderMore = () => {
        setRender(render + renderCount)
    }
    useEffect(() => {
        try {
            const responseFetch = fetch('https://valorant-api.com/v1/agents?language=pt-BR', {
                method: 'GET',
                headers: {
                    //'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setContent(data)
                    setLoading(false)
                })

        } catch (error) {
            console.log('Erro na requisão', error)
            setLoading(false)
        }
    }, [])

    const convertType = (value) => {
        if(value === "true"){
            return true
        } else{
            return false
        }
    }

    const filters = selectedFilter.map((item) => {
        const [field, value] = item.split('::')
        console.log(field, value)
        const filteredList = content.data.filter(agent => {
            return agent[field] === convertType(value)
        })
        console.log("lista filtrada", filteredList, field)
        console.log(content.data)
    })

    // const filteredList = content.data.filter(agent => {
    //     return agent.isFullPortraitRightFacing === true
    // })

    if (loading) {
        return (<p className='loading'><strong>Carregando...</strong></p>)
    }
    //console.log(content.data)
    if (content.length < 1 || !content?.data || content.data.length === 0) {
        return (<p><strong>Agentes não encontrados</strong></p>)
    }

    return (
        <div className={styles.list}>
            <div className={styles.grid}>
                {content.data.slice(0, render).map((item, index) =>
                    <Card
                        key={index}
                        uuid={item.uuid}
                        img={item.fullPortrait}
                        name={item.displayName}
                        role={item.role?.displayName}
                        roleIcon={item.role?.displayIcon}
                    />
                )}

            </div>
            {render < content.data.length ? (
                <button onClick={renderMore} className={styles.btn}>Ver mais</button>
            ) : <p className={styles.msgRender}>Todos os agentes foram carregados</p>}
        </div>
    )
}