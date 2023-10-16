import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare,
   
} from '@iconscout/react-unicons'

//importing the images
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

//create an empty array
export const SidebarData =[

    {
        icon:UilEstate,
        heading:'Dashboard'
    },
    {
        icon:UilPackage,
        heading:'Products'
    },
    {
        icon:UilUsersAlt,
        heading:'Customers'
    },
    {
        icon:UilClipboardAlt,
        heading:'Income'
    },
    {
        icon:UilChart,
        heading:'Promote'
    },
    {
        icon:UilSignOutAlt,
       
    },
]

//array for cards

export const CardsData =[
    {
        title: "Earnings",
        color: {
          backGround: "linear-gradient(180deg, #FFFFFF 0%, #c484f3 100%)",
          boxShadow: "1px 1px 5px 1px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
          {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ],
      },
      {
        title: "Oders",
        color: {
          backGround: "linear-gradient(180deg, #FFFFFF 0%, #FC929D 100%)",
          boxShadow: "1px 1px 5px 1px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "Revenue",
            data: [10, 100, 50, 70, 80, 30, 40],
          },
        ],
      },
      {
        title: "Balance",
        color: {
          
          backGround: "linear-gradient(180deg, #FFFFFF 0%, #D3D3D3 100%)",
          boxShadow: "1px 1px 5px 1px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
          {
            name: "Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
        ],
      },
      
]



//data for the update component

export const UpdateData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Noah samuel",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];



























