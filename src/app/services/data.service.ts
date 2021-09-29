import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }


    getVideoList() {
        const videoList = [
            {
                userName: 'userName2',
                likes: '344',
                comments: '40',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/1.mp4?alt=media&token=36032747-7815-473d-beef-061098f08c18',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile2.jpeg?alt=media&token=b1fdd00d-5d6e-4705-980d-4ef3e70ff6c5',
            },
            {
                userName: 'alan4747',
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
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/8.mp4?alt=media&token=87e20ffd-2b5c-422a-ad85-33b90b4e2169',
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

        return videoList;
    }

    getTrends() {
        const trends = [{
            trendName: 'oneday',
            viewCounts: '117.0M',
            trendProfiles: [{
                id: 0,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 1,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 2,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9eb176d5871e4ab3a68fdf02e2343ccc_1631272060?x-expires=1632960000&x-signature=Eb5si%2F26R%2BK2eAeQpyEcHtbazwY%3D'
            }, {
                id: 3,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 4,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 5,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }]
        },
            {
                trendName: 'alan4747',
                viewCounts: '340.0B',
                trendProfiles: [{
                    id: 0,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 1,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 2,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 3,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 4,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 5,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }]
            }];
        return trends;
    }

    getSlides() {
        const slides = [
            {
                id: 0,
                photo: './assets/png/1.jpg'
            },
            {
                id: 1,
                photo: './assets/png/2.jpg'
            },
            {
                id: 2,
                photo: './assets/png/1.jpg'
            }
        ];
        return slides;
    }
}
