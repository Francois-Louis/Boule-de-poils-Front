import profilPictureDog from 'src/assets/images/pexels-helena-lopes.jpg';
import profilPictureCat from 'src/assets/images/pexels-lina-kivaka.jpg';

export const animalData = {
  id: 1,
  name: 'Truc',
  gender: 'female',
  picture: profilPictureDog,
  species_id: 'chien',
  age: 4,
  child_compatibility: 'ouaip avec tous les ages',
  other_animal_compatibility: 'non pas les chats',
  garden_needed: 'il doit courir',
  status: 0,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
};

export const allAnimals = [
  {
    id: 1,
    name: 'Truc',
    gender: 'female',
    picture: profilPictureDog,
    species_id: 'chien',
    age: 4,
    child_compatibility: 'ouaip avec tous les ages',
    other_animal_compatibility: 'non pas les chats',
    garden_needed: 'il doit courir',
    status: 0,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
    association: {
      associationName: '1000moustaches',
      associationLocalisation: {
        address: '1rue nfjehfkjr',
        zip_code: '45678',
        city: 'Une vile machin',
      },
      associationPhone: '06567997665',
      associationEmail: 'unmail.unmail@gmonmail.com',
    },

  },
  {
    id: 2,
    name: 'Machin',
    gender: 'male',
    picture: profilPictureCat,
    species_id: 'chat',
    age: 7,
    child_compatibility: 'non il est craintif',
    other_animal_compatibility: 'oui mais pas les très petits',
    garden_needed: 'non appartement ok',
    status: 1,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, assumenda magni! Modi maxime quos, nemo fugit, inventore magni unde aliquam ipsum natus non sapiente eius eos vitae, sed neque quaerat. Dolorem numquam, atque rerum ea praesentium voluptates nemo illum vero!',
    association: {
      associationName: 'fhusgfujs',
      associationLocalisation: {
        address: '1rue hahahahhaha',
        zip_code: '90456',
        city: 'Une villllllllle machin',
      },
      associationPhone: '06111111111',
      associationEmail: 'mail.mial@gmonmail.com',
    },
  },
];