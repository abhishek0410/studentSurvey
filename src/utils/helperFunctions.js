const calculateCorrelation = require("calculate-correlation");

//Function to calculate Pearson Correlation Coefficient. 
export function Calculate_pearSonCorr(arrData)
{
    var corrWith8 =  [];
    var pearSonCorr = {
        q1_q8 : 0,
        q2_q8 : 0,
        q3_q8 : 0,
        q4_q8 : 0,
        q5_q8 : 0,
        q6_q8 : 0,
        q7_q8 : 0,
        q8_q8 : 0
    }
    console.log("arrData");
    
    const q1 = arrData.q1_ans_Num;
    const q2 = arrData.q2_ans_Num;
    const q3 = arrData.q3_ans_Num;
    const q4 = arrData.q4_ans_Num;
    const q5 = arrData.q5_ans_Num;
    const q6 = arrData.q6_ans_Num;
    const q7 = arrData.q7_ans_Num;
    const q8 = arrData.q8_ans_Num;

    console.log("q1");
    console.log(q1);

    console.log("q8");
    console.log(q8);
    console.log("Coorelation q1-q8: ",calculateCorrelation(q1,q8));
    console.log("Coorelation q2-q8: ",calculateCorrelation(q2,q8));
    pearSonCorr.q1_q8 = calculateCorrelation(q1,q8);
    pearSonCorr.q2_q8 = calculateCorrelation(q2,q8);
    pearSonCorr.q3_q8 = calculateCorrelation(q3,q8);
    pearSonCorr.q4_q8 = calculateCorrelation(q4,q8);
    pearSonCorr.q5_q8 = calculateCorrelation(q5,q8);
    pearSonCorr.q6_q8 = calculateCorrelation(q6,q8);
    pearSonCorr.q7_q8 = calculateCorrelation(q7,q8);
    pearSonCorr.q8_q8 = calculateCorrelation(q8,q8);

    corrWith8.push(pearSonCorr.q1_q8);
    corrWith8.push(pearSonCorr.q2_q8);
    corrWith8.push(pearSonCorr.q3_q8);
    corrWith8.push(pearSonCorr.q4_q8);
    corrWith8.push(pearSonCorr.q5_q8);
    corrWith8.push(pearSonCorr.q6_q8);
    corrWith8.push(pearSonCorr.q7_q8);
    return corrWith8;

}
