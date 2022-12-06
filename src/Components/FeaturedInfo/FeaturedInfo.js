import React, { useEffect, useState } from 'react';
import './FeaturedInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { adminHomePageApi } from '../../api/api';

const FeaturedInfo = () => {
    const [state, setState] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await adminHomePageApi();
            if (response?.data.revenue) {
                setState(response);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
       console.log("STATE",state);
    }, [state]);
    return (
        <div className="featured">
            <div className="featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Revenue</div>
                <div className="featured__money__container">
                    <span className="featured__money">${state.data?.revenue}</span>
                    <span className="featuredMoneyRate">{Math.round (state.data?.revenue_P)}% 
                    {
                        state.data?.revenue_P > 0 ?<span className="upArrow"><ArrowUpwardIcon style={{color:'green'}} /></span>:<span className="upArrow"><ArrowDownwardIcon style={{color:'red'}}/></span>
                    }
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>
            </div>
            <div className="featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Sales</div>
                <div className="featured__money__container">
                    <span className="featured__money">${state.data?.sales}</span>
                    <span className="featuredMoneyRate">{Math.round (state.data?.sales_P)}% 
                    {
                        state.data?.sales_P > 0 ?<span className="upArrow"><ArrowUpwardIcon style={{color:'green'}} /></span>:<span className="upArrow"><ArrowDownwardIcon style={{color:'red'}}/></span>
                    }
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>
            </div>
            <div className="featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Cost</div>
                <div className="featured__money__container">
                    <span className="featured__money">${state.data?.cost}</span>
                    <span className="featuredMoneyRate">{Math.round (state.data?.cost_P)}%
                        {
                            state.data?.cost_P > 0 ?<span className="upArrow"><ArrowUpwardIcon style={{color:'green'}} /></span>:<span className="upArrow"><ArrowDownwardIcon style={{color:'red'}}/></span>
                        }
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;