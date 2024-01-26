"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () =>{
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) =>{
        event.preventDefault()
        // alert(searchRef.current.value)
        const keyword = searchRef.current.value
        if(!keyword) return
        router.push(`/search/${keyword}`)
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") return handleSearch(event)
    }

    return (
        <div className="relative">
            <input placeholder="cari anime ..." 
            className="w-full p-2 rounded"
            ref={searchRef} onKeyDown={handleKeyPress} ></input>
            <button className="absolute top-2 end-2" onClick={handleSearch} >
                <MagnifyingGlass size={24}/>
            </button>
        </div>
        
    )
}
export default InputSearch