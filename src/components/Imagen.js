import { dragOverHandler, dropHandler } from '@/lib/drag-drop'

function Imagen({ children, img }) {
    return (
        <form id="preview" >
            <img
                id='imgPreview'
                src={img}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                style={{
                    display: 'block',
                    aspectRatio: 1,
                    width: '400px',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} />

            {children}
        </form>

    )
}

export default Imagen