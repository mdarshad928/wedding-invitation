export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Md Arshad',
            child: 'Son of Abdul Hannan',
            father: 'Lorem',
            mother: 'Ipsum',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Rani Ali',
            child: 'Daughter of Asgar Ali',
            father: 'Lorem',
            mother: 'Ipsum',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'February',
            date: '24',
            day: 'Monday',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'February',
            date: '26',
            day: 'Wednesday',
            hours: {
                start: '18.00',
                finish: 'Selesai'
            }
        },
        address: 'Pasnauli Gagan, Maharajganj, Siwan, Bihar (841238)'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    gallery: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    // bank: [
    //     {
    //         id: 1,
    //         name: 'Lorem Ipsum',
    //         icon: './src/assets/images/bca.png',
    //         rekening: '12345678'
    //     },
    //     {
    //         id: 2,
    //         name: 'Ipsum Lorem',
    //         icon: './src/assets/images/bri.png',
    //         rekening: '12345678'
    //     },
    // ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            text: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            text: 'To-be-Wed',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            text: 'Date',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            text: 'Gallery',
            icon: 'bx bxs-photo-album',
            path: '#gallery',
        },
        {
            id: 5,
            text: 'Greeting',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
