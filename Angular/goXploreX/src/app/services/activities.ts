import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { activitiesTemplate } from './activitiestemplate';

@Injectable({
  providedIn: 'root',
})
export class Activities {
  allActivities: activitiesTemplate[] = [
    {
      id: '1',
      city: 'Hyderabad',
      name: 'Wonderla Amusement Park | Hyderabad',
      price: '998',
      image:
        'https://media.insider.in/image/upload/c_crop,g_custom/v1760469661/q4giher3dqtauwcwxuyw.jpg',
      gallery: [
        'https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1760469639%2Fl90tsosq6ou3uc1fslmy.jpg',
        'https://media.insider.in/image/upload/w_800/v1746710699/fu2txd7z8buaiyertynw.jpg',
        'https://media.insider.in/image/upload/w_800/v1746710720/dvonrdymtgk9lq5kqt5m.jpg',
      ],
      description:
        `Nestled on the outskirts of Hyderabad, Wonderla is a world-class amusement and water park offering 40+ exhilarating rides and attractions for all ages. From high-thrill roller coasters to serene water slides and a massive wave pool, it’s a perfect escape for fun-seekers. With clean facilities, great food options, and vibrant shows, Wonderla Hyderabad promises a full day of excitement, laughter, and unforgettable moments.`,
      rating: '4.7',
      category: 'Theme Parks, Water Parks',
    },
    {
      id: '2',
      city: 'Warangal',
      name: 'Thousand Pillar Temple Visit',
      price: '100',
      image:
        'https://s7ap1.scene7.com/is/image/incredibleindia/thousand-pillar-temple-warangal-telangana-1-attr-hero?qlt=82&ts=1726653531894',
      gallery: [
        'https://www.trawell.in/admin/images/upload/2498448881000PillarTemple_Main.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjJfNpBfPeTCxzFoIdKTwhrv7rp_PB5TrX7l8WB4Dx10RROtvG8KAIHoCLEiZe0itbbd5j2L2ogZky9zWz0fqbK1K9NFN1AnExfFz0aPbUGrvU2DZmom6RfuL5zc0khyphenhyphen-winQkzZ5trtOZKaIf9kEVSA_pUm3LYQaxtGty-VB6lH8EQDN4sRRX3GFfR11Y/s800/IMG_20250413_125829609_HDR.jpg',
      ],
      description:
        'A masterpiece from the Kakatiya era, the Thousand Pillar Temple is dedicated to Lord Shiva, Vishnu, and Surya. Its stunning architecture, intricate stone carvings, and historical significance attract heritage lovers and pilgrims alike.',
      rating: '4.6',
      category: 'Heritage',
    },
    {
      id: '3',
      city: 'Hyderabad',
      name: 'Charminar Night Visit',
      price: '50',
      image:
        'https://assets.cntraveller.in/photos/67e630bea747402e353c2e61/master/w_1024%2Cc_limit/GettyImages-173397936.jpg',
      gallery: [
        'https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=',
        'https://t4.ftcdn.net/jpg/04/33/20/53/360_F_433205394_HueCTKotAWLEAGlERvdiIyV9yisqA0XH.jpg',
      ],
      description:
        'Visit the iconic Charminar at night and explore its majestic architecture illuminated under the city lights. Wander through the nearby Laad Bazaar for pearls, bangles, and local delicacies while soaking in the cultural vibe of Hyderabad.',
      rating: '4.2',
      category: 'Heritage',
    },
    {
      id: '4',
      city: 'Hyderabad',
      name: 'Ramoji Film City Tour',
      price: '1200',
      image:
        'https://media.insider.in/image/upload/c_crop,g_custom/v1744633521/kgyjpruxsugd9fgtldch.jpg',
      gallery: [
        'https://hyderabadtourism.co.in/wp-content/uploads/2023/09/Ramoji-Film-City.webp',
        'https://fortunefourtours.com/wp-content/uploads/2025/02/Ramoji-Film-City-Hyderabad-1.webp',
        'https://www.explorebees.com/uploads/tour/Ramoji+Film+City+Star+Experience+by+AC+CAR_3.jpg',
      ],
      description:
        'Explore the world’s largest film studio complex with guided tours, cinematic sets, and thrilling adventure rides. The park offers an immersive experience with movie-making zones, live performances, and behind-the-scenes glimpses of India’s film industry. Perfect for both families and film enthusiasts.',
      rating: '4.7',
      category: 'Theme Park',
    },
  ];

  getActivities() {
    sessionStorage.setItem('activites', JSON.stringify(this.allActivities));
    return of(this.allActivities);
  }


  getActivityDetials(aid:any){
    let actid = this.allActivities.findIndex((i) => i.id == aid);
    return this.allActivities[actid]
  }

  addActivity(activity: any) {
    this.allActivities.push(activity);
    return 'Activity Added';
  }

  deleteActivity(activityId: any) {
    let deleteid = this.allActivities.findIndex((i) => i.id == activityId);

    if (deleteid != -1) {
      this.allActivities.splice(deleteid, 1);

      return 'Activity Deleted...';
    } else {
      return 'Activity Not Found...!!!';
    }
  }

  updateActivity(uact: any) {
    const index = this.allActivities.findIndex((i) => i.id === uact.id);

    if (index !== -1) {
      this.allActivities.splice(index, 1, uact);
      alert('Activity updated successfully!');
    } else {
      alert('Activity not found!');
    }
  }
}
