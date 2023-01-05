import {Button, TextField} from "@mui/material";
import React from "react";
import css from "./Auth.module.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function Login() {


    return <div className={css.wrap}>
        <TextField label={"Username"}/>
        <TextField label={"Password"}/>
        <Button variant={"outlined"} endIcon={<NavigateNextOutlinedIcon/>}>Login</Button>
    </div>
}
