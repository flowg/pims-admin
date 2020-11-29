/**
 * App imports
 */
import { ValueWithValidity } from './value-with-validity';

/**
 * TypeScript entities and constants
 */
export interface User {
    name: ValueWithValidity;
    email: ValueWithValidity;
    phone: ValueWithValidity;
    address: ValueWithValidity;
    birth: ValueWithValidity;
    img: string;
}

export const USERS_DATA: User[] = [
    {
        name:    { value: 'Benjamin', valid: true },
        email:   { value: 'Cum@nisi.net', valid: false },
        phone:   { value: '06 81 66 27 87', valid: true },
        address: { value: 'San Marcello', valid: true },
        birth:   { value: '30-09-94', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Patrick', valid: true },
        email:   { value: 'Nam.ac@NullafacilisisSuspendisse.net', valid: true },
        phone:   { value: '09 21 67 83 93', valid: true },
        address: { value: 'Lerwick', valid: true },
        birth:   { value: '09-09-04', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Alfonso', valid: true },
        email:   { value: 'Nulla.interdum@arcu.com', valid: true },
        phone:   { value: '02 98 26 70 13', valid: true },
        address: { value: 'Penticton', valid: true },
        birth:   { value: '29-08-92', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Murphy', valid: true },
        email:   { value: 'semper@tinciduntneque.edu', valid: true },
        phone:   { value: '03 90 01 66 75', valid: true },
        address: { value: 'Bharuch', valid: true },
        birth:   { value: '14-10-93', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Timon', valid: true },
        email:   { value: 'ultricies.sem@ipsum.edu', valid: true },
        phone:   { value: '06 03 89 23 58', valid: true },
        address: { value: 'Piedecuesta', valid: true },
        birth:   { value: '10-07-94', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Abraham', valid: true },
        email:   { value: 'tristique@vel.net', valid: true },
        phone:   { value: '07 54 53 45 19', valid: true },
        address: { value: 'Billings', valid: true },
        birth:   { value: '16-09-97', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Oleg', valid: true },
        email:   { value: 'quis.urna@seddictumeleifend.co.uk', valid: true },
        phone:   { value: '05 77 04 89 91', valid: true },
        address: { value: 'Montgomery', valid: true },
        birth:   { value: '05-06-06', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Dean', valid: true },
        email:   { value: 'aliquam.iaculis@dui.co.uk', valid: true },
        phone:   { value: '04 37 33 58 46', valid: true },
        address: { value: 'Lake Cowichan', valid: true },
        birth:   { value: '15-06-96', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Clayton', valid: true },
        email:   { value: 'lorem.lorem@felisNullatempor.ca', valid: true },
        phone:   { value: '05 23 48 42 40', valid: true },
        address: { value: 'Cappelle sul Tavo', valid: true },
        birth:   { value: '10-07-00', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Chester', valid: true },
        email:   { value: 'Nullam@antebibendum.ca', valid: true },
        phone:   { value: '09 69 96 38 13', valid: true },
        address: { value: 'Proddatur', valid: true },
        birth:   { value: '17-05-01', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Porter', valid: true },
        email:   { value: 'Integer.mollis@velitinaliquet.org', valid: true },
        phone:   { value: '05 56 07 74 07', valid: true },
        address: { value: 'Mödling', valid: true },
        birth:   { value: '27-12-01', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Keane', valid: true },
        email:   { value: 'blandit@morbitristique.co.uk', valid: true },
        phone:   { value: '04 49 76 64 47', valid: true },
        address: { value: 'Tresigallo', valid: true },
        birth:   { value: '27-05-99', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Chaney', valid: true },
        email:   { value: 'ac.metus.vitae@ultriciesadipiscingenim.org', valid: true },
        phone:   { value: '09 83 86 43 76', valid: true },
        address: { value: 'Novosibirsk', valid: true },
        birth:   { value: '25-01-05', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Cody', valid: true },
        email:   { value: 'molestie.dapibus.ligula@in.ca', valid: true },
        phone:   { value: '03 18 97 85 40', valid: true },
        address: { value: 'Pike Creek', valid: true },
        birth:   { value: '24-12-94', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Clinton', valid: true },
        email:   { value: 'Curabitur.sed.tortor@erosturpis.ca', valid: true },
        phone:   { value: '04 42 14 83 00', valid: true },
        address: { value: 'Terrance', valid: true },
        birth:   { value: '26-11-91', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'James', valid: true },
        email:   { value: 'sollicitudin@sodalesMauris.co.uk', valid: true },
        phone:   { value: '04 05 13 61 44', valid: true },
        address: { value: 'São Luís', valid: true },
        birth:   { value: '06-12-91', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Adrian', valid: true },
        email:   { value: 'eu.nibh.vulputate@Sedidrisus.org', valid: true },
        phone:   { value: '07 67 71 12 38', valid: true },
        address: { value: 'Montaldo Bormida', valid: true },
        birth:   { value: '17-12-00', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Denton', valid: true },
        email:   { value: 'elit@erat.co.uk', valid: true },
        phone:   { value: '04 88 53 20 36', valid: true },
        address: { value: 'Villa Alemana', valid: true },
        birth:   { value: '11-06-93', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Lamar', valid: true },
        email:   { value: 'risus@nisiMaurisnulla.co.uk', valid: true },
        phone:   { value: '06 59 47 21 58', valid: true },
        address: { value: 'Madiun', valid: true },
        birth:   { value: '05-11-03', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Ezekiel', valid: true },
        email:   { value: 'quis.massa@venenatislacusEtiam.ca', valid: true },
        phone:   { value: '04 35 87 91 09', valid: true },
        address: { value: 'Nieuwkapelle', valid: true },
        birth:   { value: '10-09-95', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Daniel', valid: true },
        email:   { value: 'dui.nec.tempus@dapibusligula.co.uk', valid: true },
        phone:   { value: '04 71 29 65 99', valid: true },
        address: { value: 'Breton', valid: true },
        birth:   { value: '07-05-05', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Ray', valid: true },
        email:   { value: 'interdum.libero.dui@risusatfringilla.net', valid: true },
        phone:   { value: '04 56 44 12 10', valid: true },
        address: { value: 'Lac-Serent', valid: true },
        birth:   { value: '26-06-06', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Buckminster', valid: true },
        email:   { value: 'sed@Aliquamvulputateullamcorper.ca', valid: true },
        phone:   { value: '04 14 88 41 39', valid: true },
        address: { value: 'Baulers', valid: true },
        birth:   { value: '12-03-95', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Murphy', valid: true },
        email:   { value: 'Proin.sed.turpis@elementumpurus.com', valid: true },
        phone:   { value: '01 59 40 47 83', valid: true },
        address: { value: 'Scanzano Jonico', valid: true },
        birth:   { value: '11-04-00', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Arsenio', valid: true },
        email:   { value: 'molestie@eros.org', valid: true },
        phone:   { value: '04 24 88 95 50', valid: true },
        address: { value: 'Verzegnis', valid: true },
        birth:   { value: '04-09-92', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Driscoll', valid: true },
        email:   { value: 'dignissim.Maecenas@utipsumac.com', valid: true },
        phone:   { value: '07 78 69 38 37', valid: true },
        address: { value: 'Waalwijk', valid: true },
        birth:   { value: '18-01-99', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Carl', valid: true },
        email:   { value: 'vestibulum@aliquamadipiscinglacus.co.uk', valid: true },
        phone:   { value: '02 56 03 07 31', valid: true },
        address: { value: 'Ludlow', valid: true },
        birth:   { value: '16-11-01', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Thomas', valid: true },
        email:   { value: 'risus.Duis@Fuscedolorquam.edu', valid: true },
        phone:   { value: '07 17 58 64 06', valid: true },
        address: { value: 'Fuenlabrada', valid: true },
        birth:   { value: '05-01-98', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Keith', valid: true },
        email:   { value: 'lacus.Quisque.imperdiet@ac.net', valid: true },
        phone:   { value: '06 44 06 04 20', valid: true },
        address: { value: 'Thurso', valid: true },
        birth:   { value: '30-09-01', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Aidan', valid: true },
        email:   { value: 'varius@Vivamusrhoncus.ca', valid: true },
        phone:   { value: '03 21 04 72 84', valid: true },
        address: { value: 'Taltal', valid: true },
        birth:   { value: '12-04-98', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'Raja', valid: true },
        email:   { value: 'Phasellus.fermentum@enimMaurisquis.co.uk', valid: true },
        phone:   { value: '02 68 21 83 08', valid: true },
        address: { value: 'Värnamo', valid: true },
        birth:   { value: '29-12-95', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    },
    {
        name:    { value: 'George', valid: true },
        email:   { value: 'lobortis.risus.In@Proin.org', valid: true },
        phone:   { value: '06 54 50 42 24', valid: true },
        address: { value: 'Macklin', valid: true },
        birth:   { value: '26-02-98', valid: true },
        img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04IQPD-wCoIQ3vpWQy5mjc1HTVrCP1ZvJyg&usqp=CAU'
    }
];
