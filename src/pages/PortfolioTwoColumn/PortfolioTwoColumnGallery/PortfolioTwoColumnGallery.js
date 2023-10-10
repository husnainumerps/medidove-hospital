import React, { useState } from 'react';
import SingleGalleryItem from '../../../components/SingleGalleryItem/SingleGalleryItem';
import portfolioData from '../../../fakeData/portfolioData';


const arr = portfolioData;
const uniqueItem = arr.filter((arr, index, self) =>
index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))


const PortfolioTwoColumnGallery = () => {

   const [galleryItems, setGalleryItems] = useState(portfolioData);
   const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);
   const [active,setActive] = useState('all')
   // console.log(galleryItems)

   // filter item
   const filterItems = (category) => {
      setActive(category)
      if(category === 'all'){
         return setFilterGalleryItems(uniqueItem)
      }
      const remainingItem = galleryItems.filter((item) => {
         return item.category === category
      })
      setFilterGalleryItems(remainingItem)
   }


   return (
      <>


         <section className="portfolio-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  {/* <!-- START PORTFOLIO FILTER AREA --> */}
                  <div className="col-12">
                     <div className="text-center">
                        <div className="portfolio-filter mb-40">
                           <button className={active === 'all' ? 'active' : null}
                           onClick={() => filterItems('all')} >Show all</button>

                           <button className={active === 'dental' ? 'active' : null}
                           onClick={() => filterItems('dental')} >Dental</button>

                           <button className={active === 'care' ? 'active' : null}
                           onClick={() => filterItems('care')} >Care</button>

                           <button className={active === 'medical' ? 'active' : null}
                           onClick={() => filterItems('medical')} >Medical</button>

                           <button className={active === 'surgery' ? 'active' : null}
                           onClick={() => filterItems('surgery')} >Surgery</button>
                        </div>
                     </div>
                  </div>
                  {/* <!-- END PORTFOLIO FILTER AREA --> */}
               </div>

               <div id="portfolio-grid" className="row row-portfolio">
                  {
                     filterGalleryItems.map((item,index) => {
                        // setActive(item.category)
                        return <SingleGalleryItem key={item.id} galleryItem={item} index={index}
                        filterGalleryItems={filterGalleryItems} column="6"  />
                     })

                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default PortfolioTwoColumnGallery;