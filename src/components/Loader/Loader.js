import { Hourglass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        marginTop: '20px',

        minWidth: 'calc(100vw - 140px)',

        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#FF69B4', '#FF1493']}
      />
    </div>
  );
}
