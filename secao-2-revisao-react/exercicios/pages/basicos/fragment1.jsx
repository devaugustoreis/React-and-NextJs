import React from 'react'

export default function fragment() {
    return (
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    )
}

// React Fragment encapsula os elementos sem criar um elemento na DOM.