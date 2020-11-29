/**
 * TypeScript entities and constants
 */
export interface User {
    name: string;
    email: string;
    phone: string;
    address: string;
    birth: string;
    img: string;
}

export const USERS_DATA: User[] = [
    {
        name:    'Benjamin',
        email:   'Cum@nisi.net',
        phone:   '06 81 66 27 87',
        address: 'San Marcello',
        birth:   '30-09-94',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Patrick',
        email:   'Nam.ac@NullafacilisisSuspendisse.net',
        phone:   '09 21 67 83 93',
        address: 'Lerwick',
        birth:   '09-09-04',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Alfonso',
        email:   'Nulla.interdum@arcu.com',
        phone:   '02 98 26 70 13',
        address: 'Penticton',
        birth:   '29-08-92',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Murphy',
        email:   'semper@tinciduntneque.edu',
        phone:   '03 90 01 66 75',
        address: 'Bharuch',
        birth:   '14-10-93',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Timon',
        email:   'ultricies.sem@ipsum.edu',
        phone:   '06 03 89 23 58',
        address: 'Piedecuesta',
        birth:   '10-07-94',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Abraham',
        email:   'tristique@vel.net',
        phone:   '07 54 53 45 19',
        address: 'Billings',
        birth:   '16-09-97',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Oleg',
        email:   'quis.urna@seddictumeleifend.co.uk',
        phone:   '05 77 04 89 91',
        address: 'Montgomery',
        birth:   '05-06-06',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Dean',
        email:   'aliquam.iaculis@dui.co.uk',
        phone:   '04 37 33 58 46',
        address: 'Lake Cowichan',
        birth:   '15-06-96',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Clayton',
        email:   'lorem.lorem@felisNullatempor.ca',
        phone:   '05 23 48 42 40',
        address: 'Cappelle sul Tavo',
        birth:   '10-07-00',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Chester',
        email:   'Nullam@antebibendum.ca',
        phone:   '09 69 96 38 13',
        address: 'Proddatur',
        birth:   '17-05-01',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Porter',
        email:   'Integer.mollis@velitinaliquet.org',
        phone:   '05 56 07 74 07',
        address: 'Mödling',
        birth:   '27-12-01',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Keane',
        email:   'blandit@morbitristique.co.uk',
        phone:   '04 49 76 64 47',
        address: 'Tresigallo',
        birth:   '27-05-99',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Chaney',
        email:   'ac.metus.vitae@ultriciesadipiscingenim.org',
        phone:   '09 83 86 43 76',
        address: 'Novosibirsk',
        birth:   '25-01-05',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Cody',
        email:   'molestie.dapibus.ligula@in.ca',
        phone:   '03 18 97 85 40',
        address: 'Pike Creek',
        birth:   '24-12-94',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Clinton',
        email:   'Curabitur.sed.tortor@erosturpis.ca',
        phone:   '04 42 14 83 00',
        address: 'Terrance',
        birth:   '26-11-91',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'James',
        email:   'sollicitudin@sodalesMauris.co.uk',
        phone:   '04 05 13 61 44',
        address: 'São Luís',
        birth:   '06-12-91',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Adrian',
        email:   'eu.nibh.vulputate@Sedidrisus.org',
        phone:   '07 67 71 12 38',
        address: 'Montaldo Bormida',
        birth:   '17-12-00',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Denton',
        email:   'elit@erat.co.uk',
        phone:   '04 88 53 20 36',
        address: 'Villa Alemana',
        birth:   '11-06-93',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Lamar',
        email:   'risus@nisiMaurisnulla.co.uk',
        phone:   '06 59 47 21 58',
        address: 'Madiun',
        birth:   '05-11-03',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Ezekiel',
        email:   'quis.massa@venenatislacusEtiam.ca',
        phone:   '04 35 87 91 09',
        address: 'Nieuwkapelle',
        birth:   '10-09-95',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Daniel',
        email:   'dui.nec.tempus@dapibusligula.co.uk',
        phone:   '04 71 29 65 99',
        address: 'Breton',
        birth:   '07-05-05',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Ray',
        email:   'interdum.libero.dui@risusatfringilla.net',
        phone:   '04 56 44 12 10',
        address: 'Lac-Serent',
        birth:   '26-06-06',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Buckminster',
        email:   'sed@Aliquamvulputateullamcorper.ca',
        phone:   '04 14 88 41 39',
        address: 'Baulers',
        birth:   '12-03-95',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Murphy',
        email:   'Proin.sed.turpis@elementumpurus.com',
        phone:   '01 59 40 47 83',
        address: 'Scanzano Jonico',
        birth:   '11-04-00',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Arsenio',
        email:   'molestie@eros.org',
        phone:   '04 24 88 95 50',
        address: 'Verzegnis',
        birth:   '04-09-92',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Driscoll',
        email:   'dignissim.Maecenas@utipsumac.com',
        phone:   '07 78 69 38 37',
        address: 'Waalwijk',
        birth:   '18-01-99',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Carl',
        email:   'vestibulum@aliquamadipiscinglacus.co.uk',
        phone:   '02 56 03 07 31',
        address: 'Ludlow',
        birth:   '16-11-01',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Thomas',
        email:   'risus.Duis@Fuscedolorquam.edu',
        phone:   '07 17 58 64 06',
        address: 'Fuenlabrada',
        birth:   '05-01-98',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Keith',
        email:   'lacus.Quisque.imperdiet@ac.net',
        phone:   '06 44 06 04 20',
        address: 'Thurso',
        birth:   '30-09-01',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Aidan',
        email:   'varius@Vivamusrhoncus.ca',
        phone:   '03 21 04 72 84',
        address: 'Taltal',
        birth:   '12-04-98',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'Raja',
        email:   'Phasellus.fermentum@enimMaurisquis.co.uk',
        phone:   '02 68 21 83 08',
        address: 'Värnamo',
        birth:   '29-12-95',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    'George',
        email:   'lobortis.risus.In@Proin.org',
        phone:   '06 54 50 42 24',
        address: 'Macklin',
        birth:   '26-02-98',
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    }
];
