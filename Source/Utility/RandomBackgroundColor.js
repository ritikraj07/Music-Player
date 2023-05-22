import { useEffect, useRef, useState } from "react";

export default function RandomBackGroundColor(i = 0) {
    const backgroundColors = [
        "#E57373", "#F06292", "#BA68C8", "#9575CD", "#7986CB",
        "#64B5F6", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784",
        "#AED581", "#DCE775", "#FFF176", "#FFD54F", "#FFB74D",
        "#FF8A65", "#A1887F", "#90A4AE", "#F44336", "#E91E63",
        "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4",
        "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
        "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548",
        "#607D8B", "#EF5350", "#EC407A", "#AB47BC", "#7E57C2",
        "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26A69A",
        "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28",
        "#FFA726", "#FF7043", "#8D6E63", "#BDBDBD", "#78909C",
        "#F06292", "#BA68C8", "#4FC3F7", "#81C784", "#FFF176",
        "#FFB74D", "#A1887F", "#F44336", "#9C27B0", "#3F51B5",
        "#00BCD4", "#4CAF50", "#CDDC39", "#FFC107", "#FF5722",
        "#607D8B", "#EC407A", "#7E57C2", "#42A5F5", "#26C6DA",
        "#66BB6A", "#D4E157", "#FFA726", "#FF7043", "#BDBDBD",
        "#F06292", "#BA68C8", "#4FC3F7", "#81C784", "#FFF176",
        "#FFB74D", "#A1887F", "#F44336", "#9C27B0", "#3F51B5",
        "#00BCD4", "#4CAF50", "#CDDC39", "#FFC107", "#FF5722",
        "#607D8B", "#EC407A", "#7E57C2", "#42A5F5", "#26C6DA",
        "#66BB6A", "#D4E157", "#FFA726", "#FF7043", "#BDBDBD",
    ];

    return backgroundColors[Math.floor(Math.random() * 100)]
}




export function RandomGradientColor() {
    let bgArray = [
        'linear-gradient(163deg, rgba(62,60,211,1) 1%, rgba(188,33,138,1) 47%, rgba(250,255,0,1) 79%)',
        'linear-gradient(163deg, rgba(62,60,211,1) 1%, rgba(188,33,138,1) 47%, rgba(0,255,59,1) 79%)',
        'linear-gradient(98deg, rgba(62,60,211,1) 1%, rgba(188,33,138,1) 60%, rgba(250,255,0,0.9557948179271709) 86%)',
        'linear-gradient(152deg, rgba(81, 211, 60, 1) 14%, rgba(188, 33, 138, 1) 56%, rgba(250, 255, 0, 0.9557948179271709) 88%)',
        'linear-gradient(152deg, rgba(211,60,177,1) 14%, rgba(33,52,188,1) 56%, rgba(0,255,239,0.9557948179271709) 88%)'
    ]
    return bgArray[Math.floor(Math.random() * bgArray.length)]
}

export function RandomBoxShadow() {
    const boxShadows = [
        '0 0 10px 5px #00FFFF',
        '0 0 20px 10px #00FFFF',
        '0 0 30px 15px #00FFFF',
        '0 0 40px 20px #00FFFF',
        '0 0 50px 25px #00FFFF',
        '0 0 10px 5px #00ff00',
        '0 0 10px 5px #00FFFF'

    ]

    return boxShadows[Math.floor(Math.random() * boxShadows.length)]
}