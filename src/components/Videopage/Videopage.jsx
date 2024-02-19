import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Return from '../../assets/img/timeset_retrun.svg'
import View from '../../assets/img/video_view.svg'
import { Watch } from "react-loader-spinner";

const Videopage = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    return (
        <div className='video_wrap'>
            {loading ? (
                <>
                    <button className='retrun_btn'>
                        <img src={Return} alt="return" className='return' />
                    </button>
                    <h2><strong>이승민</strong>님이<br /> 손틈새로 공부할 내용 </h2>
                    <div className='video'>
                        <div className="video_detail">
                            <div className="header">
                                <h3>경제/금융</h3>
                                <div>
                                    <img src={View} alt="view" />
                                    <p>13M</p>
                                </div>
                            </div>
                            <Link to='/videopage/1'>
                                <div className="video_box">
                                    <div>
                                        <p className='cate'>경제/금융</p>
                                        <h4>주식으로 돈 버는 방법</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="video_detail">
                            <div className="header">
                                <h3>경제/금융</h3>
                                <div>
                                    <img src={View} alt="view" />
                                    <p>13M</p>
                                </div>
                            </div>
                            <Link to='/videopage/2'>
                                <div className="video_box">
                                    <div>
                                        <p className='cate'>경제/금융</p>
                                        <h4>주식으로 돈 버는 방법</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="video_detail">
                            <div className="header">
                                <h3>경제/금융</h3>
                                <div>
                                    <img src={View} alt="view" />
                                    <p>13M</p>
                                </div>
                            </div>
                            <Link to='/videopage/3'>
                                <div className="video_box">
                                    <div>
                                        <p className='cate'>경제/금융</p>
                                        <h4>주식으로 돈 버는 방법</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <button className='choose'>확인</button>
                </>
            ) : (
                <div className='loading'>
                    <p className='text'>효율적인</p>
                    <h3>40분</h3>
                    <p><strong>알차게</strong> 구성 중</p>
                    <Watch
                        visible={true}
                        height="75"
                        width="75"
                        radius="48"
                        color="#FF6D6D"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )}

        </div>
    )
}

export default Videopage