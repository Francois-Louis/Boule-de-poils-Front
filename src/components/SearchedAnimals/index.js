/* eslint-disable no-else-return */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAnimals } from 'src/actions/animalSearched';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Loader from '../Loader';
import Arrows from './Arrows';
import AnimalDescription from './AnimalDescription';
import AnimalPicture from './AnimalPicture';
import AssociationContact from './AssociationContact';
import ContactButton from './ContactButton';
import './styles.scss';

const SearchedAnimals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  const displayedProfile = useSelector((state) => state.SearchedAnimals.displayProfile);

  const animalProfile = useSelector((state) => (
    state.SearchedAnimals.animalResults[displayedProfile]
  ));

  const allAnimalProfiles = useSelector((state) => (state.SearchedAnimals.animalResults));

  const showContact = useSelector((state) => (state.SearchedAnimals.showContact));

  if (Array.isArray(allAnimalProfiles) && allAnimalProfiles.length > 0) {
    return (
      <div className="animal__profil">
        <CssBaseline />
        <Arrows />
        <AnimalPicture {...animalProfile} />
        <AnimalDescription {...animalProfile} />
        <ContactButton showContactValue={showContact} />
        {showContact && (<AssociationContact {...animalProfile.association} />)}
      </div>
    );
  }
  else if (allAnimalProfiles === 'void') {
    return (
      <div className="animal__profil">
        <CssBaseline />
        <h2 className="animal__void">Navrés pour vous, mais les animaux que vous recherchiez semblent avoir trouvé leur famille pour la vie !</h2>
        <Button variant="contained" sx={{ mb: '1em', widht: 'sm' }} onClick={refreshPage}><a href="/#searchForm">Effectuer une nouvelle recherche</a></Button>
        <img className="animal__picture" src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="animal's profile" />
      </div>
    );
  }
  else if (allAnimalProfiles === 'error') {
    return (
      <div className="animal__profil">
        <CssBaseline />
        <h1 className="annimal__void">Oh non, votre requête semble avoir rencontré un pépin !</h1>
        <Button variant="contained" sx={{ mb: '1em', widht: 'sm' }} onClick={refreshPage}><a href="/#searchForm">Effectuer une nouvelle recherche</a></Button>
        <img className="animal__picture" src="https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="animal's profile" />
      </div>
    );
  }
  else {
    return (
      <div className="animal__profil">
        <Loader />
      </div>
    );
  }
};

export default SearchedAnimals;
