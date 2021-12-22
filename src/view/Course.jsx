import React from 'react'
import { useParams } from 'react-router-dom'

export default function Course() {
    const params = useParams();
    return (
        <div>
            Course {params.id}
        </div>
    )
}
