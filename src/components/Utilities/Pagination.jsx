const Pagination = ({page, lastPage, setPage}) =>{
   //scroll to top
   const scrollTop = () =>{
        scrollTo({
            behavior: "smooth",
            top: 0
        })
   } 
   
    //handling ketika next page
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    //handling ketika prev page
    const handlePrevPage = () => {
        if(page > 1){
            setPage((prevState) => prevState - 1)
            scrollTop()
        }
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
        </div>
    )
}

export default Pagination