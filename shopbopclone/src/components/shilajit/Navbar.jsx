/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const navigation = {
  categories: [
    {
      id: 'whatsnew',
      name: "WHAT'S NEW",
      featured: [
        {
          name: 'The Dress Shop',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_whatsnew_slot1_dresses.jpg',
          imageAlt: '',
        },
        // {
        //   name: 'Basic Tees',
        //   href: '/',
        //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        //   imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        // },
      ],
      sections: [
        {
          id: 'wn',
          name: "WHAT'S NEW",
          items: [
            { name: 'New Today', href: '/productPage' },
            { name: 'New This Week', href: '/' },
            { name: 'Top Sellers', href: '/' },
            { name: 'Designer Boutique', href: '/' },
            { name: "All What's New", href: '/' },

          ],
        },
        {
          id: 'newbycategory',
          name: "WHAT'S NEW BY CATEGORY",
          items: [
            { name: 'Clothing', href: '/' },
            { name: 'Shoes', href: '/' },
            { name: 'Bags', href: '/' },
            { name: 'Jewelery & Accessories', href: '/' },
            { name: 'Men', href: '/' },

          ],
        },
        {
          id: 'discover',
          name: 'DISCOVER',
          items: [
            { name: 'Party Perfect', href: '/' },
            { name: 'Destination Dresses', href: '/' },
            { name: 'The Latest From Cult Gala', href: '/' },
            { name: 'Adventure Time', href: '/' },
            { name: 'Dream Dresses', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'ourfav',
      name: 'OUR FAVORITES',
      featured: [
        {
          name: 'Dress Shop',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot1_topsellers.jpg',
          imageAlt: 'Dress Shop',
        },
        {
          name: 'Most-Hearted Styles',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2021/2021_07/sb_20210719_desktop_ourfavorites_slot2_mosthearted.jpg',
          imageAlt: 'Most-Hearted Styles',
        },
        {
          name: 'Vacation Wardrobe',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot3_vacation.jpg',
          imageAlt: 'Vacation Wardrobe',
        },
      ],
      sections: [
        {
          id: 'ofav',
          name: 'OUR FAVORITES',
          items: [
            { name: "Spring'22 Trend Edit", href: '/fav' },
            { name: 'AAPI Designers & AAPI-Owned Brands', href: '/' },
            { name: 'Back in Stock', href: '/' },
            { name: 'Denim', href: '/' },
            { name: "Caroline Hearts", href: '/' },
            { name: 'Designer Boutique', href: '/' },
            { name: "Editors' Picks", href: '/' },
            { name: 'Fashion Finds:Under $200', href: '/' },
            { name: 'Most Hearted Styles', href: '/' },
            { name: 'Shopbop Exclusives', href: '/' },
            { name: 'Top Sellers', href: '/' },
          ],
        },
        {
          id: 'oca',
          name: 'SHOP BY OCCASION',
          items: [
            { name: 'Best-Dressed Guest', href: '/' },
            { name: 'Daytime Drama', href: '/' },
            { name: 'New 9-To-5', href: '/' },
            { name: 'The Dress Shop', href: '/' },
            { name: 'Vacation Wardrobe', href: '/' },
            { name: 'Wedding Shop', href: '/' },
          ],
        },
        // {
        //   id: 'brands',
        //   name: 'Brands',
        //   items: [
        //     { name: 'Full Nelson', href: '/' },
        //     { name: 'My Way', href: '/' },
        //     { name: 'Re-Arranged', href: '/' },
        //     { name: 'Counterfeit', href: '/' },
        //     { name: 'Significant Other', href: '/' },
        //   ],
        // },
      ],
    },
    {
      id: 'designer',
      name: 'DESIGNERS',
      featured: [
        {
          name: 'Polished Pieces',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_designers_slot1_NiliLotan.jpg',
          imageAlt: 'polished',
        },
        {
          name: 'Just Beachy:Cult Gaia',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_designers_slot2_cultgaia.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'designerss',
          name: 'DESIGNERS',
          items: [
            { name: 'Designer Boutique Index', href: '/' },
            { name: "All Women's Desginers", href: '/' },
            { name: "All Men's Designers", href: '/' },

          ],
        },
        {
          id: 'nameknow',
          name: 'NAMES TO KNOW',
          items: [
            { name: 'La Double J', href: '/' },
            { name: 'GANNI', href: '/' },
            { name: 'Nanushka', href: '/' },
            { name: 'STAUD', href: '/' },
            { name: 'STAUD STUDIO', href: '/' },

          ],
        },
        {
          id: 'topdesigners',
          name: 'TOP DESINERS',
          items: [
            { name: 'AGOLDE', href: '/' },
            { name: 'Golden', href: '/' },
            { name: 'MOTHER', href: '/' },
            { name: 'Ulla Johnson', href: '/' },
            { name: 'Vince', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'clothing',
      name: 'CLOTHING',
      featured: [
        {
          name: 'New From English Factory',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_clothing_slot1_EnglishFactory.jpg',
          imageAlt: '',
        },
        {
          name: 'One-Shoulder Dresses',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_clothing_slot2_oneshoulder.jpg',
          imageAlt: '',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'ActiveWear & Loungewear', href: '/' },
            { name: 'Coats', href: '/' },
            { name: 'Dresses', href: '/' },
            { name: 'Jackets', href: '/' },
            { name: 'Jeans', href: '/' },
            { name: 'JumpSuits & Rompers', href: '/' },
            { name: 'Jackets', href: '/' },
            { name: 'Jeans', href: '/' },
            { name: 'Jumpsuits & Rompers', href: '/' },
            { name: 'Lingerie', href: '/' },
            { name: 'Matching Sets', href: '/' },
            { name: 'Maternity', href: '/' },
            { name: 'Pants', href: '/' },
            { name: 'Shorts', href: '/' },
            { name: 'Skirts', href: '/' },
            { name: 'Sleepwear', href: '/' },
            { name: 'Sweaters & Knits', href: '/' },
            { name: 'Swimsuits & Cover-Ups', href: '/' },
            { name: 'Tops', href: '/' },
            { name: 'All Clothing', href: '/' },

          ],
        },
        {
          id: 'nametoknowcloth',
          name: 'NAME TO KNOW',
          items: [
            { name: 'AGOLDE', href: '/' },
            { name: "Levi's", href: '/' },
            { name: 'MOTHER', href: '/' },
            { name: 'Sea', href: '/' },
            { name: 'Vince', href: '/' },

          ],
        },
        {
          id: 'discover',
          name: 'DISCOVER',
          items: [
            { name: 'Black Designer', href: '/' },
            { name: 'Designer Boutique', href: '/' },
            { name: "Editors' Picks", href: '/' },
            { name: 'Extended Sizes', href: '/' },
            { name: 'Top Sellers', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'active',
      name: 'ACTIVE',
      featured: [
        {
          name: 'Now Trending :Tennis Style',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot1_tennis.jpg',
          imageAlt: '',
        },
        {
          name: 'Gear Up:Active Stapies',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot2_accessories.jpg',
          imageAlt: '',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'CLOTHING',
          items: [
            { name: 'Dresses & Jumpsuits', href: '/' },
            { name: 'Leggings', href: '/' },
            { name: 'Matching Sets', href: '/' },
            { name: 'Shorts & Skirts', href: '/' },
            { name: 'Sports Bras', href: '/' },
            { name: 'SweatPants', href: '/' },
            { name: 'Sweatshirts & Jackets', href: '/' },
            { name: 'Tops', href: '/' },
            { name: 'All Clothing', href: '/' },
          ],
        },
        {
          id: 'accessories',
          name: 'ACCESSORIES',
          items: [
            { name: 'Active Accessories', href: '/' },
            { name: 'Bags', href: '/' },
            { name: 'Sneakers', href: '/' },

          ],
        },
        {
          id: 'activeknow',
          name: 'NAMES TO KNOW',
          items: [
            { name: 'Alo Yoga', href: '/' },
            { name: 'Beyond Yoga', href: '/' },
            { name: 'Girlfriend Collective', href: '/' },
            { name: 'Sweet Betty', href: '/' },
            { name: 'Year of Ours', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'shoes',
      name: 'SHOES',
      featured: [
        {
          name: 'Step into Badgley Mischka',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot1_BadgleyMishka.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Lace Up In Soludos',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot2_Soludos.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'shoe',
          name: 'SHOES',
          items: [
            { name: 'Boots', href: '/' },
            { name: 'Espadrilles', href: '/' },
            { name: 'flats', href: '/' },
            { name: 'Mules & Slides', href: '/' },
            { name: 'Pummps', href: '/' },
            { name: 'Rain Boots', href: '/' },
            { name: 'Sandals', href: '/' },
            { name: 'Sneakers & Athleticc', href: '/' },
            { name: 'All Shoes', href: '/' },
          ],
        },
        {
          id: 'shoeknow',
          name: 'NAMES TO KNOW',
          items: [
            { name: 'Gia Borghini', href: '/' },
            { name: 'Golden Goose', href: '/' },
            { name: 'Kahumune', href: '/' },
            { name: 'Larroude', href: '/' },
            { name: 'On', href: '/' },
            
          ],
        },
        {
          id: 'shoedis',
          name: 'DISCOVER',
          items: [
            { name: 'Wedding Shoes', href: '/' },
            { name: 'Evening-Ready Shoes', href: '/' },
            { name: 'Cool Clogs', href: '/' },
            { name: 'Puffed-Up Pairs', href: '/' },
            { name: 'Strappy Sandals', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'bag',
      name: 'BAGS',
      featured: [
        {
          name: 'Spotlight On:Ree Projects',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_bags_slot1_ReeProjects.jpg',
          imageAlt: '',
        },
        {
          name: 'Bring-It-All Bucket Bags',
          href: '/',
          imageSrc: 'https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_bags_slot2_bucketbags.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'bags',
          name: 'BAGS',
          items: [
            { name: 'Backpacks', href: '/bag' },
            { name: 'Beach & Straw Bags', href: '/' },
            { name: 'Bucket Bags', href: '/' },
            { name: 'Cluthes', href: '/' },
            { name: 'Cross Body Bags', href: '/' },
            { name: 'Luggage & Weekenders', href: '/' },
            { name: 'Mini Bags', href: '/' },
            { name: 'Satchels & Top Handles', href: '/' },
            { name: 'Shoulder Bags', href: '/' },
            { name: 'Totes', href: '/' },
            { name: 'Wallets & Card Holders', href: '/' },
            { name: 'Bag Accessories & Pouches', href: '/' },
            { name: 'All Bags', href: '/' },
          ],
        },
        {
          id: 'bagknow',
          name: 'NAMES TO KNOW',
          items: [
            { name: 'Clare V.', href: '/' },
            { name: 'JW Anderson', href: '/' },
            { name: 'Marc Jacobs', href: '/' },
            { name: 'STAUD', href: '/' },
            { name: 'Tory Burch', href: '/' },
            
          ],
        },
        {
          id: 'trends',
          name: 'TRENDS',
          items: [
            { name: 'Cool Crochet', href: '/' },
            { name: 'Neutral Tones', href: '/' },
            { name: 'Night-Out Bags', href: '/' },
            { name: 'Vintage Bags', href: '/' },
      
            
          ],
        },
      ],
    },
    {
      id: 'Whats New',
      name: 'ACCESSORIES',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/Acc' },
            { name: 'Dresses', href: '/' },
            { name: 'Pants', href: '/' },
            { name: 'Denim', href: '/' },
            { name: 'Sweaters', href: '/' },
            { name: 'T-Shirts', href: '/' },
            { name: 'Jackets', href: '/' },
            { name: 'Activewear', href: '/' },
            { name: 'Browse All', href: '/' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/' },
            { name: 'Wallets', href: '/' },
            { name: 'Bags', href: '/' },
            { name: 'Sunglasses', href: '/' },
            { name: 'Hats', href: '/' },
            { name: 'Belts', href: '/' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '/' },
            { name: 'My Way', href: '/' },
            { name: 'Re-Arranged', href: '/' },
            { name: 'Counterfeit', href: '/' },
            { name: 'Significant Other', href: '/' },
          ],
        },
      ],
    },

    {
      id: 'men',
      name: 'MEN',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/Men' },
            { name: 'Pants', href: '/' },
            { name: 'Sweaters', href: '/' },
            { name: 'T-Shirts', href: '/' },
            { name: 'Jackets', href: '/' },
            { name: 'Activewear', href: '/' },
            { name: 'Browse All', href: '/' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/' },
            { name: 'Wallets', href: '/' },
            { name: 'Bags', href: '/' },
            { name: 'Sunglasses', href: '/' },
            { name: 'Hats', href: '/' },
            { name: 'Belts', href: '/' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '/' },
            { name: 'Counterfeit', href: '/' },
            { name: 'Full Nelson', href: '/' },
            { name: 'My Way', href: '/' },
          ],
        },
      ],
    },
    {
      id: 'sale',
      name: 'SALE',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/' },
            { name: 'Dresses', href: '/' },
            { name: 'Pants', href: '/' },
            { name: 'Denim', href: '/' },
            { name: 'Sweaters', href: '/' },
            { name: 'T-Shirts', href: '/' },
            { name: 'Jackets', href: '/' },
            { name: 'Activewear', href: '/' },
            { name: 'Browse All', href: '/' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/' },
            { name: 'Wallets', href: '/' },
            { name: 'Bags', href: '/' },
            { name: 'Sunglasses', href: '/' },
            { name: 'Hats', href: '/' },
            { name: 'Belts', href: '/' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '/' },
            { name: 'My Way', href: '/' },
            { name: 'Re-Arranged', href: '/' },
            { name: 'Counterfeit', href: '/' },
            { name: 'Significant Other', href: '/' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: '', href: '' },
    { name: '', href: '' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative text-sm">
                            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                            </div>
                            <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute z-10 inset-0" aria-hidden="true" />
                              {item.name}
                            </Link>
                           <Link to={"/productPage"}>
                           <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                           </Link>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link to={item.href} className="-m-2 p-2 block text-gray-500">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>


      <header className="relative bg-white">

        <div className="relative flex  lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-12 bg-gray-100" >
          <p className="bg-gray-100 h-10 flex items-center justify-center text-sm font-medium text-black px-4 sm:px-12 lg:px-12">
            FREE express international delivery + EASY returns
          
            <span style={{marginLeft:"220px"}} className=" bg-gray-100 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-12">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to={"/Login"} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Sign in
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link to={"/Signup"} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Create account
                </Link>
              </div>
            </span>
            <span>


              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="/" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </span>
            <span>
              {/* Cart */}
           
             <div className="ml-4 flow-root lg:ml-6">
             <Link to={"/cart"}>
                <a className="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />

                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
                </Link>
              </div>
            </span>
          </p>


        </div>
        <Link to={"/"}>
              <h1 style={{fontSize:"50px",marginTop:"50px"}} className="  font-large  bg-white-100 h-10 flex items-center justify-center text-sm font-medium text-black px-4 sm:px-12 lg:px-12">Shopbop</h1>
</Link>

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-3 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-center object-cover"
                                            />
                                          </div>
                                          <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                            {item.name}
                                          </Link>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <Link to={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="/" className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                {/* <div className="flex lg:ml-6">
                  <a href="/" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div> */}

                {/* Cart */}
                {/* <div className="ml-4 flow-root lg:ml-6">
                  <a href="/" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
