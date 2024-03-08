import logotipo from '../assets/logotipo.png'
import ItemsContainer from '../components/config/ItemsContainer'

export const Footer = () => {
    return (
        <footer className='bg-primary footer'>
            <div className='flex md:justify-between md:items-center sm:px-12 px-4 bg-wallpaper/5 py-7'>
                <img
                    src={logotipo}
                    className='w-12 h-12 mb-5 '
                    alt=""
                />

                <h1 className='text-white font-tertiary font-bold pl-10 text-5xl items-end'>
                    Hagwoon School Colombia
                </h1>

            </div>

            {/* <SocialIcon Icons={ICONS} /> */}
            {/* tiktok
                youtube
                twitch
                Instagram
                Facebook 
                Discord*/}


            {/* //items container */}
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-white text-sm pb-10'>
                <span>© 2024 <strong>Hagwon School Colombia <br /></strong> All rights reserved.</span>
                <span>Terms Privacy Policy.</span>

            </div>



        </footer>
    )
}
