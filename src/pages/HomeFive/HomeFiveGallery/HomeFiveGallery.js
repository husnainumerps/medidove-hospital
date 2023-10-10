import React, { useState } from 'react';
import home5GalleryData from '../../../fakeData/homeFiveGalleryData';
import HomeFiveSingleGallery from './HomeFiveSingleGallery';

const arr = home5GalleryData;
const uniqueItem = arr.filter((arr, index, self) =>
	index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))
// second option
// const secondOption = [...new Set(home5GalleryData.map(item => item.img))]
// console.log(secondOption)

const HomeFiveGallery = () => {
	const [galleryItems, setGalleryItems] = useState(home5GalleryData);
	const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);
	const [active, setActive] = useState('all');


	// filter item
	const filterItems = (category) => {
		setActive(category)
		if (category === 'all') {
			return setFilterGalleryItems(uniqueItem)
		}
		const remainingItem = galleryItems.filter((item) => {
			return item.category === category
		})
		setFilterGalleryItems(remainingItem)
	}

	return (
		<>
			<div className="photo-gallery pt-180 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
							<div className="section-title text-center pos-rel mb-75">
								<div className="section-icon">
									<img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
								</div>
								<div className="section-text pos-rel">
									<h5>Photo Gallery</h5>
									<h1>Relationship We Have With You Special</h1>
								</div>
								<div className="section-line pos-rel">
									<img src="img/shape/section-title-line.png" alt=""/>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="gallery-button mb-50">
								<div className="gallery-filter">
									<button className={active === 'all' ? 'active' : null}
									onClick={() => filterItems('all')}>show all</button>

									<button className={active === 'dental' ? 'active' : null}
									onClick={() => filterItems('dental')}>Dental</button>

									<button className={active === 'Neurology' ? 'active' : null}
									 onClick={() => filterItems('Neurology')}>Neurology</button>

									<button className={active === 'Surgery' ? 'active' : null}
									onClick={() => filterItems('Surgery')}>Surgery</button>

									<button className={active === 'Medicin' ? 'active' : null}
									onClick={() => filterItems('Medicin')}>Medicin</button>
								</div>
							</div>
						</div>
					</div>



					<div className='row gallery-portfolio'>
						{
							filterGalleryItems.map((gallery, index) => <HomeFiveSingleGallery key={gallery.id} gallery={gallery}
								galleryData={filterGalleryItems} index={index} />)
						}
					</div>


				</div>
			</div>
		</>
	);
};

export default HomeFiveGallery;