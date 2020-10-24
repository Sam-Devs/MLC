import React, { useState, useEffect } from 'react';
import Navbar from '../components/NewHeader'
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import Card from "../components/common/Card";
import Spinner from "../components/common/Spinner";
import { initWeb3 } from "../utils.js";
import MCNStake from "../contracts/MCNStake.json";
import ERC20 from "../contracts/ERC20.json";
import fromExponential from "from-exponential";

const HomePage = () => {
    return ( 
        <Navbar />
        
     );
}

export default HomePage;