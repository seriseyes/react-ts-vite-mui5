import {Button, TextField} from "@mui/material";
import React from "react";
import css from "./Auth.module.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const onLogin = () => navigate("/");

    return <div className={css.wrap}>
        <TextField label={"Username"}/>
        <TextField label={"Password"} type={"password"}/>
        <Button
            variant={"outlined"}
            endIcon={<NavigateNextOutlinedIcon/>}
            onClick={onLogin}
        >
            Login
        </Button>
    </div>
}
