import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { allEvents } from './eventtemplate';

@Injectable({
  providedIn: 'root',
})
export class Events {
  allEvents: allEvents[] = [
    {
      id: '1',
      city: 'Hyderabad',
      name: 'A.R. Rahman Live in Hyderabad',
      price: '2399',
      image:
        'https://media.insider.in/image/upload/c_crop,g_custom/v1752645571/uw7i63aggwcnp88qdvtd.jpg',
      gallery: [
        'https://media.insider.in/image/upload/w_800/v1750414213/pn6kzqnoousiiwdvh8hw.jpg',
        'https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1752645561%2Fsxhhczf56xm5yjkcgqaa.jpg',
        'https://media.insider.in/image/upload/w_800/v1750414213/feggo2xjzxnzf9vieyje.jpg',
      ],
      description: `The legend. The maestro. The magic, A.R. Rahman is coming back to Hyderabad, and this time, it’s bigger, bolder, and more breathtaking than ever before.


Do you remember the goosebumps from 2017 when 25,000 voices united in harmony to chant Maa Tujhe Salaam? That unforgettable night lit up the city and now, it’s time to relive the magic.


Hyderabad Talkies presents AR Rahman LIVE in Hyderabad in association with Eva Live and Event Partner Xora - a spectacular celebration of music, emotion, and imagination. Imagine yourself immersed in a world where cutting-edge visuals dance with the soul-stirring tunes of A.R. Rahman. From the iconic anthems that defined a generation to his latest sonic explorations, this concert promises to be an unforgettable journey through sound and emotion. Hyderabad Talkies is pulling out all the stops to create a truly spectacular event with groundbreaking stage design.


Don't just hear about it; be there to feel the energy, live the magic, and create new memories. This isn't just a concert; it's a phenomenon waiting to be experienced.


Step into a world where music, magic, and A.R. Rahman’s genius collide. Get ready to be swept off your feet — don’t just watch, be part of the wonder.


For bulk bookings: https://bit.ly/44kxgcy`,
      rating: '4.8',
      directions:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40252.410810442765!2d78.44737333970191!3d17.386873731311642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1760946919795!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
      id: '2',
      city: 'LB Stadium, Hyderabad',
      name: 'Sid Sriram Live in Concert | Hyderabad',
      price: '1799',
      image:
        'https://media.insider.in/image/upload/c_crop,g_custom/v1757064771/dyya7liocbcr0ftfklbq.jpg',
      gallery: [
        'https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1757064755%2Fpo59anuajehxosysu8kc.jpg',
        'https://media.insider.in/image/upload/w_800/v1752068319/odtubzn7cxirxogtnjal.jpg',
        'https://media.insider.in/image/upload/w_800/v1752068318/napv2lkvff6wdolibeaa.jpg',
      ],
      description: `Some voices don’t just sing, they awaken something deep within.

Sid Sriram is one of those rare artists who doesn’t just perform music… he becomes it.


This concert isn’t just about a setlist or a stage, it’s a journey. A moment suspended in time. A powerful collective experience where every note pulls at memory, every silence says what words never could, and every crescendo feels like it was meant just for you.


From the moment the lights go down, you’re no longer in the real world, you’re in his world. A world where the boundaries between classical and contemporary dissolve. Where Indian roots blend effortlessly with soul, R&B, and electronic textures. Where vulnerability is strength, and sound is emotion.


This is where the crowd breathes as one. Thousands of voices singing along, yet every person feeling like they’re the only one in the room. Sid’s voice has that magic, intimate and infinite, fragile and fierce. Whether it’s the quiet ache of a love song or the electric energy of a live jam, every performance feels like a revelation.


The production is immersive. The lighting, the visuals, the sound, meticulously crafted to draw you in and hold you there. This isn’t about spectacle for the sake of it. It’s about building a world where the music can speak louder, hit deeper, and stay longer.


This is more than a concert, it’s an emotional pilgrimage.

For the brokenhearted and the dreamers.

For the ones who believe in music’s power to heal, to move, to connect.


So come as you are, with your stories, your scars, your joy.

Leave with something unforgettable.


Because this night isn’t just about Sid Sriram. It’s about all of us, and the music that brings us home.`,
      rating: '4.6',
      directions:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87136.95693360048!2d79.52166876285912!3d17.95829488026256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33450bd75e4be7%3A0x9306909c277bc137!2sWarangal%2C%20Telangana!5e1!3m2!1sen!2sin!4v1760946957232!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },
    {
      id: '3',
      city: 'Quake Arena, Hyderabad',
      name: 'Day Of The Dead Ft. Talwiinder At Quake Arena',
      price: '1101',
      image: 'https://media.insider.in/image/upload/c_crop,g_custom/v1758806392/j9nkvn6l9gk37rfac132.jpg',
      gallery: [
        'https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1758806378%2Fmspkxlo4vdhjfptkyx8i.jpg',
        'https://media.insider.in/image/upload/w_800/v1759157925/wx7nyxtpgitcvywdlqm5.jpg',
      ],
      description:
        'A classical music and dance festival held in December–January, featuring top Carnatic musicians and Bharatanatyam dancers.',
      rating: '4.9',
      directions:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356938.3962299927!2d79.87898130832133!3d13.047985954524863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1760946992668!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>9',
    },
  ];

  getEvents() {
    return of(this.allEvents);
  }

  getEventDetials(aid: any) {
    let actid = this.allEvents.findIndex((i) => i.id == aid);
    return this.allEvents[actid];
    console.log(this.allEvents);
  }

  addevent(event: any) {
    this.allEvents.push(event);
    return 'Event Added';
  }

  deleteEvent(eid: any) {
    let deleteid = this.allEvents.findIndex((i) => i.id == eid);

    if (deleteid != -1) {
      this.allEvents.splice(deleteid, 1);

      return 'Event Deleted...';
    } else {
      return 'Event Not Found...!!!';
    }
  }

  updateEvent(eid: any) {
    const index = this.allEvents.findIndex((i) => i.id === eid.id);

    if (index !== -1) {
      this.allEvents.splice(index, 1, eid);
      alert('Event updated successfully!');
    } else {
      alert('Event not found!');
    }
  }
}
