import React from 'react'
import useFireStore from '../hooks/useFireStore'
export const ImageGrid = () => {
    const {docs} =useFireStore('images');
    console.log(docs);
    return (
        <div className="img-grid">
            
        </div>
    )
}
export default ImageGrid;