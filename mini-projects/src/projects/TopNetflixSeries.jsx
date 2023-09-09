import React from 'react'

const netflixSeries = [
    {
        title: "One Piece",
        imgsrc: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/one-piece-featured-image.jpg?q=50&fit=crop&w=1500&dpr=1.5",
        link: "https://www.netflix.com/in/title/80217863"
    },
    {
        title: "Predators",
        imgsrc: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/09/predators-netflix.jpeg?q=50&fit=crop&w=1500&dpr=1.5",
        link: "https://www.netflix.com/in/title/81319177"
    },
    {
        title: "Who Is Erin Carter?",
        imgsrc: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/08/who-is-erin-carter.jpeg?q=50&fit=crop&w=1500&dpr=1.5",
        link: "https://www.netflix.com/in/title/81476887"
    },
    {
        title: "Live to 100: Secrets of the Blue Zones",
        imgsrc: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/09/live-to-100-netflix.jpeg?q=50&fit=crop&w=1500&dpr=1.5",
        link: "https://www.netflix.com/in/title/81214929"
    },
    {
        title: "Painkiller",
        imgsrc: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/08/painkiller-matthew-broderick-featured.jpg?q=50&fit=crop&w=1500&dpr=1.5",
        link: "https://www.netflix.com/in/title/81095069"
    }
]

function TopNetflixSeries({setDetails}) {
    console.log(setDetails.link);
    return (
        <>
            <div className=' w-[350px] h-[420px] rounded-lg overflow-hidden shadow-inner shadow-black hover:shadow-2xl transition ease-in-out delay-150'>
                <img className=' h-2/3' src={setDetails.imgsrc} alt="" />
                <div className=' h-2/6 p-2 pt-4 pl-4 bg-white'>
                    <span className=' font-semibold text-gray-500 text-sm'>A NETFLIX ORIGINAL SERIES</span>
                    <h3 className=' my-2 font-bold text-xl'>{setDetails.title}</h3>
                    <a href={setDetails.link} target=' _blank'>
                        <button className=' p-1 border-2 border-black font-bold'>Watch now</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default TopNetflixSeries
export {netflixSeries}