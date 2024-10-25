import React from 'react';

interface CardcaseProps {
    children: React.ReactNode;
    cardTitle: string;
    cardBtntext?: string;
    cardBtnLink?: string;
}

const Cardcase: React.FC<CardcaseProps> = ({ children, cardTitle, cardBtntext, cardBtnLink }) => {
    return (
        <div className="card gradient_bg1" style={{ minHeight: "300px" }}>
            <div className="card-header card__header">
                <div className='card__title'>{cardTitle}</div>
                {cardBtntext && (
                    <div className='card__button'>
                        <a className='card__link' href={cardBtnLink}>{cardBtntext}</a>
                    </div>
                )}
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

export default Cardcase;


