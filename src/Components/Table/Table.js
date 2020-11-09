import React, { useState,useContext,useEffect } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import DataTable from '../../DataTable'
import axios from 'axios'
export default function App() {

  const {store,setStore}=useContext(DataTable)

  
  
  





  return (
    <div className="App">
      {/* <h1>רשימת אנשים</h1>
      <a href="https://medium.com/better-programming/intro-to-material-table-for-react-74db0fbd2d32">
        Click here for an intro to material-table
      </a> */}
      <div style={{
         maxWidth: "99%", 
         paddingRight:'12px'
        // paddingTop: "12px" 
      }}>
        <MaterialTable
          columns={[
            {
              title: "שם",
              field: "name",
              // headerStyle: {
              //   backgroundColor: "green"
              // }
            },
            {
              title: "שם משפחה",
              field: "lastName",
              // headerStyle: {
              //   backgroundColor: "blue"
              // }
            },
            {
              title: "מעגל",
              field: "circle",
              // headerStyle: {
              //   backgroundColor: "blue"
              // }
            },
            {
              title: "סכום",
              field: "amount",
              type: "numeric",
              // headerStyle: {
              //   backgroundColor: "red"
              // }
            }
          ]}
          data={store.data}
          title="רשימת אנשי חתונה"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}

          localization={{
            toolbar:{searchPlaceholder:'חפש'},
            pagination:{
              labelRowsSelect:'שורות' ,
              labelDisplayedRows: '{from}-{to} מתוך {count}',
              firstTooltip: 'דף ראשון',
              lastTooltip:'דף אחרון',
              previousTooltip: 'דף קודם',
              nextTooltip:'דף הבא',
            },
            header:{actions:'פעולות'}
          }}
          actions={[
            {
              icon: () => 'delete',
              tooltip: "Save User",
              onClick: (event, rowData) => {
                console.log(rowData)
                axios.delete(`https://wedding-sagieorel-server.herokuapp.com/money/delete/${rowData._id}`).then(
                res=>{
                console.debug(res.data)})
                var newData = [...store.data]
                var find = element => element._id == rowData._id
                var index = newData.findIndex(find)
                newData.splice(index,1)
                setStore({
                ...store,
                 data:newData
                })



                
            
                  
                
                // var newData = [...store.data]
                // newData.push(    {
                //   name:'שגיא',
                //   lastName:'קרטה',
                //   circle:'חברים שגיא',
                //   amount:500
                // })
                // setStore({
                //   ...store,
                //   data:newData
                // })

              }
            }
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                <DeleteIcon />
              </Button>
            )
          }}
          options={{
            exportButton: true
            // headerStyle: {
            //   backgroundColor: "#01579b",
            //   color: "#FFF"
            // }
          }}
        />
      </div>
    </div>
  );
}
