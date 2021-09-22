import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    direction: 'vertical'
  };
  videoList = [
    {
      userName: 'userName1',
      likes: '1.8k',
      comments: '190',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/4.mp4?alt=media&token=517ad60c-ca28-400e-ab46-49fb8c122d75',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile1.jpg?alt=media&token=567ea332-04e8-4c64-afb0-8152c6f12fec',
    }, {
      userName: 'userName2',
      likes: '344',
      comments: '40',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/1.mp4?alt=media&token=36032747-7815-473d-beef-061098f08c18',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile2.jpeg?alt=media&token=b1fdd00d-5d6e-4705-980d-4ef3e70ff6c5',
    },
    {
      userName: 'userName3',
      likes: '18.5k',
      comments: '4323',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/3.mp4?alt=media&token=a7ccda22-7264-4c64-9328-86a4c2ec31cd',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile3.jpg?alt=media&token=d65b2ed7-4164-4149-a5c7-8620201e8411',
    },
    {
      userName: 'userName4',
      likes: '7.3k',
      comments: '120',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/2.mp4?alt=media&token=b6218221-6699-402b-8b89-7e3354ac32dc',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile4.jpg?alt=media&token=399ca1f4-2017-4f48-af21-0aa6a7b17550',
    },
    {
      userName: 'userName5',
      likes: '12k',
      comments: '89',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/5.mp4?alt=media&token=965a0494-7aaf-4248-85c5-fefac581ee7f',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile5.jpeg?alt=media&token=7fbe5118-c2e9-4550-a468-3eb8a4d34d6a',
    },
    {
      userName: 'userName6',
      likes: '10.8k',
      comments: '4390',
      url: 'https://v16m.tiktokcdn.com/4cd1c6ee4ae7f6014d7b2a0f75d7d9a2/614bd33c/video/tos/alisg/tos-alisg-pve-0037c001/e6c1df464fa5477b8cc998dc4bc2153c/?a=1233&br=2602&bt=1301&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98CcoejL4kag3&l=2021092219065801019018515213208F9D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amkzZjY6ZjdyNzMzODczNEApMzk1ZDlpaDw0NzQ8OThpPGc0NW40cjRfYHFgLS1kMS1zczUwMDRgYjIxYWMwLS1gYDU6Yw%3D%3D&vl=&vr=',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile6.jpeg?alt=media&token=e747af9e-4775-484e-9a27-94b2426f319c',
    },
    {
      userName: 'userName7',
      likes: '1.2k',
      comments: '289',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/8.mp4?alt=media&token=87e20ffd-2b5c-422a-ad85-33b90b4e2169',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile6.jpeg?alt=media&token=e747af9e-4775-484e-9a27-94b2426f319c',
    },
    {
      userName: 'userName8',
      likes: '7.9k',
      comments: '567',
      url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/9.mp4?alt=media&token=83911bd2-6083-43d1-824e-2049f1fb11e7',
      userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile6.jpeg?alt=media&token=e747af9e-4775-484e-9a27-94b2426f319c',
    }
  ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.videoList);
  }

}
