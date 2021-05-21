import { shuffle, differenceWith, isEqual } from 'lodash';

import { Card } from './video-poker.models';
import { CardDeck } from './video-poker.constants';

const randomCards = (savedCards: Card[]) => {
  const remainingDeck = differenceWith(CardDeck, savedCards, isEqual);
  const outputCards = shuffle(remainingDeck).slice(0, 5 - savedCards.length);
  return outputCards;
};

export { randomCards };
