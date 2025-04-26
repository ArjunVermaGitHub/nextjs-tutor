export default function ProgressBar({ completed, total }) {
    const progressPercent = total === 0 ? 0 : completed / total;
  
    let progressColor = 'red';
    if (progressPercent >= 0.75) {
      progressColor = 'green';
    } else if (progressPercent >= 0.5) {
      progressColor = 'yellow';
    } else if (progressPercent >= 0.25) {
      progressColor = 'orange';
    }
  
    return (
      <div style={{ width: '100%', margin: '10px 0' }}>
        <progress
          value={completed}
          max={total}
          style={{
            width: '100%',
            height: '20px',
            accentColor: progressColor,
          }}
        />
        <div style={{ textAlign: 'right', fontSize: '0.9rem', marginTop: '5px' }}>
          {`${completed} / ${total} lessons completed`}
        </div>
      </div>
    );
  }
  