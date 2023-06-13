import React from 'react';
import Header from '../Header/Header';
import Officers from '../Officers/Officers';
import Reports from '../Reports/Reports';
import classes from './Main.module.css';

function Main() {
    return (
      <div className={classes.app}>
        <div className={classes.main}>
        <div className={classes.image_filter}></div>
        <div className={classes.page}>
      <Header />
      <div className={classes.main_heading}>
        <h1 className={classes.heading}>SkillWheel</h1>
        <p className={classes.description}>Прокат велосипедов №1</p>
      </div>
      </div>
      </div>
      <Officers />
      <Reports />
      </div>
    );
  }
  

export default Main;

