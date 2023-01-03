import * as Scry from 'scryfall-sdk';

(async () => {
  const cardsFromPage7 = await Scry.Cards.search('year:2022', 7).cancelAfterPage().waitForAll();
  console.log(cardsFromPage7.length);
})();
