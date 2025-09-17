'use client'
import Image from "next/image";
import Header from "./components/header/Header";
import Showprodoct from "./components/showprodoct/showprodoct";
import Slider from "./components/slider/Slider";
import Categorization from "./components/categorization/categorization";
import Prodoct from "./components/prodoct/prodoct";
import Foter from "./components/foter/foter";
import { useRef } from "react";
import Head from "next/head";
import { FaOtter } from "react-icons/fa";
import Fotter from "./components/fotter/foter";

export default function Home() {

 

  return (
    <div className="rootpage" >
      
   <Header/>   
   <Slider/>
   <Categorization/>
   <Prodoct/>
   <Fotter/>
    </div>
  )
}
