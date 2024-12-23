import { Line, LineChart as Mojahid } from "recharts";

const LIneChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", math: 85, bangla: 78, english: 90 },
    { id: 2, name: "Bob", math: 92, bangla: 88, english: 84 },
    { id: 3, name: "Charlie", math: 76, bangla: 81, english: 79 },
    { id: 4, name: "David", math: 89, bangla: 72, english: 85 },
    { id: 5, name: "Eve", math: 94, bangla: 95, english: 87 },
    { id: 6, name: "Frank", math: 73, bangla: 78, english: 82 },
    { id: 7, name: "Grace", math: 88, bangla: 83, english: 91 },
    { id: 8, name: "Hannah", math: 79, bangla: 85, english: 77 },
    { id: 9, name: "Ivy", math: 91, bangla: 90, english: 89 },
    { id: 10, name: "Jack", math: 84, bangla: 79, english: 86 }
  ];
  
  return (
    <div>
      <h1>Mojahid Subject Mark: </h1>
      <Mojahid width={300} height={300} data={studentMarks}>
        <Line dataKey='math'></Line>
        <Line dataKey='bangla'></Line>
        <Line dataKey='english'></Line>
      </Mojahid>
      
      
    </div>
  );
};

export default LIneChart;
