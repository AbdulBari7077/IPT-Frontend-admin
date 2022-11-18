import React from 'react';
import './FeaturedInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo =()=>{
    return (
        <div className = "featured">
            <div className = "featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Revenue</div>
                <div className = "featured__money__container">
                    <span className = "featured__money">$1,200</span>
                    <span className = "featuredMoneyRate">-0.8% <span className = "downArrow"><ArrowDownwardIcon/></span></span>
                </div>
                <span className = "featured__sub">Compared to last month</span>
            </div>
            <div className = "featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Sales</div>
                <div className = "featured__money__container">
                    <span className = "featured__money">$315</span>
                    <span className = "featuredMoneyRate">-2% <span className = "downArrow"><ArrowDownwardIcon/></span></span>
                </div>
                <span className = "featured__sub">Compared to last month</span>
            </div>
            <div className = "featured__item">
                <div className="red__bar"></div>
                <div className="featured__title">Cost</div>
                <div className = "featured__money__container">
                    <span className = "featured__money">$2,415</span>
                    <span className = "featuredMoneyRate">+1.2% <span className = "upArrow"><ArrowUpwardIcon/></span></span>
                </div>
                <span className = "featured__sub">Compared to last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;