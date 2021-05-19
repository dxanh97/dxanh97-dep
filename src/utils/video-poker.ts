import { shuffle, differenceWith, isEqual } from 'lodash';

import { Card } from '../models/video-poker';
import { CardDeck } from '../constants/video-poker';

const randomCards = (savedCards: Card[]) => {
  const remainingDeck = differenceWith(CardDeck, savedCards, isEqual);
  const outputCards = shuffle(remainingDeck).slice(0, 5 - savedCards.length);
  return [...outputCards, ...savedCards];
};

export { randomCards };
