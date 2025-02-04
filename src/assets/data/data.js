export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Md Arshad',
            child: 'Son of Abdul Hannan',
            father: 'Abdul Hannan',
            mother: '',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Rani Ali',
            child: 'Daughter of Asgar Ali',
            father: 'Asgar Ali',
            mother: '',
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
                start: '18.00',
                finish: 'Until Finish'
            },
            address: 'At residence of Asgar Ali, Mustafabad, Goriakothi, Siwan, Bihar'
        },
        reception: {
            year: '2025',
            month: 'February',
            date: '26',
            day: 'Wednesday',
            hours: {
                start: '18.00',
                finish: 'Until Finish'
            },
            address: 'At residence of Abdul Hannan, Pasnauli Gagan, Maharajganj, Siwan, Bihar (841238)'
        },
    },

    link: {
        calendar: 'https://calendar.app.google/6RJxpphgAxioUhBM9',
        mapMarriage: 'https://maps.app.goo.gl/yBupneVp1FMsG9GAA',
        mapReception: 'https://maps.app.goo.gl/LqtsU6iJP6N1EnrQA',
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

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyWs3kp3QrZZIPt4G8UoXsQdgzemOn29jabrjcwbeE2MxGmzpf1ss2nVRvTZvWi2zFxDw/exec',

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
            path: '#wishes',
        },
    ],
}
