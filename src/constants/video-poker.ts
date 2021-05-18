import { Card, CardSuit, CardValue } from '../models/video-poker';

const { HEART, DIAMOND, SPADE, CLUB } = CardSuit;
// prettier-ignore
const {
  ACE, TWO, THREE, FOUR,
  FIVE, SIX, SEVEN, EIGHT,
  NINE, TEN, JACK, QUEEN, KING,
} = CardValue;

const Joker: Card = { displayText: '🃟' };
const CardBack: Card = { displayText: '🂠' };

const CardDeck: Card[] = [
  { suit: HEART, value: ACE, displayText: '🂱' },
  { suit: HEART, value: TWO, displayText: '🂲' },
  { suit: HEART, value: THREE, displayText: '🂳' },
  { suit: HEART, value: FOUR, displayText: '🂴' },
  { suit: HEART, value: FIVE, displayText: '🂵' },
  { suit: HEART, value: SIX, displayText: '🂶' },
  { suit: HEART, value: SEVEN, displayText: '🂷' },
  { suit: HEART, value: EIGHT, displayText: '🂸' },
  { suit: HEART, value: NINE, displayText: '🂹' },
  { suit: HEART, value: TEN, displayText: '🂺' },
  { suit: HEART, value: JACK, displayText: '🂻' },
  { suit: HEART, value: QUEEN, displayText: '🂽' },
  { suit: HEART, value: KING, displayText: '🂾' },

  { suit: DIAMOND, value: ACE, displayText: '🃁' },
  { suit: DIAMOND, value: TWO, displayText: '🃂' },
  { suit: DIAMOND, value: THREE, displayText: '🃃' },
  { suit: DIAMOND, value: FOUR, displayText: '🃄' },
  { suit: DIAMOND, value: FIVE, displayText: '🃅' },
  { suit: DIAMOND, value: SIX, displayText: '🃆' },
  { suit: DIAMOND, value: SEVEN, displayText: '🃇' },
  { suit: DIAMOND, value: EIGHT, displayText: '🃈' },
  { suit: DIAMOND, value: NINE, displayText: '🃉' },
  { suit: DIAMOND, value: TEN, displayText: '🃊' },
  { suit: DIAMOND, value: JACK, displayText: '🃋' },
  { suit: DIAMOND, value: QUEEN, displayText: '🃍' },
  { suit: DIAMOND, value: KING, displayText: '🃎' },

  { suit: CLUB, value: ACE, displayText: '🃑' },
  { suit: CLUB, value: TWO, displayText: '🃒' },
  { suit: CLUB, value: THREE, displayText: '🃓' },
  { suit: CLUB, value: FOUR, displayText: '🃔' },
  { suit: CLUB, value: FIVE, displayText: '🃕' },
  { suit: CLUB, value: SIX, displayText: '🃖' },
  { suit: CLUB, value: SEVEN, displayText: '🃗' },
  { suit: CLUB, value: EIGHT, displayText: '🃘' },
  { suit: CLUB, value: NINE, displayText: '🃙' },
  { suit: CLUB, value: TEN, displayText: '🃚' },
  { suit: CLUB, value: JACK, displayText: '🃛' },
  { suit: CLUB, value: QUEEN, displayText: '🃝' },
  { suit: CLUB, value: KING, displayText: '🃞' },

  { suit: SPADE, value: ACE, displayText: '🂡' },
  { suit: SPADE, value: TWO, displayText: '🂢' },
  { suit: SPADE, value: THREE, displayText: '🂣' },
  { suit: SPADE, value: FOUR, displayText: '🂤' },
  { suit: SPADE, value: FIVE, displayText: '🂥' },
  { suit: SPADE, value: SIX, displayText: '🂦' },
  { suit: SPADE, value: SEVEN, displayText: '🂧' },
  { suit: SPADE, value: EIGHT, displayText: '🂨' },
  { suit: SPADE, value: NINE, displayText: '🂩' },
  { suit: SPADE, value: TEN, displayText: '🂪' },
  { suit: SPADE, value: JACK, displayText: '🂫' },
  { suit: SPADE, value: QUEEN, displayText: '🂭' },
  { suit: SPADE, value: KING, displayText: '🂮' },
];

export { CardDeck, CardBack, Joker };
