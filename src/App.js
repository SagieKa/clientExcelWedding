import React,{useEffect} from 'react';
import './App.css';
import RTL from  './helpers/jss'
import CustomTheme from './helpers/customTheme'
import {ThemeProvider} from '@material-ui/core/styles'
import Form from './Components/Form/Form'
import Table from './Components/Table/Table'
import DataTable from './DataTable'
import axios from 'axios'


function App() {

  const [store,setStore]=React.useState({
    data:[]
  })
     useEffect(()=>{
      axios.get('https://wedding-sagieorel-server.herokuapp.com/money/getAll').then(res=>{
        console.debug('gg')
        console.debug(res.data)
        setStore({
        ...store,
        data:res.data
        })
     
        })
      },[])

  return (
    <DataTable.Provider value={{store,setStore}}>

    <ThemeProvider theme={CustomTheme}>
    <RTL>
      <Form/>
      <Table/>
    </RTL>
    </ThemeProvider>
    </DataTable.Provider>
      
  );
}

export default App;
