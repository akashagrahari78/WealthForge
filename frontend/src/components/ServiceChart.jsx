// import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { motion } from 'framer-motion';

// export default function ServiceChart({ chartData }) {
//   // If a service has no chart data in services.data.js, render nothing.
//   if (!chartData) {
//     return null;
//   }

//   // Destructure the properties from the chartData object.
//   const { type, title, data, colors } = chartData;

//   // This function determines which MUI X chart component to render based on the 'type'.
//   const renderChart = () => {
//     switch (type) {
//       case 'PieChart':
//         return (
//           <PieChart
//             series={[{ data: data, innerRadius: 50, cornerRadius: 5 }]}
//             height={200}
//             colors={data.map(item => item.color)}
//             margin={{ right: 5 }}
//             slotProps={{
//               legend: { 
//                 hidden: false, 
//                 direction: 'row', 
//                 position: { vertical: 'bottom', horizontal: 'middle' } 
//               },
//             }}
//           />
//         );
        
//       case 'BarChart':
//         return (
//           <BarChart
//             series={data.series}
//             height={250}
//             xAxis={data.xAxis}
//             colors={colors}
//             yAxis={[{ label: 'Portfolio %' }]}
//             margin={{ left: 80, top: 20, right: 20 }}
//             grid={{ horizontal: true }}
//           />
//         );

//       case 'LineChart':
//         return (
//           <LineChart
//             series={data.series}
//             xAxis={data.xAxis}
//             height={300}
//             colors={colors}
//             margin={{ left: 80, top: 20, right: 20 }}
//             yAxis={[{
//               label: 'Investment Value (₹)',
//               valueFormatter: (value) => (value / 1000) + 'k',
//             }]}
//             grid={{ horizontal: true }}
//           />
//         );
        
//       default:
//         // If the 'type' is unknown, render nothing.
//         return null;
//     }
//   };

//   // The outer shell of the chart section with a title.
//   return (
//     <motion.section
//       className="max-w-4xl mx-auto px-6 py-16"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//     >
//       <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
//       <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
//         {renderChart()}
//       </div>
//     </motion.section>
//   );
// }
