import { Stack } from '@mui/material'
import React from 'react'
import RecipeReviewCard from './Card'
import Imageun from './../img/téléchargement.jpeg'
import Imagedeux from './../img/garbage-recycle.svg' 
const evenement=[
  {
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },{
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imagedeux
  },{
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },{
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },
  {
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },
  {
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },{
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },{
    title:'Environment Day',
    firstView:'Only One Earth',
    viewMoreOne:'World Environment Day 2022 is hosted by Sweden. “Only One Earth" is the campaign slogan, with the focus on “Living Sustainably in Harmony with Nature”.',
    viewMoreTwo:'THE HOST. Each year, World Environment Day is hosted by a different country where the official celebrations take place. The host country for 2022 is Sweden.',
    viewMoretrois:'What is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for environmental public outreach and is celebrated by millions of people across the world. This year it is hosted by Sweden',
    viewMoreFour:'The concept of celebrating World Environment Day was first conceptualised in 1972 s United Nations Conference on Human Environment that was held in Stockholm.',
    date:'Sunday, 5 June 2022',
    viewMoreFive:" Swear by three R's. Every year, the UN (United Nations) has a specific world environment day theme and the theme for 2022 is Only One Earth. In line with the theme, you can contribute to the cause by adopting the concept of the three R's, i.e., Reduce, Reuse and Recycle",
    name:'ONU',
    photo: Imageun
  },
]

function Event() {
  return (
    <Stack sx={{alignItems: 'center'}} direction='row' gap={5} justifyContent='center' flexWrap='wrap'>
        {evenement.map(ev=>(<RecipeReviewCard viewMoreFive={ev.viewMoreFive} viewMoreFour={ev.viewMoreFour} viewMoretrois={ev.viewMoretrois} viewMoreTwo={ev.viewMoreTwo} date={ev.date} viewMoreOne={ev.viewMoreOne} firstView={ev.firstView} photo={ev.photo} title={ev.title} name={ev.name}  />   ))}     
    </Stack>
  )
}

export default Event