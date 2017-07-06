import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    function average(data) {
        let sum = 0, average;

        for (var i = 0; i < data.length; i++) {
            sum += data[i]
        }

        average = Math.round(sum / data.length);

        return average;
    }

    return (
        <div>
            <div>
                <Sparklines height={110} width={180} data={props.data}>
                    <SparklinesLine color={props.color}></SparklinesLine>
                    <SparklinesReferenceLine type='avg'></SparklinesReferenceLine>
                </Sparklines>
            </div>
            <div>
                { average(props.data) } { props.units }
            </div>
        </div>
    );
}
