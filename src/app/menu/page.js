'use client' 
import React from 'react';
import NotificationPopup from '@/components/popup';
import MenuNavigation from '@/components/menuNavigation';
import LuxuryItem from '@/components/MenuItem';
import LuxuryItem2 from '@/components/MenuItem2';
// Importing the menu sections
import menuData from '../data/vegetarianAppetizers';
import soupsAndSaladsMenuData from '../data/soupsAndSaladsMenuData';
import nonVegetarianAppetizers from '../data/nonVegetarianAppetizers';
import curries from '../data/curries';
import LuxuryItem3 from '@/components/MenuItem3';
import otherHouseSpecialties from '../data/otherHouseSpecialities';
import combosanddosa from '../data/combosanddosa';
import flatbreads from '../data/flatbreads';
import breads from '../data/breads';
import desserts from '../data/desserts';
import kidsMenu from '../data/kidsMenu';
import riceAndNoodles from '../data/riceNnoodles';

export default function MenuPage() {

  return (
    <div className="min-h-screen">
      {/* Add Navigation Component */}
      <MenuNavigation />
      
      {/* Add top padding to account for fixed navigation */}
      <div className="pt-5">
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
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="vegetarian-appetizers">
        <LuxuryItem {...menuData} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="non-vegetarian-appetizers">
        <LuxuryItem {...nonVegetarianAppetizers} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="curries">
        <LuxuryItem3 {...curries} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="other-house-specialities">
        <LuxuryItem {...otherHouseSpecialties} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="combos-and-dosa">
         <LuxuryItem2 
           title="Classic Combos & Dosa Corner"
           subtitle="Perfect Pairings and Authentic South Indian Flavors"
           leftSectionHeading="Classic Combos"
           rightSectionHeading="Dosa Corner"
          leftColumn={combosanddosa.leftColumn}
          rightColumn={combosanddosa.rightColumn}
        />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="flatbreads">     
        <LuxuryItem {...flatbreads} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="rice-and-noodles">
        <LuxuryItem3 {...riceAndNoodles} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="breads">     
        <LuxuryItem {...breads} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="desserts">     
        <LuxuryItem {...desserts} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>

        <div id="kids-menu">     
        <LuxuryItem {...kidsMenu} />
        </div>
        <h3 className="text-sm font-serif text-[#e3c493] transition-colors duration-300 w-full text-center pb-8"> *Please inform us of any food allergies before ordering, as our items may contain allergens or be prepared with shared equipment.</h3>
      </div>
    </div>
  );
}