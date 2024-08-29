import React from 'react';

import Chart from 'react-apexcharts';

function LineChart(props){
    const {data, user} = props;
    // console.log(user)
    function max(data){
        let max = 0;
        let maxArr = [];
        for(let i=0; i<data[0]['marks'].length; i++){
            for(let j=0; j<data.length; j++){
                let num = data[j]['marks'][i];
                if(num > max){
                    max = num;
                }                
            }
            maxArr[i] = max;
            max = 0;
        }
        return maxArr;
    }

    function min(data){
        let min = 100;
        let minArr = [];
        for(let i=0; i<data[0]['marks'].length; i++){
            for(let j=0; j<data.length; j++){
                let num = data[j]['marks'][i];
                if(num < min){
                    min = num;
                }                
            }
            minArr[i] = min;
            min = 100;
        }
        return minArr;
    }
    
    function average(data){
        let sum = 0;
        let avgArr = [];
        for(let i=0; i<data[0]['marks'].length; i++){
            for(let j=0; j<data.length; j++){
                let num = data[j]['marks'][i];
                sum = sum + num;                
            }
            avgArr[i] = Math.round(sum/data.length);
            sum = 0;
        }
        return avgArr;
    }
    let maxData = max(data)
    let minData = min(data)
    let avgData = average(data)
    console.log(user)
    return(

        <div style={{backgroundColor: "white", padding: "10px"}}>
        <Chart type='line'
        width={900}
        height={400}

        series={[
            {
                name: user['name'],
                data: user['marks']
            },
            {
                name: "Max-Score",
                data: maxData
            },
            {
                name: "Avg-Score",
                data: avgData
            },
            {
                name: "Min-score",
                data: minData
            }
        ]}

        options={{
            title:{ text: "Students Scores on Each Test -", style:{color:"blue", fontSize:'18px'}},
            xaxis:{
                title:{text: "# Test", style:{color:"blue", fontSize:'14px'}},
                categories:['Test-1','Test-2','Test-3','Test-4','Test-5','Test-6','Test-7','Test-8','Test-9','Test-10']
            },
            yaxis:{
                title:{text: "# Total Marks", style:{color:"blue", fontSize:'14px'}},
                categories: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
            }

        }}
        ></Chart>
        </div>
    )
}

export default LineChart