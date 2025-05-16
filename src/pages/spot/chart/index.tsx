import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Bar = {
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
  t: number;
};

type Props = {
  bars: Bar[];
};

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  const date = new Date();
  const [hours, minutes] = label.split(':');
  date.setHours(+hours, +minutes);

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div style={{ background: '#000', padding: '4px 8px', borderRadius: 4, color: '#fff' }}>
      <div>{formattedTime}</div>
      <div>${payload[0].value}</div>
    </div>
  );
};

const Chart = ({ bars }: Props) => {
  const data = bars.map(bar => ({
    time: formatTime(bar.t),
    close: bar.c,
  }));

  return (
    <ResponsiveContainer width="100%" height={48}>
      <LineChart data={data}>
        <XAxis dataKey="time" hide />
        <YAxis domain={['dataMin', 'dataMax']} hide />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>

  );
};

export default Chart;