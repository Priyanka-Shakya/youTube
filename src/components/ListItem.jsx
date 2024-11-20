import React from 'react'


const ListItem = () => {
    const categories = [
        "All", "Music", "React routers", "Computer programming", "Reverberation", "Movie musicals",
        "India national cricket team", "News", "Mixes", "1990s", "Telugu cinema", "Live", "Dramedy",
        "Dubbing", "Indian soap opera", "Cricket", "Football", "Learn Coding"
    ]
    return (
        <div className='flex overflow-x-scroll hide-scroll-bar px-4 hide-scrollbar hide-scrollbar::-webkit-scrollbar'>
            <div className='flex space-x-4 flex-nowrap'>
                {
                    categories.map((category) => {
                        return (
                            <div
                                key={category}
                                className='flex-none mb-4 bg-gray-200 hover:bg-gray-300  duration-300 rounded-xl px-4 font-medium  text-gray-700 py-2 cursor-pointer'>
                                {category}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListItem

