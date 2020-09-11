import React, { useState } from "react";
import Header from "../Header/Header";
import CardsList from "../CardsList/CardsList";
import Footer from "../Footer/Footer";
import Details from "../Details/Details";
import AddPlacePopup from "../AddPlacePopup/AddPlacePopup";
import { geoApi } from "../../services/GeoYandexApi";
import withErrorBoundry from "../hocs/withErrorBoundry";
import "./app.css";
import Loader from "../Loader/Loader";
import NotFoundPopup from "../NotFoundPopup/NotFoundPopup";

const places = ["Москва", "Калифорния", "Веллингтон"];

const App = () => {
  const [cards, setCards] = useState([]);
  const [openedPopup, setOpenedPopup] = useState(false);
  const [isDetailsPopupOpened, setIsDetailsPopupOpened] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState();
  const desableLoading = () =>
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  const getWeatherData = place => {
    setIsLoading(true);
    return geoApi.getCoords(place).then(card => {
      setCards(cards => {
        const newCards = JSON.parse(JSON.stringify(cards));
        return [...newCards, card];
      });
      desableLoading();
    });
  };

  React.useEffect(() => {
    places.forEach(getWeatherData);
  }, []);

  const onAddCardSubmit = ({ name }) => {
    getWeatherData(name)
      .then(closeAllPopups)
      .catch(err => {
        setSearchError(err);
        desableLoading();
      });
  };

  const handleAddPlaceClick = () => {
    setOpenedPopup(true);
  };
  const openDetailsPopup = card => {
    setSelectedCard(card);
    setIsDetailsPopupOpened(true);
  };

  const deleteCard = card => {
    const ind = cards.findIndex(el => el._id === card._id);
    setCards([...cards.slice(0, ind), ...cards.slice(ind + 1)]);
  };
  const closeAllPopups = () => {
    setOpenedPopup(false);
    setIsDetailsPopupOpened(false);
  };

  return (
    <>
      <Header onAddPlace={handleAddPlaceClick} />
      <CardsList
        cards={cards}
        onBasketClick={deleteCard}
        onCardClick={openDetailsPopup}
      />
      <AddPlacePopup
        open={openedPopup}
        onClose={closeAllPopups}
        onAddCardSubmit={onAddCardSubmit}
      />

      <NotFoundPopup 
        open={searchError} 
        onClose={() => setSearchError(false)} 
      />

      <Details
        open={isDetailsPopupOpened}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      <Loader open={isLoading}/>
      <Footer />
    </>
  );
};

export default withErrorBoundry(App);
