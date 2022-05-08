import React from "react";
import Navbar from "../components/Navbar";
import Devcard from "../components/Devcard.js"
import Datacard from "../components/Datacard.js"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Portfolio() {

   const dataRow1 = [
      {
        key: 1,
        dataPage: "./DataAutomation",
        title:"Data Automation Dashboard - Health Management",
        imgSrc:"/images/data-card-img/vaccine-dashboard-cover.png",
        alt:"Automation Dashboard",
        description:"A data-driven automated system designed to showcase the day-to-day operations of coordination for Honu Management - a healthcare management company operating in the state of Michigan."
      },
      {
         key: 2,
         dataPage: "./DataSiteIssues",
         title:"Site Issues Dashboard",
         imgSrc:"/images/data-card-img/SiteIssuesDashboardCover.png",
         alt:"Site Issues Dashboard",
         description:"A data-driven automated system designed to showcase the day-to-day operations of coordination for Honu Management - a healthcare management company operating in the state of Michigan."
     },
      // {
      //   key: 3,
      //   dataPage: "./Data1",
      //   title:"Data 3",
      //   imgSrc:"/images/data-card-img/vaccine-dashboard-cover.png",
      //   alt:"pic",
      //   description:"DINGEN is a food app design to take the struggle of preparing tonight's dinner",
      // }
    ]
  
   const cardsRow1 = [
    {
      key: 1,
      title:"Wall Pro",
      imgSrc:"/images/dev-card-img/wall-pro.png",
      alt:"pic",
      description:"This business focused application allows project managers to quickly enter Show room measurements and convert them into necessary panels for production",
      github:"https://github.com/mbussert/shaw-ppc",
      www:"http://www.WallPro.net",
    },
    {
      key: 2,
      title:"Treat YO Shelf",
      imgSrc:"/images/dev-card-img/treat-search.png",
      alt:"pic",
      description:"Treat YO Shelf is a user-friendly app that lets you organize your books and and future reading lists",
      github:"https://github.com/hstor3/treat-yo-shelf",
      www:"https://treatyourshelf.herokuapp.com/",
    },
    {
      key: 3,
      title:"DINGEN",
      imgSrc:"/images/dev-card-img/dingen-home.png",
      alt:"pic",
      description:"DINGEN is a food app design to take the struggle of preparing tonight's dinner",
      github:"https://github.com/Yeatman51/DinGen-Web",
      www:"https://yeatman51.github.io/DinGen-Web/",
    }
  ]
  
  const cardsRow2 = [
    {
      key: 4,
      title:"Phobos",
      imgSrc:"/images/dev-card-img/",
      alt:"pic",
      description:" NASA API",
      github:"https://github.com/Yeatman51/phobos",
      www:"https://github.com/Yeatman51/phobos",
    },
    {
      key: 5,
      title:"Phoenix Custom Printing",
      imgSrc:"/images/dev-card-img/",
      alt:"pic",
      description:"",
      github:"https://github.com/Yeatman51/phoenix-custom-printing",
      www:"http://www.phoenixcustomprinting.com",
    },
    {
      key: 6,
      title:"Company Password Generator",
      imgSrc:"/images/dev-card-img/password-generator.png",
      alt:"pic",
      description:"This webpage is designed to be a quick reference guide to help front in web developers",
      github:"https://github.com/Yeatman51/company-password-generator",
      www:"https://yeatman51.github.io/company-password-generator/",
    }
  ]

  const cardsRow3 = [
   {
     key: 7,
     title:"Coding Quiz",
     imgSrc:"/images/dev-card-img/coding-quiz.png",
     alt:"pic",
     description:"This is a coding quiz designed for Developers in training to review course material",
     github:"https://github.com/Yeatman51/coding-quiz",
     www:"https://yeatman51.github.io/coding-quiz/",
   },
   // {
   //   key: 5,
   //   title:"Company Password Generator",
   //   imgSrc:"/images/dev-card-img/password-generator.png",
   //   alt:"pic",
   //   description:"This webpage is designed to be a quick reference guide to help front in web developers",
   //   github:"https://github.com/Yeatman51/company-password-generator",
   //   www:"https://yeatman51.github.io/company-password-generator/",
   // },
   {
     key: 8,
     title:"Todo App",
     imgSrc:"/images/dev-card-img/todo-list.png",
     alt:"pic",
     description:"This Apple is you to keep track of all of your to do list and keep them organized and different to do categories",
     github:"https://github.com/Yeatman51/todo-app",
     www:"https://yeatman51.github.io/todo-app/",
   },
   {
     key: 9,
     title:"Web Cheat Sheet",
     imgSrc:"/images/dev-card-img/web-cheatsheet.png",
     alt:"pic",
     description:"This webpage was designed to be a quick reference guide to help web developers",
     github:"https://github.com/Yeatman51/web-cheatsheet",
     www:"https://yeatman51.github.io/web-cheatsheet/",
   }
 ]

 const GraphicDesignImages = [
   {
     key: 1,
     imgSrc:"/images/designer-img/account_login.png",
     alt:"account login",
   },
   {
     key: 2,
     imgSrc:"/images/designer-img/kayaking_adventure.png",
     alt:"kayaking",
   },
   {
     key: 3,
     imgSrc:"/images/designer-img/walnut_creek.png",
     alt:"Walnut Creek online store"
   },
   {
     key: 4,
     imgSrc:"/images/designer-img/yeatman_avatar.png",
     alt:""
   },
   {
     key: 5,
     imgSrc:"/images/designer-img/yeatman_orca.png",
     alt:""
   },
   {
     key: 6,
     imgSrc:"/images/designer-img/yeatman_RM.png",
     alt:""
   },
 ]

  return (
   <div>
   <Navbar/>

   <div className="data-text-container">
      <h2 className="data-text-header">data analyst</h2>

      <p className="data-text-paragraph">

      </p>
   </div>

<div className="dividers-line"></div>
   
   <div className="data-portfolio-container-row-1">
    {dataRow1.map(data1 => (
      <Datacard 
        key={data1.key}
        dataPage={data1.dataPage}
        title={data1.title}
        imgSrc={data1.imgSrc}
        alt={data1.alt}
        description={data1.description}
      /> 
    ))}
    </div>
      
      <div className="developer-text-container">
        <h2 className="developer-text-header">developer</h2>

        <p className="developer-text-paragraph">

        </p>
      </div>

<div className="dividers-line"></div>

    <div className="portfolio-container-row-1">
    {cardsRow1.map(card1 => (
      <Devcard 
        key={card1.key}
        title={card1.title}
        imgSrc={card1.imgSrc}
        alt={card1.alt}
        description={card1.description}
        github={card1.github}
        www={card1.www}
      /> 
    ))}
    </div>

    {/* <div className="portfolio-container-row-2">
    {cardsRow2.map(card2 => (
      <Devcard 
        key={card2.key}
        title={card2.title}
        imgSrc={card2.imgSrc}
        alt={card2.alt}
        description={card2.description}
        github={card2.github}
        www={card2.www}
      /> 
    ))}
    </div> */}

    {/* <div className="portfolio-container-row-3">
    {cardsRow3.map(card3 => (
      <Devcard 
        key={card3.key}
        title={card3.title}
        imgSrc={card3.imgSrc}
        alt={card3.alt}
        description={card3.description}
        github={card3.github}
        www={card3.www}
      /> 
    ))}
    </div> */}

    <div className="designer-text-container">
        <h2 className="designer-text-header">graphic designer</h2>

        <p className="designer-text-paragraph">

        </p>
      </div>

<div className="dividers-line"></div>

   <div className="gd-gallery">
      {GraphicDesignImages.map(gdGallery => (
      <LazyLoadImage
         className="gd-gallery-img"
         key={gdGallery.key}
         src={process.env.PUBLIC_URL + gdGallery.imgSrc}
         alt={gdGallery.alt}
         effect="blur"
      /> 
      ))}
   </div>

</div>
  
  );
}

export default Portfolio;