
// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
// import { VictoryChart, VictoryLine, VictoryAxis } from "victory-native";

// export default function Chart() {
//     const data = Array.from({ length: 30 }, (_, i) => ({
//     x: i * 2, // 2分間隔 (0, 2, 4, ... 58)
//     y: 45 + Math.sin(i / 3) * 5 + Math.random() * 2, // ダミー温度
//   }));


//   return(
//     <View>
//         <VictoryChart
//         >
//             {/* x軸 */}
//             <VictoryAxis
//                 label="時間"
//                 style={{
//                     axis:{stroke:"#ddd",strokeWidth:1},
//                     tickLabels:{},
//                     axisLabel:{},
//                     grid:{
//                         stroke:"#ddd",
//                         strokeWidth:1,
//                         strokeDasharray:"0",
//                     },
//                 }}
//             >  
//             </VictoryAxis>
//             {/* Y軸 */}
//             <VictoryAxis
//                 dependentAxis
//                 label="湿度"
//                 style={{
//                     axis:{},
//                     tickLabels:{},
//                     grid:{
//                         stroke:"#ddd",
//                         strokeWidth:1,
//                         strokeDasharray:"0",
//                     },
//                 }}
//             >
//             </VictoryAxis>
//             {/* 折れ線グラフ */}
//             <VictoryLine
//                 data={data}
//                 style={{
//                     data:{stroke:"#0094FF",strokeWidth:2}
//                 }}
//              >
//             </VictoryLine>
//         </VictoryChart>
//     </View>
//   )
// }