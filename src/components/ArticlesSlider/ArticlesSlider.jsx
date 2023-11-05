import React from 'react';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles
import './ArticlesSlider.css'

const ArticlesSlider = () => {


    const articles = [
        {
            "id": 1,
            "url": "/images/Article-pic3.png",
            "articleName": "درباره قهوه",
            "text": "جهان ما قرن ها شاهد آمدن و رفتن نسل قهوه ها بوده است، اما چند دهه اخیر واقعاً دوره رشد و تکامل صنعت جهانی قهوه بوده است.        "
        },
        {
            "id": 2,
            "url": "/images/Article-pic1.png",
            "articleName": "درباره قهوه",
            "text": "جهان ما قرن ها شاهد آمدن و رفتن نسل قهوه ها بوده است، اما چند دهه اخیر واقعاً دوره رشد و تکامل صنعت جهانی قهوه بوده است.        "
        },
        {
            "id": 3,
            "url": "/images/Article-pic2.png",
            "articleName": "درباره قهوه",
            "text": "جهان ما قرن ها شاهد آمدن و رفتن نسل قهوه ها بوده است، اما چند دهه اخیر واقعاً دوره رشد و تکامل صنعت جهانی قهوه بوده است.        "
        },
    ]

    return (
        <div className='w-full max-w-7xl'>
            <div className='flex-hz'>
                <h2 className='my-5 ml-[5px] font-black text-sm'>درباره قهوه</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M11.5774 0.000152973C10.9992 0.00413025 10.4284 0.0852154 9.8744 0.248605C9.32474 0.410903 8.81839 0.64614 8.35885 0.945719C8.86091 2.20446 10.1426 3.8023 11.6273 5.16632C13.1774 6.59057 14.9548 7.80062 16.1027 8.34634L16.1162 8.35276L16.1294 8.35937C17.1842 8.89405 17.931 9.73557 18.362 10.6639C18.6397 11.2616 18.8014 11.8877 18.8956 12.5242C19.7409 11.8737 20.6319 11.3528 21.5377 10.9748C21.4688 9.80023 21.2069 8.56856 20.7299 7.33528C19.7295 4.74877 17.9823 2.66647 16.0035 1.39656C14.5812 0.483841 13.055 -0.00998267 11.5774 0.000152973ZM6.60956 2.714C6.27713 3.22297 6.00452 3.79044 5.79737 4.40672C5.10559 6.46426 5.1617 9.04526 6.16212 11.6319C6.76756 13.1973 7.64691 14.5777 8.68543 15.7054C9.70854 16.0074 10.7205 16.474 11.671 17.1072C12.4054 17.5965 13.0599 18.1565 13.627 18.7656C13.8122 18.81 13.9973 18.8478 14.1823 18.8776C14.5347 17.9707 14.9921 17.0683 15.5557 16.1929C15.8968 15.6629 16.2705 15.1539 16.6747 14.6689C16.6793 14.3359 16.6766 14.0131 16.6605 13.705C16.617 12.8717 16.4818 12.159 16.234 11.6257C15.9865 11.0923 15.6638 10.7198 15.0598 10.4136L15.0865 10.4266C13.599 9.71934 11.7416 8.42692 10.0321 6.85634C8.67321 5.60799 7.41266 4.20972 6.60956 2.714ZM24.7982 11.4207C23.92 11.4278 22.991 11.629 22.0511 12.014C20.046 12.8352 18.0327 14.4998 16.5435 16.8122C15.7817 17.9952 15.2343 19.2287 14.8939 20.4381C16.23 22.6499 16.5581 25.1904 15.5956 27.3241C15.7512 27.5434 15.9249 27.7496 16.1149 27.9407C17.5221 26.7428 19.1439 25.7505 20.2965 24.7315C20.9265 24.1746 21.4035 23.6233 21.6686 23.0982C21.9337 22.573 22.0249 22.0912 21.8871 21.4352L21.879 21.3971L21.8737 21.3586C21.3501 17.619 22.2687 15.4214 23.6073 14.077C24.6837 12.996 25.7552 12.4267 26.4944 11.6751C25.9603 11.4999 25.3909 11.4159 24.7982 11.4207ZM28.4877 12.9573C27.4064 14.2833 26.0734 14.8957 25.2769 15.6956C24.3618 16.6147 23.73 17.7211 24.1902 21.0267C24.4117 22.1506 24.217 23.23 23.7638 24.1278C23.3024 25.0417 22.6123 25.7849 21.8585 26.4514C20.7133 27.4638 19.3924 28.3308 18.2873 29.1765C19.5405 29.4977 20.9673 29.3423 22.4201 28.7472C24.4253 27.926 26.4387 26.2614 27.9277 23.949C29.417 21.6365 30.0889 19.1309 29.9906 16.9911C29.9154 15.3546 29.4032 13.9524 28.4877 12.9574L28.4877 12.9573ZM24.1902 21.0267C24.1863 21.0065 24.1831 20.9864 24.1789 20.9662L24.1924 21.0427C24.1918 21.0374 24.191 21.032 24.1902 21.0267H24.1902ZM5.9709 16.4449C4.77569 16.4342 3.64979 16.6928 2.70217 17.2023C2.70867 17.2025 2.71433 17.2029 2.72083 17.2031C3.28193 17.2227 3.98632 17.1574 4.79734 17.2666C5.6083 17.3759 6.55833 17.7393 7.278 18.5427C7.99774 19.3462 8.49122 20.4852 8.83497 22.121L8.8431 22.1591L8.84843 22.1977C9.00791 23.3391 9.74475 23.9994 11.0222 24.6176C12.1122 25.1451 13.5115 25.5218 14.8398 25.9053C15.4347 23.2751 14.0232 20.0673 11.0162 18.0642C9.39476 16.9842 7.61746 16.4595 5.97103 16.4449H5.9709ZM0.699451 19.1037C-0.943529 21.8961 0.374106 25.9937 3.95719 28.3805C7.48274 30.729 11.7453 30.451 13.7969 28.0148C12.5982 27.6778 11.2394 27.2951 9.99143 26.6912C8.38225 25.9124 6.8485 24.6037 6.53902 22.5713C6.2443 21.1793 5.85049 20.4364 5.52411 20.0721C5.19642 19.706 4.9409 19.6169 4.48058 19.555C4.02026 19.4929 3.38765 19.5373 2.63845 19.5112C2.0546 19.4909 1.36958 19.4082 0.699451 19.1037V19.1037ZM6.53909 22.5713C6.54052 22.5777 6.54195 22.5836 6.54331 22.5901L6.52985 22.5133C6.53258 22.5329 6.53616 22.5518 6.53915 22.5713L6.53909 22.5713Z" fill="#D8602B" />
                </svg>
            </div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                initialSlide={3}
                className="articles-swiper my-14"
            >
                {
                    articles.map(article =>

                        <SwiperSlide className='w-[180px] h-[180px] bg-primary-orange text-center p-5 rounded-[10px] flex-vr!important'>
                            <img className='w-[90px] h-[85px]' src={article.url} alt="coffee-Article" />
                            <h3 className='mt-[10px]'>{article.articleName}</h3>
                            <p className='text-[8px]'>
                                {article.text}
                            </p>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default ArticlesSlider;