import React ,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import _uniqueId from 'lodash/uniqueId';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import DataTable from '../../DataTable'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

export default function Form() {
  const {store,setStore}=useContext(DataTable)
  const classes = useStyles();
  const [name,setName] =useState('')
  const [lastName,setLastName] =useState('')
  const [circle,setCircle] =useState('משפחה-שגיא')
  const [amount,setAmount] =useState(0)

  const handleName =(e)=>{
    setName(e.target.value)
  }

  const handleLastName =(e)=>{
    setLastName(e.target.value)
  }

  const handleCircle =(e)=>{
    setCircle(e.target.value)
  }

  const handleAmount =(e)=>{
    setAmount(e.target.value)
  }
  
  

  const Save = ()=>{
    var newData = [...store.data]
    var MoneySave={
     name:name,
      lastName:lastName,
      circle:circle,
      amount:amount
    }
    // newData.push(MoneySave)
    // setStore({
    //   ...store,
    //   data:newData
    // })
    // axios.get('http://localhost:8080/money/getAll').then(res=>{
    //   console.log('ggg')
    //   console.log(res.data)
    // })
    axios.post(`https://wedding-sagieorel-server.herokuapp.com/money/Add`, MoneySave)
    .then(res => {
      console.log(res);
      console.log(res.data);
      newData.push(res.data)
      setStore({
        ...store,
        data:newData
      })
    })
  }

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment" >שם</InputLabel>
        <Input
     
          id="input-name"
          value={name}
          onChange={handleName}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment" >שם משפחה</InputLabel>
        <Input
        name="testSagie"
          id="input-lastName"
          value={lastName}
          onChange={handleLastName}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">סכום</InputLabel>
        <Input
          id="input-amount"
          value={amount}
          onChange={handleAmount}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-circle">מעגל</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={circle}
          onChange={handleCircle}
          // onChange={handleChange}
        >
          <MenuItem value={'משפחה-שגיא'}>משפחה-שגיא</MenuItem>
          <MenuItem value={'משפחה-אוראל'}>משפחה-אוראל</MenuItem>
          <MenuItem value={'חברים-שגיא'}>חברים-שגיא</MenuItem>
          <MenuItem value={'חברים-אוראל'}>חברים-אוראל</MenuItem>
          <MenuItem value={'אחר'}>אחר</MenuItem>
        
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
<Button onClick={Save}>לחץ עליי</Button>
      </FormControl>
      {/* <Button color="primary">ffff</Button> */}
      
    </div>
  );
}
