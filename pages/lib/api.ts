import client from './sanity';

const blogFields = `
text,
'image':image.asset->url,
title,`

const hrcard = `
title,
text,
text1,
text2,
`

const bannercard = `
'image':image.asset->url,
alttext,
slug,
`
const bordernone = `
title,
descripition,
`

const headtwo = `
header`


//FOOTER DATA

const footerbrnd = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
`
const footercarer = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const footercompny = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const footercontact = `
header,
cOne,
cTwo,
`

const footerdevlpt = `
header,
cOne,
cTwo,
cThree,
cFour,
`

const footerinvestr = `
header,
cOne,
cTwo,
`

const footerPressRom = `
header,
cOne,
cTwo,
`

const footerResponsibil = `
header,
cOne,
cTwo,
`

const subfooter = `
headerOne,
headerTwo,
headerThree,
headerFour,
headerFive,
`

const joinus = `
content,
btn, 
`

const footerdwn = `
'logo':logo.asset->url,
'TajIcon':TajIcon.asset->url,
'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
'vivantaIcon':vivantaIcon.asset->url,
'gingerIcon':gingerIcon.asset->url,
'expressionsIcon':expressionsIcon.asset->url,
'tajSatsIcon':tajSatsIcon.asset->url,
brands,
content,
`
export async function getAllBlogs() {

  const results = await client
    .fetch(`*[_type =="contact"]{${blogFields}}`);
  return results;
}

export async function getAllBlog() {
  const results = await client
    .fetch(`*[_type =="hrcard"]{${hrcard}}`);
  return results;
}

export async function getAll() {
  const results = await client
    .fetch(`*[_type =="banner"]{${bannercard}}`);
  return results;
}

export async function witoutcard() {
  const results = await client
    .fetch(`*[_type =="bordernone"]{${bordernone}}`);
  return results;
}

export async function getheadtwo() {
  const results = await client
    .fetch(`*[_type =="header"]{${headtwo}}`);
  return results;
}


export async function getBrands() {
  const results = await client
    .fetch(`*[_type =="footerBrands"]{${footerbrnd}}`);
  return results;
}

export async function getCareer() {
  const results = await client
    .fetch(`*[_type =="footerCareer"]{${footercarer}}`);
  return results;
}


export async function getCompany() {
  const results = await client
    .fetch(`*[_type =="footerCompany"]{${footercompny}}`);
  return results;
}


export async function getContact() {
  const results = await client
    .fetch(`*[_type =="footerContact"]{${footercontact}}`);
  return results;
}



export async function getDevlopmnt() {
  const results = await client
    .fetch(`*[_type =="footerDevelopment"]{${footerdevlpt}}`);
  return results;
}


export async function getInvestor() {
  const results = await client
    .fetch(`*[_type =="footerInvestors"]{${footerinvestr}}`);
  return results;
}

export async function getPressrom() {
  const results = await client
    .fetch(`*[_type =="footerPressRoom"]{${footerPressRom}}`);
  return results;
}

export async function getResponsibil() {
  const results = await client
    .fetch(`*[_type =="footerResponsibility"]{${footerResponsibil}}`);
  return results;
}

export async function getSubfooter() {
  const results = await client
    .fetch(`*[_type =="subFooter"]{${subfooter}}`);
  return results;
}

export async function getJoinUS() {
  const results = await client
    .fetch(`*[_type =="joinUs"]{${joinus}}`);
  return results;
}

export async function getFooter() {
  const results = await client
    .fetch(`*[_type =="footer"]{${footerdwn}}`);
  return results;
}




