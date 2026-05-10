export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#6366f1'
    }}>
      <div className="spinner"></div>
      Loading Products...
    </div>
  );
}
