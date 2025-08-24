'use client' 
import React from 'react';
import NotificationPopup from '@/components/popup';
import LuxuryItem from '@/components/MenuItem';
import LuxuryItem2 from '@/components/MenuItem2';
// Importing the menu sections
import menuData from '../data/vegetarianAppetizers';
import soupsAndSaladsMenuData from '../data/soupsAndSaladsMenuData';
import nonVegetarianAppetizers from '../data/nonVegetarianAppetizers';
import curries from '../data/curries';
import LuxuryItem3 from '@/components/MenuItem3';

export default function MenuPage() {

  return (



    <div className="min-h-screen">

      <NotificationPopup 
          title="Notification"
          message="Click on a dish to learn more!"
          showOnLoad={true}
      />

      <div id="soups-and-salads">
      
       <LuxuryItem2 
        title="Soups & Salads"
        subtitle="Fresh and Flavorful Starters"
        leftSectionHeading="Soups"
        rightSectionHeading="Salads"
        leftColumn={soupsAndSaladsMenuData.leftColumn}
        rightColumn={soupsAndSaladsMenuData.rightColumn}
      />
      </div>
      <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center"> *Please notify of any allergies or Nut allergies to the server at the time of placing the order.</h3>


      <div id="vegetarian-appetizers">
     
      <LuxuryItem {...menuData} />
      </div>


      <div id="non-vegetarian-appetizers">
      <LuxuryItem {...nonVegetarianAppetizers} />
      </div>

      <div id="curries">
      <LuxuryItem3 {...curries} />
      </div>
      <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center"> *Please notify of any allergies or Nut allergies to the server at the time of placing the order.</h3>

      
      



      

      
    </div>
  );
}