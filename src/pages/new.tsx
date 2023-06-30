import NavBarre from "../components/navBarre/navBarre";
import useIsMobile from "../hooks/useIsMobile";
import { Button, Divider, TextField, Typography } from '@mui/material';
import styles from './styles.module.css';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import NewOrdo from "../components/newOrdo";

export default function New(){
    const isMobile = useIsMobile();
    
    return (
      <div>
        <NavBarre/>
        <NewOrdo/>
      </div>
    )
  }