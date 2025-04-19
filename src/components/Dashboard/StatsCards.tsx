// StatsCards.tsx
import React from 'react';

const StatsCards: React.FC = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <h3>Total Sales</h3>
        <p>$5000</p>
      </div>
      <div style={styles.card}>
        <h3>Total Users</h3>
        <p>1200</p>
      </div>
      <div style={styles.card}>
        <h3>Total Revenue</h3>
        <p>$15000</p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '270px', // To make space for the sidebar
    marginTop: '30px',
  },
  card: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  } as React.CSSProperties,
};

export default StatsCards;
