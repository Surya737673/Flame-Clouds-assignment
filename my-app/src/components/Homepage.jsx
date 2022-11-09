import React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import optionsicon from "../components/optionsicon.jpg"
import {TextField} from '@mui/material';
import styles from "../styles/Homepage.module.css"
import { useState } from "react";


export const Homepage = () => {
  
 
  return (
    <div>
    <div style={{display:"flex"}}>
    <div
      style={{
        justifyContent: "center",
        width: "50%",
        marginLeft: "160px",
        marginTop: "60px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>Action Plans</div>
        <div>
          <Button className={styles.managebutton}  variant="outlined">Manage Access</Button>&nbsp;&nbsp;
          <Button className={styles.newbutton} variant="contained">New Plan</Button>
        </div>
      </div>

      <div  style={{ marginTop:"30px"}}>
        <div style={{ display:"flex"}}>
         <div style={{ width:"99%"}}>
        <Accordion>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Marketing</Typography>
          </AccordionSummary>
            {/*  */}
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Wordpress</Typography>
            </AccordionSummary>
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Google Drive</Typography>
            </AccordionSummary>
            
           
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 1</Typography>
            </AccordionSummary>
              
            
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 2</Typography>
            </AccordionSummary>
           

            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 3</Typography>
            </AccordionSummary>
            
            </Accordion>
            </Accordion>
            </Accordion>
            {/*  */}
        </Accordion>
         </div><div className={styles.hover1}> <img style={{width:"40px"}} src={optionsicon} alt="" /> </div>
         <div className={styles.hide1}>
             <div>Edit Category</div>
             <div>Manage Access</div>
             <div>Delete</div>
           </div>
        </div>

        <div style={{ display:"flex",marginTop:"20px"}}>
         <div style={{ width:"99%"}}>
        <Accordion>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Design</Typography>
          </AccordionSummary>
            {/*  */}
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Wordpress</Typography>
            </AccordionSummary>
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Google Drive</Typography>
            </AccordionSummary>
            
           
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 1</Typography>
            </AccordionSummary>
              
            
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 2</Typography>
            </AccordionSummary>
           

            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 3</Typography>
            </AccordionSummary>
            
            </Accordion>
            </Accordion>
            </Accordion>
            {/*  */}
        </Accordion>
         </div><div className={styles.hover2}> <img style={{width:"40px"}} src={optionsicon} alt="" /> </div>
           <div className={styles.hide2}>
             <div>Edit Category</div>
             <div>Manage Access</div>
             <div>Delete</div>
           </div>
         
        </div>

        <div style={{ display:"flex",marginTop:"20px"}}>
         <div style={{ width:"99%"}}>
        <Accordion>
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Sales</Typography>
          </AccordionSummary>
            {/*  */}
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Wordpress</Typography>
            </AccordionSummary>
            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Google Drive</Typography>
            </AccordionSummary>
            
           
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 1</Typography>
            </AccordionSummary>
              
            
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 2</Typography>
            </AccordionSummary>
           

            <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pointer 3</Typography>
            </AccordionSummary>
            
            </Accordion>
            </Accordion>
            </Accordion>
            {/*  */}
        </Accordion>
         </div><div className={styles.hover3}> <img style={{width:"40px"}} src={optionsicon} alt="" /> </div>
           <div className={styles.hide3}>
             <div>Edit Category</div>
             <div>Manage Access</div>
             <div>Delete</div>
           </div>
        </div>
      </div>
      </div>
      <div id="right" style={{marginLeft:"40px",marginTop:"40px"}}>
         

              <div className={styles.SOPhide} style={{width:"400px"}} >
              <h2 >SOP Access</h2>
              <div>
                <h3 style={{color:"#2563EB"}}>Sales</h3>
                <TextField fullWidth label="Select Members" id="fullWidth" />
              </div>
              <div>
                <h3 style={{color:"#2563EB"}}>Marketing</h3>
                <TextField fullWidth label="Select Members" id="fullWidth" />
                
              </div>
              <div>
                <h3 style={{color:"#2563EB"}}>Design</h3>
                <TextField fullWidth label="Select Members" id="fullWidth" />
              </div>
              <div style={{marginLeft:"190px",marginTop:"20px"}}>
                    <Button variant="outlined" color="error">Cancel</Button>&nbsp; &nbsp;
                    <Button variant="contained">Update</Button>
                </div>
              </div>


      </div>
    </div>

   <div style={{display:"flex"}}>

    <div className={styles.Deletehide} >
    <div style={{width:"400px",marginLeft:"160px"}}>
        <h2>Delete Category or / Subcategory</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div style={{marginLeft:"190px",marginTop:"20px"}}>
            <Button variant="outlined" color="error">Cancel</Button>&nbsp; &nbsp;
            <Button variant="contained">Delete</Button>
        </div> 
    </div>
    </div>

    <div className={styles.Planhide} >
    <div style={{width:"400px",marginLeft:"160px"}}>
        <h2> Plan Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <TextField fullWidth label="Name your Plan" id="fullWidth" />
        <div style={{marginLeft:"190px",marginTop:"20px"}}>
            <Button variant="outlined" color="error">Cancel</Button>&nbsp; &nbsp;
            <Button variant="contained">Create</Button>
        </div>
        
    </div>
    </div>

   
    </div>
    <div className={styles.Pointerhide} >
    <div style={{width:"400px",marginLeft:"160px"}}>
        <h2>Pointer Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <TextField fullWidth label="Name your Plan" id="fullWidth" />
        <div style={{marginLeft:"190px",marginTop:"20px"}}>
            <Button variant="outlined" color="error">Cancel</Button>&nbsp; &nbsp;
            <Button variant="contained">Create</Button>
      </div>
      </div>
      </div>
    </div>
  );
};
