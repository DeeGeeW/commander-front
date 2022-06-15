import { Component } from '@angular/core';
import axios from 'axios';

// type Card = {
//    deck_id: number;
//    card_img: string;
//    is_active: boolean;
//    is_hand: boolean;
//    is_stack: boolean;
//    is_battlefield: boolean;
//    is_graveyard: boolean;
//    is_exile: boolean;
//    tapped: boolean;
//    deck_num: number;
//    counters: string;
//    is_land: boolean;
//    is_creature: boolean;
//    hand_id: number;
//    stack_id: number;
//    battlefeild_id: number;
//    graveyard_id: number;
//    exile_id: number;
type Deck = {
  commander: string;
  battlefield: string;
  life: number;
  turn_num: number;
  id: number;
  cards: [];
}



type GetDecksResponse = {
  data: Deck[];
};

async function getDecks() {
    // 👇️ const data: GetDecksResponse
    var { data } = await axios.get<GetDecksResponse>(
      'http://localhost:3000/decks',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data));
    var decks = JSON.stringify(data);
    console.log(decks);
    console.log(data);
    // const decks = JSON.stringify(data);
    

    // 👇️ "response status is: 200"
    console.log('response status is: ');
    // while (i < decks.length) {
    //   return decks[i];
    //   i++;
    // }
    return decks;

    return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'An unexpected error occurred';
  //   }
  // }
    };

getDecks();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commander';
  decks = 'decks';
}
