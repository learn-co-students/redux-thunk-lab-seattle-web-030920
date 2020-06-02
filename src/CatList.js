// write your CatList component here
import React from 'react'

const CatList = props => {
    const renderImgs = () => {
        return props.catPics.map((pic, ind) => <img key={ind} src={pic.url} alt="cat_pic" width="500px" />)
    }

    return <div>{renderImgs()}</div>
}

export default CatList
