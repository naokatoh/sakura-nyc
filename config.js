var config = {
    style: 'mapbox://styles/nk2970/cl23rcono001814mm4qw64gle/draft',
    accessToken: 'pk.eyJ1IjoibmsyOTcwIiwiYSI6ImNreDR4Z3A0ZDF5aWYycHA5NHhiZWNidTkifQ.cVTH3tEmOXjDoRM39IDoJA',
    showMarkers: true,
    markerColor: '#D35889',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Cherry Blossoｍs in NYC',
    subtitle: '10 Parks to Enjoy Cherry Blossoms in New York City',
    byline: 'By Nao Kato Hidaka',
    footer: 'This story was done for Data Studio, a class in the Columbia Journalism School. You can view source code for this project in the GitHub repository <a href="https://github.com/naokatoh/sakura-nyc">here</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'fully',
            hidden: false,
            title: "Spring is on its way!",
            image: './images/sakura_park.jpg',
            description: "Winter is over, and now it’s finally cherry blossom season in the Big Apple. According to the <a href=https://tree-map.nycgovparks.org/tree-map/species/92410>New York Street Tree Map</a>, over 26,000 cherry blossoms are on the city's street.  But it’s Spring.  Who doesn’t want to enjoy a picnic or just walk under blooming cherry blossoms? Here are <a href=https://www.nycgovparks.org/highlights/best-parks-to-see-cherry-blossoms-in-new-york-city>the ten best parks to see cherry blossoms in New York City</a>.(Photo by Nao Kato)",
           
            location: {
                
            center: [-73.99442, 40.73067],
            zoom: 10.33,
            pitch: 45.00,
            bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sakura Park',
            image: './images/sakura_park2.jpg',
            image_description: "Sakura Park",

            // "C:\Users\nao22\Foundation\data_studio\sakura_nyc\storytelling-main\storytelling-main\src\images\sakura_park2.jpg"
            
            description: "Located in the Morningside Heights. Cherry blossoms in the park were a gift from Japan in 1912. The park's name, Sakura (桜) means cherry blossoms in Japanese. (Photo by Nao Kato)",
            location: {
                center: [-73.96217, 40.81319],
                zoom: 18,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Riverside Park Cherry Walk',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Riverside_Park_03.jpg',
            description: "The park has cherry trees alongside the path between 100th Street and 125th Street. You can find fluffy pink flowers of  Kwanzan cherry, which usually bloom in late April and early May.(Photo: <a href=http://creativecommons.org/licenses/by-sa/3.0/>Wikimedia Commons</a>)",
            location: {
                center:[-73.96960, 40.80763],
                zoom: 15.98,
                pitch: 45.00,
                bearing: 0.00
            },


            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Central Park',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Central_Park%2C_New_York%2C_NY%2C_USA_-_panoramio_%28151%29.jpg',
            description: "There are several spots to see cherry blossoms in the park, including the Central Park Reservoir and the Great Lawn. Cherry Hill is one of the most photogenic spots to take postcard-worthy photos. (Photo: <a href=https://commons.wikimedia.org/wiki/File:Central_Park,_New_York,_NY,_USA_-_panoramio_(151).jpg>Wikimedia Commons</a>)",
            location: {
            center: [-73.97224, 40.77447],
            zoom: 16.46,
            pitch: 45.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: "Randall's Island Park",
            // image: './path/to/image/source.png',
            description: "Each Spring Randall's Island Park celebrates cherry trees blooming with <a href=https://www.nycgovparks.org/parks/randalls-island/events/2022/05/01/cherry-blossom-festival>Cherry Blossom Festival</a>. This year, it is held on Sunday, May 1.",
            location: {
                center: [-73.92586, 40.79422],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Pelham Bay Park',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Yoshino_Sakura_Tidal_Basin_DC.jpg',
            description: "Pelham Bay Park in the Bronx is the City's largest park property. It is three times larger than the Central Park in Manhattan, and visitors can enjoy various activities, including BBQ and horse riding. They can find Yoshino cherry trees near the City Island Bridge at this time of the year. (Photo: Yoshino Cherry [this photo is not taken in this park]<a href=https://commons.wikimedia.org/wiki/File:Yoshino_Sakura_Tidal_Basin_DC.jpg>, via Wikimedia Commons</a>)",
            location: {
                center:[-73.81006,40.86695],
                zoom: 15.98,
                pitch: 45.00,
                bearing: 0.00
            },


            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },



        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flushing Meadows Corona Park',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/2016-03-12_10_26_38_Okame_Cherry_blossoms_at_the_Lawrence_Road_Presbyterian_Church_in_Lawrence%2C_New_Jersey.jpg',
            description: "Near the Unisphere in the Park, gorgeous okame cherry blossoms start to bloom in early to mid-April.(Photo: Okame cherry blossoms  [this photo is not taken in this park] <a href=https://commons.wikimedia.org/wiki/File:2016-03-12_10_26_38_Okame_Cherry_blossoms_at_the_Lawrence_Road_Presbyterian_Church_in_Lawrence,_New_Jersey.jpg>via Wikimedia Commons</a>",
            location: {
                center: [-73.84457,40.74649]
                ,
                zoom: 18,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: "Hunter's Point South Park",
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Hunter%E2%80%99s_Point_South_Park_-_Phase_6_-_Overlook.jpg',
            description: "This Park in Long Island City also has Yoshino cherry trees, which go with a beautiful waterfront park atmosphere and Manhattan's skyline view. (Photo:<a href=https://commons.wikimedia.org/wiki/File:Hunter%E2%80%99s_Point_South_Park_-_Phase_6_-_Overlook.jpg>Wikimedia Commons</a>",
            location: {
                center:[-73.96064,40.74247]
                ,
                zoom: 15.98,
                pitch: 45.00,
                bearing: 0.00
            },


            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


      

        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rainey Park',
            image: './images/tweet.jpg',
            description: "In this Park in Queens, visitors can appreciate two kinds of cherry trees: okame and kwanzan cherry. These two cherries bloom at different times-- okame flowers in early Spring and kwanzan bloom later so you can't miss cherry blossoms throughout Spring.(Twitter post from <a href=https://twitter.com/NYCParks/status/1504488683449118733?s=20&t=Cp7Sd5rD6-DeYTbUl2nSVA>@NYCParks</a>)",
            location: {
                center:[-73.94076,40.76641]
                ,
                zoom: 15.98,
                pitch: 45.00,
                bearing: 0.00
            },


            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Brooklyn Botanic Garden',
            image: './images/cherry-traker.jpg',
            description: "The Park has several hundred cherry trees. The Cherry Esplanade, an expansive lawn area with allées of cherry and red oak trees in the Park, is an excellent spot for a picnic in Spring weekends. The Park's <a href=https://www.bbg.org/collections/cherries>'Cherrywatch'</a> will show visitors which cherry trees are blooming. ",
            location: {
                center:[-73.96462,40.66887]
                ,
                zoom: 18,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'twelveth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Silver Lake Park',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Silver_Lake_%28aerial_view_of_reservoir_and_surrounding_area%29_%28NYPL_b15279351-104842%29.tiff/lossy-page1-800px-Silver_Lake_%28aerial_view_of_reservoir_and_surrounding_area%29_%28NYPL_b15279351-104842%29.tiff.jpg',
            description: "This Park in Staten Island has kwanzan cherry blossoms along the lake. There are plenty of Spring flowers blooming. Visitors can find out their peaks through <a href=https://www.nycgovparks.org/greening/bloom-guide/staten-island>Island's Bloom Guide</a>.(Photo:<a href=https://commons.wikimedia.org/wiki/File:Silver_Lake_(aerial_view_of_reservoir_and_surrounding_area)_(NYPL_b15279351-104842).tiff>Wikimedia Commons</a>)",
            location: {
                center: [-74.09179, 40.62838],
                zoom: 15.63,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'thirteenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: "🌷Don't forget other spring flowers🌷",
            // image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Central_Park%2C_New_York%2C_NY%2C_USA_-_panoramio_%28151%29.jpg',
            description: "Apart from cherry trees, NYC Park's '<a href=https://www.nycgovparks.org/highlights/signs-of-spring-in-nyc-parks>Signs of Spring NYC Parks</a>' shows various spring flowers blooming in the City. Enjoy Spring! ",
            location: {
                center: [-73.99442, 40.73067],
            zoom: 10.33,
            pitch: 45.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        } 

    ]
};
