import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import cartLogo from "./images/cart-logo.png";
import companyLogo from "./images/company-logo.png";
const resList = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "457016",
        "name": "Day 2 Day Bakers",
        "uuid": "6fa9ccae-c780-46ae-9a72-b4f972992e0c",
        "city": "65",
        "area": "Naya Bazaar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "vnwnpsqofp9osh3iloex",
        "cuisines": [
          "Bakery"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "day-2-day-bakers-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Nagdev Mandir Road Chatri Bazar, Lashkar, Gwalior",
        "locality": "Nagdev Mandir Road",
        "parentId": 275035,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "",
          "subHeader": "",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "457016",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "85434",
        "name": "Hungry Birds",
        "uuid": "5cc09081-94d7-4ffd-88ef-d3aba135d061",
        "city": "65",
        "area": "Roshni Ghar Mohalla",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "Swiggy-Dash/tmvipnrtygp6c6ijxjaj",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [

        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "hungry-birds-naya-bazaar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Opposite The Ved Mantra Hotel, Roshni Road, Inderganj, Naya Bazaar, Gwalior",
        "locality": "Roshni Road",
        "parentId": 3154,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7221607~p=19~eid=00000189-3f8e-7fee-0f5e-560600121356~srvts=1688988450798",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "85434",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.5",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "148935",
        "name": "Bajaj Juice Centre",
        "uuid": "0effac20-188f-41b5-ad42-f3ee2bb5c799",
        "city": "65",
        "area": "Lashkar",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "akmrf7f5m1zfzl3ifhi8",
        "cuisines": [
          "Juices",
          "Beverages"
        ],
        "tags": [

        ],
        "costForTwo": 7500,
        "costForTwoString": "₹75 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "bajaj-juice-centre-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "near janakganj dispensary",
        "locality": "Janakganj",
        "parentId": 39751,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "148935",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "96227",
        "name": "The Treat Pizza",
        "uuid": "e3911070-2686-491f-bdfb-bea7ac41bd80",
        "city": "65",
        "area": "Lashkar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "nzz3qdkkzlyrixepgebj",
        "cuisines": [
          "Desserts",
          "Chinese"
        ],
        "tags": [

        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "the-treat-fast-food-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Infront of Janakganj School, Hanuman Chauraha, Janakganj, Lashkar, Gwalior",
        "locality": "Hanuman Chauraha",
        "parentId": 214871,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "",
          "subHeader": "",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "96227",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "101651",
        "name": "Chotiwala",
        "uuid": "e38a9bd4-13bd-45aa-af99-ec2739950efa",
        "city": "65",
        "area": "Station Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "asr5lahfrmx8imyspbn8",
        "cuisines": [
          "Indian",
          "North Indian",
          "Sweets"
        ],
        "tags": [

        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 4.699999809265137,
        "slugs": {
          "restaurant": "choti-wala-thatipur-city-centre",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Near DB City Mall, Station Road, Railway Colony, In front of Gwalior Junction Railway Station, Thatipur, Gwalior",
        "locality": "DB City Mall",
        "parentId": 62758,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7218866~p=22~eid=00000189-3f8e-7fee-0f5e-560700121670~srvts=1688988450798",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "4.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "101651",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 4.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "139716",
        "name": "Shri Ram Dabeli Center",
        "uuid": "596c9642-4ae4-4e02-b813-710ac8136f81",
        "city": "65",
        "area": "Daulat Ganj",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "jjib9i5kct6wjhsfskmu",
        "cuisines": [
          "Beverages"
        ],
        "tags": [

        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "shri-ram-dabeli-centre-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Madhav Ganj Square, Kampoo Road, Lashkar, Gwalior",
        "locality": "Kampoo Road",
        "parentId": 231037,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "139716",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "433527",
        "name": "Central Perk",
        "uuid": "00c60404-4e92-4de4-8178-24dd84f1faae",
        "city": "65",
        "area": "Lashkar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "d3rwfqc8razpkivtncd3",
        "cuisines": [
          "Beverages",
          "Chinese",
          "Continental",
          "Snacks"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "vikash-shivhare-m/s-hungers-snacks-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Govind Ashram Ke Samne, Chitnish ki Goth, Lashkar",
        "locality": "Rajmani Mall",
        "parentId": 56356,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "433527",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.2",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "85440",
        "name": "Ashoka Family Restaurant",
        "uuid": "9ac6695e-e6a4-4c81-bb09-581797122b90",
        "city": "65",
        "area": "Thatipur",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "gcnqybd5c0akg5wbfslp",
        "cuisines": [
          "Indian",
          "North Indian",
          "Biryani",
          "Tandoor"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "ashoka-family-restaurant-thatipur-city-centre",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Railway Colony, Near Gwalior Junction Railway Station, Thatipur, Gwalior",
        "locality": "Railway Colony",
        "parentId": 37002,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7221609~p=25~eid=00000189-3f8e-7fee-0f5e-56080012192e~srvts=1688988450798",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "85440",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "425006",
        "name": "Nikhar Bakery",
        "uuid": "d4a016bf-9fc5-4bc7-a505-5dcd7116cd63",
        "city": "65",
        "area": "Madhav Ganj",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "hwfwgaxt57ttoqrci8q9",
        "cuisines": [
          "Bakery"
        ],
        "tags": [

        ],
        "costForTwo": 18000,
        "costForTwoString": "₹180 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "nikhar-bakers-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Nikhar Provision, Lala Ka Bazar, Lashkar, Gwalior",
        "locality": "Lala Ka Bazar",
        "parentId": 314104,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "",
          "subHeader": "",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "425006",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "140959",
        "name": "Baba Bakery",
        "uuid": "eaad0612-eb8d-46e8-a090-23232b656d94",
        "city": "65",
        "area": "Madhav Ganj",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "avxwni1aa3oue92sjuqz",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [

        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "baba-bakery-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Lala Ka Bazaar, Near Water Tank, Lashkar, Gwalior",
        "locality": "Daulat Ganj",
        "parentId": 19661,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "140959",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "2.7",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "256741",
        "name": "Masala Darbar",
        "uuid": "2510f9a1-d28c-4b66-90c9-16e117c85bb9",
        "city": "65",
        "area": "Lalitpur Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "z8yujzu8o61pnehitacf",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Punjabi"
        ],
        "tags": [

        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "masala-darbar-city-centre-city-centre",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "MD2 Opposite Petrol Pump, Achleshwar Temple Road, Lashkar",
        "locality": "Achleshwar Temple Road",
        "parentId": 4123,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7218860~p=28~eid=00000189-3f8e-7fee-0f5e-560900121c1b~srvts=1688988450798",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "256741",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "586062",
        "name": "Shivam Pav Bhaji And Pulav Centre",
        "uuid": "2ddcf2f3-f8cc-4cd2-b68e-3199b43803f7",
        "city": "65",
        "area": "Lashkar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "yhazvbcjdqgamty8vsjr",
        "cuisines": [
          "Street Food",
          "South Indian",
          "Chinese"
        ],
        "tags": [

        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "slaString": "15 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "shivam-pav-bhaji-masala-dosa-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Near Corporation Bank, Phalka Bazar, Lashkar, Gwalior 474001",
        "locality": "Daulat Ganj",
        "parentId": 355690,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "586062",
          "deliveryTime": 15,
          "minDeliveryTime": 15,
          "maxDeliveryTime": 15,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "197548",
        "name": "Kaurav Sweets",
        "uuid": "c8ce97bc-719f-4a53-84cd-11effa7deca7",
        "city": "65",
        "area": "Naya Bazaar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "nxt6jplnmdcfoqhuwtjb",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Sweets"
        ],
        "tags": [

        ],
        "costForTwo": 12500,
        "costForTwoString": "₹125 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "kaurav-sweets-lashkar-lashkar",
          "city": "gwalior"
        },
        "cityState": "65",
        "address": "Kaurav Sweets, Madhav Ganj Chauraha, Lashkar, Gwalior",
        "locality": "Madhav Ganj Chauraha",
        "parentId": 115781,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [

        ],
        "chain": [

        ],
        "feeDetails": {
          "fees": [

          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [

          ],
          "textBased": [

          ],
          "textExtendedBadges": [

          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "",
          "headerTypeV2": 1
        },
        "sla": {
          "restaurantId": "197548",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.2",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false

  }]


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const hamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="company-logo"
          src={companyLogo}
          alt="Company Logo" />
      </div>
      <div className={
        `nav-items ${isActive ? "active" : ""
        }`
      }>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#">Home</a>
          </li>
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Contact</a>
          </li>
          <li className="nav-link">
            <a href="#">
              <img className="cart-logo"
                src={cartLogo}
                alt="Cart" />
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger"
        onClick={hamburgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(props);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, id } = resData?.data.data;

  return (
    <div className="card" key={id}>
      <div className="card-logo">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}  />
      </div>
      <div className="card-name heading">{name}</div>
      <div className="cuisine">{cuisines.join(', ')}</div>
      <span className="rating">{avgRating}</span>
      <span className="price">{costForTwo / 100}</span>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-container">
      {resList.map((element) => <RestaurantCard key={element.data.data.id} resData={element} />
      )}
    </div>
  );
}

const Footer = () => {

}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppLayout />);

