import React from 'react';

// Logo
import Logo from '/images/logo.svg';

import Slider from '../components/Slider/Slider';
import InstagramPage from '../components/InstagramPage/InstagramPage';

import './MainPage.css'


const MainPage = () => {
    return (
        <section className='main-page' dir='rtl'>
            <header className='main-page-header w-full h-[270px] md:h-[338px] xl:h-screen  flex-vr '>
                <div className='max-w-[250px] absolute top-16 text-center text-black flex-vr '>
                    <h1 className='text-[36px] font-[900] md:text-6xl'>
                        coffee <br />
                        shop
                    </h1>
                    <h3 className='text-[20px] font-[900] my-3 md:text-3xl'>
                        تجربه زیباترین لحظه‌ها با ما
                    </h3>
                    <img className='logo md:w-[220px] md:h-[220px]' src={Logo} alt="Logo" />
                </div>
            </header>
            <div className='main-page-body w-full h-auto p-8 md:p-14 pb-14 flex-vr text-white'>
                <div className='block top-32 text-right mt-4 mb-[69px]'>
                    <h2 className='mb-4 mt-32 md:text-2xl font-bold'>تفاوت نسل های قهوه، بین 1، 2 و 3</h2>
                    <p className='text-[15px] md:text-2xl'>
                        جهان ما قرن ها شاهد آمدن و رفتن نسل قهوه ها بوده است، اما چند دهه اخیر واقعاً دوره رشد و تکامل صنعت جهانی قهوه بوده است. در این مطلب، ما بر روی سه نسل قهوه و تفاوت نسل های قهوه که در چند سال اخیر تکامل یافته اند تمرکز خواهیم کرد. شما بدون شک با هر سه موج قهوه مواجه شده اید، اما ممکن است متوجه آن نشده باشید.این امواج قهوه با کیفیت دانه، روش ها و تعداد انگشت شماری از عناصر دیگر ارتباط دارند. با یادگیری در مورد آنها، می توانید به وضوح ببینید که قهوه چگونه در حال تکامل است و به کجا می رود. همچنین روش جدیدی برای برقراری ارتباط در مورد کیفیت یک قهوه روست شده یا کافه به دست خواهید آورد.
                    </p>
                </div>


                <div className='experience-bar-div block w-full mb-20 '>
                    <h3 className='md:text-2xl font-bold'>تجربه ما در ارائه خدمات به شما !</h3>
                    <div className='experience-bar-container w-full flex-vr items-start' dir='ltr'>
                        <div className="w-full max-w-[768px] flex-hz mb-4 mt-8 flex-hz justify-start">

                            <svg className='md:w-11 md:h-11' xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                <path d="M13.5 5.6875C13.5 5.6875 13.5 5.6875 14.5525 4.125C15.7699 2.31773 17.5831 1 19.75 1C23.2018 1 26 4.148 26 8.03125C26 9.47672 25.6124 10.8203 24.9475 11.9375C23.8264 13.8219 13.5 26 13.5 26M13.5 5.6875C13.5 5.6875 13.5 5.6875 12.4475 4.125C11.2301 2.31773 9.41696 1 7.25 1C3.79822 1 1 4.148 1 8.03125C1 9.47672 1.38769 10.8203 2.05246 11.9375C3.17367 13.8219 13.5 26 13.5 26" stroke="#FF0000" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <span className='relative w-full md:max-w-[80%] h-4 md:h-8 ml-2 md:ml-14 rounded-[20px] bg-white'></span>
                        </div>
                        <div className="w-full  max-w-[768px] flex-hz my-4 flex-hz">
                            <svg className='md:w-11 md:h-11' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M12 7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7V14H18C18.2652 14 18.5196 14.1054 18.7071 14.2929C18.8946 14.4804 19 14.7348 19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H13C12.7348 16 12.4804 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15V7ZM14 28C21.732 28 28 21.732 28 14C28 6.268 21.732 0 14 0C6.268 0 0 6.268 0 14C0 21.732 6.268 28 14 28ZM14 26C7.373 26 2 20.627 2 14C2 7.373 7.373 2 14 2C20.627 2 26 7.373 26 14C26 20.627 20.627 26 14 26Z" fill="white" />
                            </svg>

                            <span className='relative w-full  md:max-w-[80%] h-4 md:h-8 ml-2 md:ml-14 rounded-[20px] bg-white'></span>
                        </div>
                        <div className="w-full  max-w-[768px] flex-hz my-4 flex-hz">

                            <svg className='md:w-11 md:h-11' xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                <path d="M11 9.75348L19.1314 1.08211L21.3912 3.20122L20.3594 4.30157L20.4089 4.34797C20.6916 4.21181 20.9961 4.12953 21.3223 4.10114C21.6512 4.07001 21.9839 4.11193 22.3204 4.22688C22.6595 4.3391 22.9858 4.54216 23.2992 4.83605C23.7171 5.22791 24.0104 5.71128 24.1791 6.28618C24.3506 6.86365 24.3313 7.50137 24.1211 8.19935C23.9137 8.8999 23.4532 9.63065 22.7396 10.3916C22.0569 11.1197 21.3768 11.6162 20.6995 11.8813C20.0249 12.1489 19.3875 12.2225 18.7874 12.1021C18.19 11.9843 17.6659 11.714 17.215 11.2913C16.9181 11.0128 16.6977 10.7162 16.5539 10.4012C16.4153 10.0861 16.3419 9.76777 16.3335 9.44613C16.3304 9.12432 16.385 8.81542 16.4972 8.51942L16.4642 8.48849L13.2764 11.8881L11 9.75348ZM18.4014 6.32351C18.1139 6.63007 17.9048 6.93296 17.7741 7.23217C17.6486 7.53122 17.6024 7.81194 17.6354 8.07432C17.6736 8.33655 17.7972 8.56562 18.0062 8.76155C18.2151 8.95748 18.4476 9.06491 18.7037 9.08385C18.9651 9.10262 19.2382 9.03725 19.5231 8.88772C19.8133 8.73803 20.1047 8.50717 20.3973 8.19513C20.6899 7.8831 20.9003 7.57884 21.0285 7.28237C21.162 6.98573 21.2097 6.70896 21.1716 6.45205C21.1388 6.19498 21.018 5.96849 20.809 5.77256C20.6001 5.57663 20.3635 5.46799 20.0994 5.44664C19.8406 5.42513 19.5647 5.48792 19.2717 5.63503C18.9841 5.78198 18.694 6.01147 18.4014 6.32351Z" fill="white" />
                                <path d="M5.63726 0.754453L5.49381 0.5H5.2017H2.09943H1.22106L1.6695 1.25527L4.53818 6.08673L1.57377 10.9204L1.10682 11.6818H2H5.14205H5.43197L5.57599 11.4302L6.91193 9.09614L8.24787 11.4302L8.39189 11.6818H8.68182H11.8438H12.7429L12.2685 10.918L9.2673 6.08591L12.1536 1.25651L12.6058 0.5H11.7244H8.64205H8.35164L8.20774 0.752245L6.91427 3.01963L5.63726 0.754453Z" stroke="white" />
                            </svg>
                            <span className='relative w-full  md:max-w-[80%] h-4 md:h-8 ml-2 md:ml-14 rounded-[20px] bg-white'></span>
                        </div>

                    </div>
                </div>

                <div className='environment-slider w-full text-center flex-vr'>
                    <h2 className='text-sm font-black md:text-2xl md:font-bold'>محیط کافه</h2>
                    <h4 className='md:text-2xl md:mt-4 md:mb-10'>محیطی دلپذیر برای خدمت به شما عزیزان</h4>

                    <Slider />

                </div>

                <InstagramPage />

            </div>

        </section>

    );
};

export default MainPage;