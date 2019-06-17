import React from 'react';
import './styles.scss';

function Awards(props) {
    return (
        <div className="awards">
            <h1>Awards</h1>
            <div>
                {props.data.awards.map(award => {
                    return (
                        <h6> {award.rewarder} {award.name} for {award.for} </h6>
                    )
                })}
            </div>
        </div>
    );
}

export default Awards;