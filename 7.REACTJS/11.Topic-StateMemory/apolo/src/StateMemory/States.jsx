import React from 'react'
import { ImageList } from './data'
import { useState } from 'react';

const States = () => {

    // let index = 0;
    const [index, setIndex] = useState(0);

    function handleClickNext() {
        setIndex(index + 1)
    }

    function handleClickPrev() {
        setIndex(index - 1)
    }

    console.log(index);

    let Image = ImageList[index];

    return (
        <div>
            <div className="h-[500px] w-[500px] bg-slate-400 m-auto shadow-2xl p-10">
                <button className='h-6 w-20 bg-white' onClick={handleClickNext}>Next</button>
                <button className='h-6 ms-10 w-20 bg-white' onClick={handleClickPrev}>Prev</button>
                <div className=" ">
                    <h2>
                        <b>{Image.title}</b>
                    </h2>
                    <h3>
                        ({index + 1} of {ImageList.length})
                    </h3>
                    <img src={Image.url} alt="" />
                    <p>
                        {Image.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default States
