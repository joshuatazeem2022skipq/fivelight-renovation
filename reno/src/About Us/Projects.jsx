import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Divider, Typography, Grid } from '@mui/material';

const CenteredCard = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [counts, setCounts] = useState({ 79: 0, 123: 0, 333: 0, 60: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    });

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const intervals = Object.entries(counts).map(([key, value]) => {
      return setInterval(() => {
        setCounts(prevCounts => ({
          ...prevCounts,
          [key]: prevCounts[key] < key ? prevCounts[key] + 1 : key,
        }));
      }, 20);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isIntersecting]);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: {md: '43vh', xs: "100vh", sm:"70vh"} }}>
      <Grid item xs={11} sm={7} md={8} lg={9} ref={cardRef}>
        <Card style={{ backgroundColor: 'black', color: 'white', borderRadius:"22px" }}>
          <CardContent>
            <Grid container spacing={2}>
            {Object.entries(counts).map(([key, value], index) => (
                <React.Fragment key={key}>
                <Grid item xs={12} md={3} key={key}>
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="h3">{value}</Typography>
                    <Typography variant="h6" color={"GrayText"}>
                    <Divider orientation="vertical" style={{ backgroundColor: '#d9a95b', margin: '0 auto', border: "3px solid #d9a95b", width: "17px", borderRadius:"5px" }} />
                      {key === '79' && 'Projects Completed'}
                      {key === '123' && 'Active Clients'}
                      {key === '333' && 'Cups of Coffee'}
                      {key === '60' && 'Happy Clients'}
                    </Typography>
                    
                  </CardContent>
                  
                </Grid>
                
                </React.Fragment>
              ))}
            </Grid>
           
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CenteredCard;
