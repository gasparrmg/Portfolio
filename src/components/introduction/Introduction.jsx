import "./introduction.css"
import { NextSection } from "../next-section/NextSection";
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Introduction() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Mobile", "Web"],
            typeSpeed: 200,
            backDelay: 2000
        })
    }, [])

    return (
        <div className='introduction'>
            <div className="content">
                <h2>Hey there, I'm</h2>
                <h1>Rafael</h1>
                <h2>and I’m a <span ref={textRef}></span> Developer </h2>
                <p>I’m an engineer from Lisbon with a Master’s degree in Informatics that has a special fond for Mobile and Web Development.</p>
            </div>
            <NextSection text="Work Experience" link="#work"/>
        </div>
    )
}
